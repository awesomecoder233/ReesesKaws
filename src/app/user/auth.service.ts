import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: User | null;
  redirectUrl: string = '';

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(email: string, accessCode: string, token: string): void {
    if (!email) {
        return;
      }      
    if (email.includes('test')) {
        this.currentUser = {
          id: 1,
          userName: email,  
          accessCode,
          token
        };
        return;
      }
  }

  logout(): void {
    this.currentUser = null;
  }  
}