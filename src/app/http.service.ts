import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

  getLans(){
    return this.http.get("assets/json/lan.json");
  }
}
