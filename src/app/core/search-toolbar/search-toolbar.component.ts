import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Feature, LocationResponse } from '../models/location.response';
import { GlobalHandlingService } from '../services/global-handling.service';
import { GlobalSearchService } from '../services/global-search.service';

@Component({
  selector: 'app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent implements OnInit {
  locations: Array<Feature> = [];
  showSearchResult =  true;

  searchToolbarFormGroup: FormGroup;

  constructor(private _globalSearchService: GlobalSearchService, private _globalHandlingService: GlobalHandlingService) { }

  ngOnInit(): void {
    this.searchToolbarFormGroup = new FormGroup({
      SearchText: new FormControl('')
    })
  }

  searchByText(searchText: any) {
    if (!this.searchToolbarFormGroup.get('SearchText')?.value) {
      this.showSearchResult = false;
      return;
    }
    this.showSearchResult = true;
    this._globalSearchService.getLocation(searchText.value).pipe(debounceTime(500)).subscribe((x: LocationResponse) => {
      this.locations = x.features
    });
  }

  onSelect(location: Feature) {
    event?.stopImmediatePropagation();
    this.showSearchResult = false;
    this._globalSearchService.location$.next(location); // subject subscribed
    this._globalSearchService.addLocation(location); // add to location-array
    this.searchToolbarFormGroup.get('SearchText')?.patchValue(null)
  }

  focusout() {
    this.showSearchResult = false;
    this.searchToolbarFormGroup.get('SearchText')?.patchValue(null)
  }

  showMenu() {
    this._globalHandlingService.showMenu = !this._globalHandlingService.showMenu;
  }
}
