import {Component} from "@angular/core";
import {ModalInputComponent} from "../../../components/inputs/modal-input/modal-input.component";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";
import {Usercolumns} from "../../../core/interfaces/components/rol-usuario/rol-usuario.interface";
import {BasicHeaderComponent} from "../../../components/header/basic-header/basic-header.component";

@Component({
  selector: 'app-rol-usuario',
  templateUrl: './rol-usuario.component.html',
  styleUrls: ['./rol-usuario.component.scss'],
  imports: [
    ModalInputComponent,
    BasicHeaderComponent
  ],
  standalone: true
})
export class RolUsuarioComponent {


  testColumns: TableColumn[] = Usercolumns;
}
