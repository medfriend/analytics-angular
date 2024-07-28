import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type inputInfo = {
  label: string,
  labelFor: string,
  type: string,
  formControlName: string,
  placeholder: string,
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss'
  ]
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup


  inputs: inputInfo[] = [
    {
      label: 'usuario',
      type: 'text',
      labelFor: 'username',
      formControlName: 'username',
      placeholder: ''
    },
    {
      label: 'contraseña',
      type: 'password',
      labelFor: 'password',
      formControlName: 'password',
      placeholder: ''
    }
  ]

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    console.log('useEffect');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form values:', this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
