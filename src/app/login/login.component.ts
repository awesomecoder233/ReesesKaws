import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  isLoggedIn = false; 
  loginForm: FormGroup = new FormGroup({

  });
  
  
  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private authService: AuthService) {
    this.createForm();
  }
  ngOnInit(): void {
    
  }

  createForm() {
    this.loginForm = this.fb.group({
       email: ['', [Validators.required, Validators.email] ],
       accessCode: ['', Validators.required ],
       token: ['', Validators.required ],
    });
  }
  
  
  login(): void {
    if(this.loginForm && this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const accessCode = this.loginForm.get('accessCode')?.value;
      const token = this.loginForm.get('token')?.value;

      this.authService.login(email, accessCode, token);    
      
      this.router.navigate(['/dashboard']);
    } else {
      alert("Invalid login credentials");
    }
  }

  get email() { return this.loginForm.get('email');}
  get accessCode() { return this.loginForm.get('accessCode');}
  get token() { return this.loginForm.get('token');}
}
