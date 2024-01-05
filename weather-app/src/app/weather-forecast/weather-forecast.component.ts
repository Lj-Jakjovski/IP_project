import { Component } from '@angular/core';
import { CurrentWeatherComponent } from '../current-weather/current-weather.component';
import { LocationSearchComponent } from '../location-search/location-search.component';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [CurrentWeatherComponent,LocationSearchComponent,WeatherForecastComponent],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.css'
})
export class WeatherForecastComponent {

}
