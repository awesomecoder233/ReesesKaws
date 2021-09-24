import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from './user/auth.service';
//import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title="PuffsDashboard";

  constructor(
    private router: Router,
    private authService: AuthService) {
    this.router.navigateByUrl('/login');
  }  

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  
  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }  

  logOut(): void {
    this.authService.logout();
  }  
}

