import {Component, OnInit} from "@angular/core";
import {ModalInputComponent} from "../../../components/inputs/modal-input/modal-input.component";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";
import {Rolcolumns, Usercolumns} from "../../../core/interfaces/components/rol-usuario/rol-usuario.interface";
import {BasicHeaderComponent} from "../../../components/header/basic-header/basic-header.component";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";

@Component({
  selector: 'app-rol-usuario',
  templateUrl: './rol-usuario.component.html',
  styleUrls: ['./rol-usuario.component.scss'],
  imports: [
    ModalInputComponent,
    BasicHeaderComponent,
    ReactiveFormsModule,
    BasicButtonComponent
  ],
  standalone: true
})
export class RolUsuarioComponent implements OnInit{

  rolUsuarioForm: FormGroup;

  testColumns: TableColumn[] = Usercolumns;
  rolColumns: TableColumn[] = Rolcolumns;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.inicializarFormulario()
  }

  inicializarFormulario(): void {
    this.rolUsuarioForm = this.formBuilder.group({
      rol: [""],
      usuario: [""]
    })
  }

  asignar(): void {
    console.log(this.rolUsuarioForm.value)
  }
}
