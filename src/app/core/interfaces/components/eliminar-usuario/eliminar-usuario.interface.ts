import {InputInfo} from "../forms/basic-form/basic-form.interface";
import {Validators} from "@angular/forms";

export const inputsEliminarUsuario: InputInfo[] = [
  {
    label: 'Escribe nombre del usuario',
    type: 'text',
    labelFor: 'usuario',
    formControlName: 'usuario',
    placeholder: '',
    validators: []
  }
]
