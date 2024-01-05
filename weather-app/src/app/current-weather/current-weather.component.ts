import { Component } from '@angular/core';
import { LocationSearchComponent } from '../location-search/location-search.component';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CurrentWeatherComponent,LocationSearchComponent,WeatherForecastComponent],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {

}
