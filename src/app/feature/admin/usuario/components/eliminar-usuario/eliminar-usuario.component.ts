import {Component, OnInit} from "@angular/core";
import {inputsCrearUsuario} from "../../../../../core/interfaces/components/crear-usuario/crear-usuario.interface";
import {BasicFormComponent, ToastService} from "../../../../../components";
import {Router} from "@angular/router";
import {
  inputsEliminarUsuario
} from "../../../../../core/interfaces/components/eliminar-usuario/eliminar-usuario.interface";

@Component({
  selector: "app-eliminar-usuario",
  templateUrl: "./eliminar-usuario.component.html",
  styleUrls: ["./eliminar-usuario.component.scss"],
  imports: [
    BasicFormComponent
  ],
  standalone: true
})
export class EliminarUsuarioComponent implements OnInit {

  forTitle: string = 'Eliminar usuario';
  inputs = inputsEliminarUsuario;
  userName: string = '';

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    //TODO agregar funcionalidad del llamado del ususario por medio de la router
    this.userName = 'Diego Axsel Garcia Sierra'
    this.inputs[0].label = this.inputs[0].label + ' ' + this.userName
  }

  onSubmitHandler(){
    return (values: any, toast: ToastService): void => {
      if (this.userName != values.usuario){
        toast.addToast("No hay concidencia entre el nombre del usuario y el ingresado", "error")
      }

      if (this.userName == values.usuario){
        this.goBack()()
      }
    }
  }

  goBack() {
    return (): void => {
      this.router.navigate(['/home/administracion-usuarios'])
    }
  }
}
