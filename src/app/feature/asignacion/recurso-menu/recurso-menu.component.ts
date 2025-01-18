import {Component, OnInit} from "@angular/core";
import {BasicHeaderComponent} from "../../../components/header/basic-header/basic-header.component";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";
import {Menucolumns, Recursocolumns} from "../../../core/interfaces/components/menu-recurso/menu-recurso.interface";
import {ModalInputComponent} from "../../../components/inputs/modal-input/modal-input.component";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";

@Component({
  selector: 'app-recurso-menu',
  templateUrl: './recurso-menu.component.html',
  styleUrls: ['./recurso-menu.component.scss'],
  imports: [
    BasicHeaderComponent,
    ModalInputComponent,
    ReactiveFormsModule,
    BasicButtonComponent
  ],
  standalone: true
})
export class RecursoMenuComponent implements OnInit{

  recursoMenuForm: FormGroup;

  menuColumns: TableColumn[] = Menucolumns;
  recursoColumns: TableColumn[] = Recursocolumns;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.recursoMenuForm = this.formBuilder.group({
      menu: [""],
      recurso: [""]
    })
  }

  asignar(): void {
    console.log(this.recursoMenuForm.value)
  }

}
