import { Injectable, Inject } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FakeUsersService {
  
  baseUrl = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) {
    this.http = http;
  }

  getFakeUsers(dni: number) {
    return this.http.get(`${this.baseUrl}showfakeuser.php?id=${dni}`);
  }

  validar() {

    console.log('entre al validator()')
  }
}
