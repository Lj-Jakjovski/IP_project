import { Component, Input } from '@angular/core';
import { LocationSearchComponent } from '../location-search/location-search.component';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule,FormsModule,CurrentWeatherComponent,LocationSearchComponent,WeatherForecastComponent],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {
  @Input() weatherData: any; //added
}
