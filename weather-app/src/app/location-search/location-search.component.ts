import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeatherComponent } from '../current-weather/current-weather.component';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';

@Component({
  selector: 'app-location-search',
  standalone: true,
  imports: [CurrentWeatherComponent,LocationSearchComponent,WeatherForecastComponent],
  templateUrl: './location-search.component.html',
  styleUrl: './location-search.component.css'
})
// export class LocationSearchComponent {

// }

export class LocationSearchComponent {
  cityName: string = '';

  constructor(private weatherService: WeatherService) {}
  searchWeather() {
    this.weatherService.getCurrentWeather(this.cityName).subscribe(data => {
    });
    this.weatherService.getWeatherForecast(this.cityName).subscribe(data => {
    });
  }
}