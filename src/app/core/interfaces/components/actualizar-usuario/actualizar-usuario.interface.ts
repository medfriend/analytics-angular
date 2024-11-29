import {InputInfo} from "../forms/basic-form/basic-form.interface";
import {Validators} from "@angular/forms";

export const inputsActualizarUsuario: InputInfo[] = [
  {
    label: 'numero de identificación',
    type: 'number',
    labelFor: 'usuario',
    formControlName: 'usuario',
    placeholder: '',
    validators: [Validators.required, Validators.minLength(2)]
  },
  {
    label: 'email',
    type: 'text',
    labelFor: 'email',
    formControlName: 'email',
    placeholder: '',
    validators: [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]
  },
  {
    label: 'edad',
    type: 'number',
    labelFor: 'edad',
    formControlName: 'edad',
    placeholder: '',
    validators: [Validators.required]
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
    labelFor: 'apellido_paterno',
    formControlName: 'apellido_paterno',
    placeholder: '',
    validators: [Validators.required, Validators.minLength(3)]
  },
  {
    label: 'segundo apellido',
    type: 'text',
    labelFor: 'apellido_materno',
    formControlName: 'apellido_materno',
    placeholder: '',
    validators: [Validators.required, Validators.minLength(3)]
  },
  {
    label: 'estado',
    type: 'checkbox',
    labelFor: 'activo',
    formControlName: 'activo',
    placeholder: 'activo',
    validators: []
  },
];
