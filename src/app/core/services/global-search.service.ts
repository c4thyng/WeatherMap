import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Feature, LocationResponse } from '../models/location.response';
import { GlobalSearchBackendService } from './global-search-backend.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalSearchService {
  location$: Subject<Feature> = new Subject();
  addedLocations: Array<Feature> = [];
  locationUpdated$: Subject<Feature> = new Subject();
  searchText: string = '';

  constructor(private _globalSearchBackendService: GlobalSearchBackendService) { }

  getLocation(searchText: string): Observable<LocationResponse> {
    return this._globalSearchBackendService.getLocation(searchText);
  }

  addLocation(location: Feature) {
    if (this.addedLocations.length < 0) {
      this.addedLocations.push(location);
    } else {
      this.addedLocations.find(x => x.id === location.id) ? null :this.addedLocations.push(location);
    }
  }
}
