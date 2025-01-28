import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  HostListener,
  AfterViewInit, Inject, PLATFORM_ID
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ToastService } from '../../toast/toast.component';
import { sharedModules } from "../../../shared/shared.module";
import { InputInfo } from "../../../core/interfaces/components/forms/basic-form/basic-form.interface";
import {ModalInputComponent} from "../../inputs/modal-input/modal-input.component";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [...sharedModules, ReactiveFormsModule, ModalInputComponent],
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit, OnChanges, AfterViewInit {
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

  showPassword: boolean = false;
  containerWidth: number = 0;
  loginForm: FormGroup;
  showForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loginForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.initializeForm();


    if (this.initialValues) {
      this.updateFormValues(this.initialValues);
    }
  }

  ngAfterViewInit() {
    // @ts-ignore
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)){
        this.onResize(window);
      }
      this.showForm = true;
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Valida cambios en initialValues
    if (changes['initialValues'] && this.initialValues) {
      this.updateFormValues(this.initialValues);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event | Window): void {
    const target = event instanceof Window ? event : (event.target as Window);
    this.containerWidth = target.innerWidth;

    // Cambia el número de columnas según el ancho
    if (this.containerWidth < 560) {
      this.numberOfColumns = 1;
    }
  }

  updateFormValues(values: { [key: string]: any } | null | undefined): void {
    if (values && this.loginForm) {
      this.loginForm.patchValue(values);
    }
  }

  get gridColumnClass(): string {
    return `grid grid-cols-${this.numberOfColumns} gap-4`;
  }

  initializeForm(): void {
    this.inputs.forEach(input => {
      const initialValue = input.type === 'checkbox' ? false : '';
      const control = new FormControl(initialValue, input.validators || []);
      this.loginForm.addControl(input.formControlName, control);
    });
  }

  onChangeCheckBox(event: Event, formControlName: string): void {
    const target = event.target as HTMLInputElement; // Asegúrate de que es un checkbox
    const isChecked = target.checked; // Obtiene el estado actual del checkbox
    this.loginForm.get(formControlName)?.setValue(isChecked); // Actualiza el FormControl dinámicamente
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

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  showPasswordType(type: string) {
    if (this.showPassword && type === 'password') {
      return 'text'
    }

    return type
  }

  execCancelHandler(): void {
    this.cancelHandler();
  }
}
