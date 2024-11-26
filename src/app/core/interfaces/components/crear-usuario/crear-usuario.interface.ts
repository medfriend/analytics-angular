import {InputInfo} from "../forms/basic-form/basic-form.interface";
import {Validators} from "@angular/forms";
import {TableColumn} from "../table/basic-table/basic-table.interface";

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
    label: 'Contraseña',
    type: 'password',
    labelFor: 'clave',
    formControlName: 'clave',
    placeholder: '',
    validators: [Validators.required, Validators.minLength(6)]
  },
  {
    label: 'estado',
    type: 'checkbox',
    labelFor: 'estado',
    formControlName: 'estado',
    placeholder: 'estado',
    validators: []
  },
];

export const Usercolumns: TableColumn[]  = [
  { header: 'Estado', field: 'activo' },
  { header: 'Usuario', field: 'usuario' },
  { header: 'Primer nombre', field: 'nombre_1', foldable: true },
  { header: 'Segundo nombre', field: 'nombre_2' },
  { header: 'Apellido Paterno', field: 'apellido_paterno' },
  { header: 'Apellido Materno', field: 'apellido_materno' },
  { header: 'Email', field: 'email' },
  { header: 'Fecha de Creación', field: 'fecha_creacion', date: true },
];
