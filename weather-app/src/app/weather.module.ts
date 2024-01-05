import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationSearchComponent } from './location-search/location-search.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    LocationSearchComponent,
    CurrentWeatherComponent,
    WeatherForecastComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    WeatherService,
  ],
})
export class WeatherModule { }
