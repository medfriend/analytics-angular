import {ValidatorFn} from "@angular/forms";

export type InputInfo = {
  label: string,
  labelFor: string,
  type: string,
  formControlName: string,
  placeholder: string,
  validators?: ValidatorFn[]
}
