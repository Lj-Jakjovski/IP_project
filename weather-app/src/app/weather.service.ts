// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'weatherKEY';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/';
  constructor(private http: HttpClient) {}
  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.baseUrl}weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
  getWeatherForecast(city: string): Observable<any> {
    const url = `${this.baseUrl}forecast?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}