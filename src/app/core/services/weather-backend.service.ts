import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecastResponse, WeatherLegend } from '../models/weather.response';

@Injectable({
  providedIn: 'root'
})
export class WeatherBackendService {
  private _baseurl: string = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?';

  constructor(private _http: HttpClient) { }

  weatherForecast(coordinates: [number, number]): Observable<WeatherForecastResponse> {
    const url = this._baseurl + 'lat=' + coordinates[1] + '&lon=' + coordinates[0];
    return this._http.get<WeatherForecastResponse>(url);
  }

  weatherDescription(): Observable<WeatherLegend> {
    const url = 'https://api.met.no/weatherapi/weathericon/2.0/legends.json';
    return this._http.get<WeatherLegend>(url);
  }

  weatherIcons() {
    const headers = new HttpHeaders({ 'Accept': 'application/x-download', 'Content-Type': "application/x-download;name=\"weathericon.tgz\"" });

    return this._http.get('https://api.met.no/weatherapi/weathericon/2.0/data', { headers });
  }
}
