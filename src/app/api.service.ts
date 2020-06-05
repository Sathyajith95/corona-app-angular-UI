import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  configUrl = 'country/';
  constructor(private http: HttpClient) { }

  getCoronaData(country: String) {
    return this.http.get(this.configUrl + country);
  }
}
