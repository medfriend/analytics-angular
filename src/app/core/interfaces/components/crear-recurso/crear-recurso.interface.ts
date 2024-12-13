import {InputInfo} from "../forms/basic-form/basic-form.interface";
import {Validators} from "@angular/forms";

export const inputsCrearRecurso: InputInfo[] = [
  {
    label: 'Descripcion',
    type: 'test',
    labelFor: 'descripcion',
    formControlName: 'descripcion',
    placeholder: '',
    validators: [Validators.required, Validators.minLength(2)]
  },
  {
    label: 'Acceso',
    type: 'text',
    labelFor: 'acceso',
    formControlName: 'acceso',
    placeholder: '',
    validators: [Validators.required, Validators.minLength(2)]
  },
];
