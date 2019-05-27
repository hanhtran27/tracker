import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn():boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  setAuthenticationToken(token: string) {
    localStorage.setItem('token', token);
    console.info("stored token: ", token);
  }

  clearAuthenticationToken() {
    localStorage.removeItem('token');
    console.log("cleared token!");
  }
}
