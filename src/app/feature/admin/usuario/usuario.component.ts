import {Component} from "@angular/core";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";
import {Router} from "@angular/router";
import { UserService } from "../../../core/service/user.service";
import { TableComponent } from "../../../components/table/table.component";
import { sharedModules } from "../../../shared/shared.module";
import { Usuario } from "../../../core/interfaces/components/usuario/usuario.interface";
import {BasicAutocompleteComponent} from "../../../components/autocompletes/basic-autocomplete.component";

@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  standalone: true,
  imports: [[...sharedModules], BasicButtonComponent, TableComponent, BasicAutocompleteComponent
  ],
})
export class UsuarioAdminComponent {
  dataSource: any[] = []

  columns = [
    { header: 'Estado', field: 'activo' },
    { header: 'Primer nombre', field: 'nombre_1', foldable: true },
    { header: 'Segundo nombre', field: 'nombre_2' },
    { header: 'Apellido Paterno', field: 'apellido_paterno' },
    { header: 'Apellido Materno', field: 'apellido_materno' },
    { header: 'Email', field: 'email' },
    { header: 'Usuario', field: 'usuario' },
    { header: 'Usuario ID', field: 'usuario_id' },
    { header: 'Fecha de Creación', field: 'fecha_creacion' },
  ];

  idKey= 'usuario_id';

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      // user all is missing
      this.dataSource.push(data)
    });
  }

  navegateCreate(){
    this.router.navigate(["/home/administracion-usuarios/crear"]);
  }
}
