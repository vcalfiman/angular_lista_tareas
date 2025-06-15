import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private username: string | null = null;

  constructor() {
    this.loggedIn = localStorage.getItem('loggedIn') === 'true';
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      this.loggedIn = true;
      this.username = username;
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
      return true;
    }
    this.loggedIn = false;
    this.username = null;
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUsername(): string | null {
    if (!this.username) {
      this.username = localStorage.getItem('username');
    }
    return this.username;
  }
}
