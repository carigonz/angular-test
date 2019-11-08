import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrySectionService {
  
  baseUrl = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) {
    this.http = http;
  }

  register(dni: number) {
    //return this.http.get(`${this.baseUrl}showfakeuser.php?id=${dni}`);
    console.log('llegue al registro');
  }


}

interface Visit {
  id: number;
  dni: number;
}
