import {Component, OnInit} from "@angular/core";
import {BasicHeaderComponent} from "../../../components/header/basic-header/basic-header.component";
import {Menucolumns} from "../../../core/interfaces/components/menu-recurso/menu-recurso.interface";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";
import {ModalInputComponent} from "../../../components/inputs/modal-input/modal-input.component";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-submenus-menu',
  templateUrl: './submenus-menu.component.html',
  styleUrls: ['./submenus-menu.component.scss'],
  standalone: true,
  imports: [
    BasicHeaderComponent,
    BasicButtonComponent,
    ModalInputComponent,
    ReactiveFormsModule
  ]
})
export class SubmenusMenuComponent implements OnInit{
  subMenuMenuForm: FormGroup;
  protected readonly menuColumns = Menucolumns;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.subMenuMenuForm = this.formBuilder.group({
      menuPadre: [""],
      menuHijo: [""]
    })
  }

  asignar(): void {
    console.log(this.subMenuMenuForm.value);
  }
}
