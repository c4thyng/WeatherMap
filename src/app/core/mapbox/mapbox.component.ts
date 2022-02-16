import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { flatMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GlobalSearchService } from '../services/global-search.service';
import { WeatherService } from '../services/weather.service';
import { WeatherForecastResponse } from '../models/weather.response';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit, AfterViewInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/light-v10';

  constructor(private _globalSearchService: GlobalSearchService, private _weatherService: WeatherService) { }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 12,
      minZoom: 5,
      maxZoom: 12,
      center: [10.75278, 59.91111] // oslo sentrum
    });

    this._weatherService.getWeatherIcons();

    this._globalSearchService.location$.pipe(flatMap((location) => {
      this.map.setCenter(location.center);
      return this._weatherService.getWeatherForecast(location.center);
    })).subscribe((weatherData) => this.createMarker(weatherData));

    this._globalSearchService.locationUpdated$.subscribe(location => this.showLocation(location.center))
  }

  ngAfterViewInit(): void {

  }

  public showLocation(coordinates: [number, number]) {
    this.map.setCenter(coordinates);
  }

  private createMarker(weatherData: WeatherForecastResponse) {
    const el = document.createElement('div');
    el.className = 'weather-marker';
    el.style.backgroundColor = '#62aa92';
    el.style.padding = '0.5rem';
    const nearestTimeSeries = weatherData.properties.timeseries.flatMap(x => new Date(x.time));
    const exactMoment = new Date();
    const slotIndex = nearestTimeSeries.findIndex(time => time.getHours() > exactMoment.getHours())

    el.innerHTML = `<div style="" fxLayout="row">
      <div>${Math.round(weatherData.properties.timeseries[slotIndex].data.instant.details.air_temperature)} &#8451;</div>
      <div>${Math.round(weatherData.properties.timeseries[slotIndex].data.instant.details.wind_speed)} m/s</div>
      </div>`
    new mapboxgl.Marker(el)
    .setLngLat(weatherData.geometry.coordinates)
    .addTo(this.map);
  }

}
