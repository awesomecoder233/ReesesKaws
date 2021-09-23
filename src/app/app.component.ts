import { Component , OnInit} from '@angular/core';
import {Router} from '@angular/router';
//import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="ReesesKaws";
  constructor(private router: Router) {
    this.router.navigateByUrl('/login');
  }  
}

