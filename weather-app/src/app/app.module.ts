
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

import { WeatherService } from './weather.service';
import { WeatherModule } from './weather.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LocationSearchComponent,
    CurrentWeatherComponent,
    WeatherForecastComponent,
  ],
  imports: [
    BrowserModule,
    WeatherModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent],
})


export class AppModule { }
