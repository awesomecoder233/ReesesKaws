import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  isLoggedIn = false; 
  loginForm: FormGroup = new FormGroup({

  });
  
  
  constructor(private router: Router, private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit(): void {
    
  }
  createForm() {
    this.loginForm = this.fb.group({
       email: ['', Validators.required ],
       password: ['', Validators.required ],
       token: ['', Validators.required ],
    });
  }
  
  
  onSubmit(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
