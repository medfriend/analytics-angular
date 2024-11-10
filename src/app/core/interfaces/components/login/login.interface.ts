import {Validators} from "@angular/forms";
import {InputInfo} from "../forms/basic-form/basic-form.interface";

export const inputsLogin: InputInfo[] = [
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
