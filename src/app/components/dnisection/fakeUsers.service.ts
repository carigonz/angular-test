import { Injectable, Inject } from '@angular/core';
import {  HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Person } from "./person";

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeUsersService {
  
  baseUrl = environment.baseUrl;
  fakeUser: [];

  constructor(
    private http: HttpClient
  ) {
    this.http = http;
  }
  
  getFakeUsers(dni: number):Observable <Person> {
    return this.http.get(`${this.baseUrl}showfakeuser.php?dni=${dni}`).pipe( 
      map (res => {
        
        this.fakeUser = res['data'];
        console.log(this.fakeUser);
        return this.fakeUser;

      }),
    catchError(this.handleError)
    )
  };
  
  // getFakeUsers(dni: number) {
  //   getAll(): Observable<Person[]> {
  //     return this.http.get(`${this.baseUrl}/list`).pipe(
  //       map((res) => {
  //         this.cars = res['data'];
  //         return this.cars;
  //     });
  //   }


  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }

}
