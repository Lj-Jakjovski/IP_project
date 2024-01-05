import { Component } from '@angular/core';
import { CurrentWeatherComponent } from '../current-weather/current-weather.component';
import { LocationSearchComponent } from '../location-search/location-search.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [CommonModule,FormsModule,CurrentWeatherComponent,LocationSearchComponent,WeatherForecastComponent],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.css'
})
export class WeatherForecastComponent {
  weatherForecast: any[] = []; //added
}
