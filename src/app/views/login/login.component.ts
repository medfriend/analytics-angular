import { AuthState } from './../../store/auth/auth.state';
import {Component, OnDestroy} from '@angular/core';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';
import { ToastService } from '../../components/toast/toast.component';
import {Observable, Subject, takeUntil} from 'rxjs';
import { select, Store } from '@ngrx/store';
import { setToken } from '../../store/auth/auth.actions';
import { Router } from '@angular/router';
import { StorageService } from '../../util/localstorage/localstorage.service';
import {AuthService} from "../../core/service/auth.service";
import {Auth} from "../../core/interfaces/services/auth.interface";

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
    BasicFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements  OnDestroy {

  //? parametros para la construccion del formulario
  forTitle: string = 'MedFriend';

  inputs: InputInfo[] = [
    {
      label: 'Usuario',
      type: 'text',
      labelFor: 'usuario',
      formControlName: 'usuario',
      placeholder: ''
    },
    {
      label: 'Contraseña',
      type: 'password',
      labelFor: 'contraseña',
      formControlName: 'contraseña',
      placeholder: ''
    }
  ];

  token$: Observable<string | null>;
  destroy$ = new Subject<void>();

  constructor(
    private store: Store<{ auth: AuthState }>,
    private router: Router,
    private localstorageService: StorageService,
    private authService: AuthService,
  ) {
    this.token$ = store.pipe(select(state => state.auth.token));

    //? observer del token
    this.token$.subscribe(token => {
      console.log('Token:', token);
    });
  }

  //onSubmitHandler handler para realizar el submit
  onSubmitHandler(){
    return (values: any, toast: ToastService): void => {

      const dataParsed: Auth = {
        usuario: parseInt(values.usuario, 10),
        contraseña: values.contraseña
      }

      this.authService.auth(dataParsed)
        .pipe(takeUntil(this.destroy$))
        .subscribe(auth => {
          this.handlerAuthentication(auth, toast);
      })

    }
  }

  handlerAuthentication(auth: any, toast: ToastService): void {

    if (auth.error === undefined) {
      const token = auth.data
      this.store.dispatch(setToken({ token }));
      this.localstorageService.setItem('token', token)

      //toast.addToast('Token set successfully', 'success');

      this.router.navigate(['/home'])
    }
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
