import { AuthState } from '../../store/auth/auth.state';
import {Component, OnDestroy} from '@angular/core';
import {ToastComponent, ToastService, BasicFormComponent} from '../../components';
import {Observable, Subject, takeUntil} from 'rxjs';
import { select, Store } from '@ngrx/store';
import { setToken } from '../../store/auth/auth.actions';
import {Router, RouterOutlet} from '@angular/router';
import { StorageService } from '../../util/localstorage/localstorage.service';
import {AuthService} from "../../core/service/auth.service";
import {Auth} from "../../core/interfaces/services/auth.interface";
import {ValidatorFn, Validators} from "@angular/forms";

type InputInfo = {
  label: string,
  labelFor: string,
  type: string,
  formControlName: string,
  placeholder: string,
  validators?: ValidatorFn[]
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    BasicFormComponent,
    RouterOutlet,
    ToastComponent
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
      placeholder: '',
      validators: [Validators.required, Validators.minLength(6)]
    },
    {
      label: 'Contraseña',
      type: 'password',
      labelFor: 'contraseña',
      formControlName: 'contraseña',
      placeholder: '',
      validators: [Validators.required, Validators.minLength(6)]
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
        .subscribe({
          next: auth => {
            this.handlerAuthentication(auth, toast);
          },
          error: (err) => {
            toast.addToast('error al realizar autenticacion','error')
          }
        });

    }
  }

  handlerAuthentication(auth: any, toast: ToastService): void {
      const token = auth.data
      this.store.dispatch(setToken({ token }));
      this.localstorageService.setItem('token', token)

      toast.addToast('Token set successfully', 'success')
      this.router.navigate(['/home'])
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
