import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginUrl = 'http://localhost:8080/login';
  registerUrl = 'http://localhost:8080/register';

  constructor(private http:HttpClient) { }

  checklogin(email:string, hash:string):Observable<any> {
    let login = {email:email, hash:hash};
    return this.http.post(this.loginUrl, login, httpOptions);
  }

  checkregister(user:User):Observable<any> {
    return this.http.post(this.registerUrl, user, httpOptions);
  }
}
