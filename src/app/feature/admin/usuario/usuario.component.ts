import {Component, OnInit} from "@angular/core";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";
import {Router} from "@angular/router";
import { UserService } from "../../../core/service/user.service";
import { TableComponent } from "../../../components/table/basic-table/table.component";
import { sharedModules } from "../../../shared/shared.module";
import {BasicAutocompleteComponent} from "../../../components/autocompletes/basic-autocomplete.component";

@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  standalone: true,
  imports: [[...sharedModules], BasicButtonComponent, TableComponent, BasicAutocompleteComponent
  ],
})
export class UsuarioAdminComponent implements OnInit {
  dataSource: any[] = [];
  overflow: boolean | undefined = false;

  columns = [
    { header: 'Estado', field: 'activo' },
    { header: 'Usuario', field: 'usuario' },
    { header: 'Primer nombre', field: 'nombre_1', foldable: true },
    { header: 'Segundo nombre', field: 'nombre_2' },
    { header: 'Apellido Paterno', field: 'apellido_paterno' },
    { header: 'Apellido Materno', field: 'apellido_materno' },
    { header: 'Email', field: 'email' },
    { header: 'Fecha de Creación', field: 'fecha_creacion' },
  ];

  idKey= 'usuario_id';

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.dataSource.push(data)
    });
  }

  navegateCreate(){
    this.router.navigate(["/home/administracion-usuarios/crear"]);
  }

  handleOverflow(isOverflowing: boolean | undefined): void {
    this.overflow = isOverflowing;
  }
}
