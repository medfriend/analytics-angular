import {Component} from "@angular/core";
import {inputsLogin} from "../../../../../core/interfaces/components/login/login.interface";
import {inputsCrearUsuario} from "../../../../../core/interfaces/components/crear-usuario/crear-usuario.interface";
import {BasicFormComponent, ToastService} from "../../../../../components";
import {Router} from "@angular/router";

@Component({
  selector: "app-crear-usuario",
  styleUrls: ["./crear-usuario.component.scss"],
  templateUrl: "./crear-usuario.component.html",
  imports: [
    BasicFormComponent
  ],
  standalone: true
})
export class CrearUsuarioComponent {

  forTitle: string = 'Crear usuario';
  inputs = inputsCrearUsuario;

  constructor(
    private router: Router,
  ) {}

  onSubmitHandler(){
    return (values: any, toast: ToastService): void => {
      console.log("me ejecutaron");
    }
  }

  goBack() {
    return (): void => {
      this.router.navigate(['/home/administracion-usuarios'])
    }
  }
}
