import {Component} from "@angular/core";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";
import {Router} from "@angular/router";
import { UserService } from "../../../core/service/user.service";
import { TableComponent } from "../../../components/table/table.component";

@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  standalone: true,
  imports: [
    BasicButtonComponent,
    TableComponent
  ],
})
export class UsuarioAdminComponent{
  users: any = []

  columns = [
    { header: 'S', field: 'icon' },
    { header: 'W', field: 'status' },
    { header: 'Nombre', field: 'name' },
    { header: 'Último Éxito', field: 'lastSuccess' },
    { header: 'Último Fallo', field: 'lastFailure' },
    { header: 'Última Duración', field: 'lastDuration' },
  ];

  data = [
    { icon: '☀️', status: '✓', name: 'chapola-back', lastSuccess: '9 Mes 20 días', lastFailure: 'N/D', lastDuration: '29 Seg' },
    { icon: '☀️', status: '✓', name: 'chapola-coin', lastSuccess: '9 Mes 20 días', lastFailure: 'N/D', lastDuration: '7 Min 54 Seg' },
    { icon: '☀️', status: '✓', name: 'ecobeeBack', lastSuccess: '7 Mes 1 día', lastFailure: 'N/D', lastDuration: '1 Min 45 Seg' },
    { icon: '☀️', status: '✓', name: 'ecobeeFront', lastSuccess: '7 Mes 1 día', lastFailure: 'N/D', lastDuration: '1 Min 22 Seg' },
    { icon: '☁️', status: '✓', name: 'ecobeeIA', lastSuccess: '6 Mes 14 días', lastFailure: '6 Mes 14 días', lastDuration: '1 Min 7 Seg' },
    { icon: '☁️', status: '✓', name: 'falcon-view', lastSuccess: '2 Mes 14 días', lastFailure: '2 Mes 21 días', lastDuration: '12 Min' },
    { icon: '☁️', status: '✓', name: 'falcon-view', lastSuccess: '3 Mes 14 días', lastFailure: '2 Mes 21 días', lastDuration: '12 Min', lastDuration2: '13 Min' },
  ];

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log('data::', data)
      this.users = data;
    });
  }

  navegateCreate(){
    this.router.navigate(["/home/administracion-usuarios/crear"]);
  }
}
