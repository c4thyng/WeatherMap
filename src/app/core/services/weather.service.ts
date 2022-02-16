import { Injectable } from '@angular/core';
import { WeatherBackendService } from './weather-backend.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _weatherBackendService: WeatherBackendService) {
  }

  getWeatherForecast(coordinates: [number, number]) {
    return this._weatherBackendService.weatherForecast(coordinates);
  }

  getWeatherDescription() {
    return this._weatherBackendService.weatherDescription();
  }

  getWeatherIcons() {
    this._weatherBackendService.weatherIcons().subscribe(x => console.log(x));
  }

}
