import {Component} from "@angular/core";
import {inputsCrearUsuario} from "../../../../../core/interfaces/components/crear-usuario/crear-usuario.interface";
import {Router} from "@angular/router";
import {BasicFormComponent, ToastService} from "../../../../../components";

@Component({
  selector: "app-actualizar-usuario",
  templateUrl: "./actualizar-usuario.component.html",
  styleUrls: ["./actualizar-usuario.component.scss"],
  imports: [
    BasicFormComponent
  ],
  standalone: true
})
export class ActualizarUsuarioComponent {
  forTitle: string = 'Actualizar usuario';
  inputs = inputsCrearUsuario;

  //TODO tomar los datos de usuario de router e ingresar los valores en los initial values
  initialValues = {
    usuario: '123456', // Número de identificación
    nombre_1: 'Juan',  // Primer nombre
    nombre_2: 'Carlos', // Segundo nombre
    nombre_paterno: 'Pérez', // Primer apellido
    nombre_materno: 'Gómez', // Segundo apellido
    contraseña: 'password123' // Contraseña
  };

  constructor(
    private router: Router,
  ) {}

  onSubmitHandler(){
    return (values: any, toast: ToastService): void => {
      console.log("values", values)
      console.log("me ejecutaron");
    }
  }

  goBack() {
    return (): void => {
      this.router.navigate(['/home/administracion-usuarios'])
    }
  }
}
