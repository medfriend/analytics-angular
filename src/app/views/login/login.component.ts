import { AuthState } from './../../store/auth/auth.state';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';
import { ToastService } from '../../components/toast/toast.component';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { setToken } from '../../store/auth/auth.actions';
import { Router } from '@angular/router';

type InputInfo = {
  label: string,
  labelFor: string,
  type: string,
  formControlName: string,
  placeholder: string,
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    BasicFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  //? parametros para la construccion del formulario
  forTitle: string = 'Inicio sesión';
  
  inputs: InputInfo[] = [
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
  ];

  token$: Observable<string | null>; 

  constructor(
    private store: Store<{ auth: AuthState }>,
    private router: Router
  ) {
    this.token$ = store.pipe(select(state => state.auth.token));

    //? observer del token
    this.token$.subscribe(token => {
      console.log('Token:', token);
    });
  }

  //? handler para realizar el submit
  onSubmitHandler(){
    return (values: any, toast: ToastService): void => {
      const token = 'fake-token';
      this.store.dispatch(setToken({ token }));
      toast.addToast('Token set successfully', 'success');
      this.router.navigate(['/home'])
    }
  }
}
