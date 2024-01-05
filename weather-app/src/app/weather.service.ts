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
  private apiKey = '054ff2fe662d61440e41bd7d1dde3f9d';
  private baseUrl = 'API_ENDPOINT';
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