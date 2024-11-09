import { Component, OnInit, Input } from '@angular/core';
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
export class BasicFormComponent implements OnInit {
  @Input() forTitle: string = 'Inicio sesión';
  @Input() buttonName: string = 'Ingresar'
  @Input() inputs: InputInfo[] = [];
  @Input() onSubmitHandler: (values: any, toast: ToastService) => void = () => {};
  @Input() numberOfColumns: number = 1

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService
  ) {
    this.loginForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.initializeForm();
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

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form values:', this.loginForm.value);
      this.onSubmitHandler(this.loginForm.value, this.toastService);
    } else {
      console.log('Form is invalid');
    }
  }
}
