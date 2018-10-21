import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  email: string;
  constructor() { }

  login() {
    this.isAuthenticated = true;
  }

  loguot() {
    this.isAuthenticated = false;
    window.localStorage.clear();
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  setFormData(email) {
    this.email = email;
  }

  isLoggedAdmin() {
    this.setFormData(this.email);
    if (this.email === 'gre4kae@gmail.com' || this.email === 'liubou.petrulevich@instinctools.ru') {
      return this.isAuthenticated;
      }
    }
}
