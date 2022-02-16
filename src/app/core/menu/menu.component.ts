import { Component } from '@angular/core';
import { Feature } from '../models/location.response';
import { GlobalHandlingService } from '../services/global-handling.service';
import { GlobalSearchService } from '../services/global-search.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(public globalSearchService: GlobalSearchService, public globalHandlingService: GlobalHandlingService) { }

  onSelect(location: Feature) {
    this.globalSearchService.locationUpdated$.next(location);
    this.globalHandlingService.showMenu = false;
  }
}
