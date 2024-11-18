import {Component} from "@angular/core";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  imports: [
    BasicButtonComponent
  ],
  standalone: true
})
export class UsuarioAdminComponent{

  constructor(
    private router: Router,
  ) {}

  navegateCreate(){
    this.router.navigate(["/home/administracion-usuarios/crear"]);
  }
}
