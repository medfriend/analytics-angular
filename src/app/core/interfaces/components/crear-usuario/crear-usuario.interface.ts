import {InputInfo} from "../forms/basic-form/basic-form.interface";
import {Validators} from "@angular/forms";

export const inputsCrearUsuario: InputInfo[] = [
  {
    label: 'numero de identificación',
    type: 'number',
    labelFor: 'usuario',
    formControlName: 'usuario',
    placeholder: '',
    validators: [Validators.required, Validators.minLength(2)]
  },
  {
    label: 'primer nombre',
    type: 'text',
    labelFor: 'nombre_1',
    formControlName: 'nombre_1',
    placeholder: '',
    validators: [Validators.required, Validators.minLength(2)]
  },
  {
    label: 'segundo nombre',
    type: 'text',
    labelFor: 'nombre_2',
    formControlName: 'nombre_2',
    placeholder: '',
    validators: [Validators.required, Validators.minLength(3)]
  },
  {
    label: 'primer apellido',
    type: 'text',
    labelFor: 'nombre_paterno',
    formControlName: 'nombre_paterno',
    placeholder: '',
    validators: [Validators.required, Validators.minLength(3)]
  },
  {
    label: 'segundo apellido',
    type: 'text',
    labelFor: 'nombre_materno',
    formControlName: 'nombre_materno',
    placeholder: '',
    validators: [Validators.required, Validators.minLength(3)]
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
