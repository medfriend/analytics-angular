import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ToastService } from '../../toast/toast.component';
import { sharedModules } from "../../../shared/shared.module";
import { InputInfo } from "../../../core/interfaces/components/forms/basic-form/basic-form.interface";

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [...sharedModules, ReactiveFormsModule],
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit, OnChanges {
  @Input() forTitle: string = 'Inicio sesión';
  @Input() buttonName: string = 'Ingresar'
  @Input() inputs: InputInfo[] = [];
  @Input() onSubmitHandler: (values: any, toast: ToastService) => void = () => {};
  @Input() numberOfColumns: number = 1
  @Input() isCentered: boolean = true;
  @Input() hasDivisor: boolean = false;
  @Input() showCancelButton: boolean = false;
  @Input() cancelHandler: () => void = ():void  => {}
  @Input() initialValues: { [key: string]: any } | null = null;

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService
  ) {
    this.loginForm = this.fb.group({});
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Valida cambios en initialValues
    if (changes['initialValues'] && this.initialValues) {
      this.updateFormValues(this.initialValues);
    }
  }

  updateFormValues(values: { [key: string]: any } | null | undefined): void {
    if (values && this.loginForm) {
      this.loginForm.patchValue(values);
    }
  }

  ngOnInit(): void {
    this.initializeForm();

    if (this.initialValues) {
      this.updateFormValues(this.initialValues);
    }
  }

  get gridColumnClass(): string {
    return `grid grid-cols-${this.numberOfColumns} gap-4`;
  }

  initializeForm(): void {
    this.inputs.forEach(input => {
      const control = new FormControl('', input.validators || []);
      this.loginForm.addControl(input.formControlName, control);
    });
  }

  //TODO agregar los demas casos de validators a medida que se vayan necesitando

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.onSubmitHandler(this.loginForm.value, this.toastService);
    } else {
      this.toastService.addToast("error del formulario","error")
      console.log('Form is invalid');
    }
  }

  execCancelHandler(): void {
    this.cancelHandler();
  }
}
