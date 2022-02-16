import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocationResponse } from '../models/location.response';

@Injectable({
  providedIn: 'root'
})
export class GlobalSearchBackendService {

  baseUrl = 'https://api.mapbox.com/geocoding/v5/';
  accessToken = environment.mapbox.accessToken;

  constructor(private _http: HttpClient) { }

  getLocation(searchText: string): Observable<LocationResponse> {
    const url = this.baseUrl + 'mapbox.places/';

    return this._http.get<LocationResponse>(url + searchText + '.json?access_token=' + this.accessToken);
  }
}
