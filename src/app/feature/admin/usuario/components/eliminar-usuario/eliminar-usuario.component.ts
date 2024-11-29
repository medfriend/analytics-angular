import {Component, OnInit} from "@angular/core";
import {inputsCrearUsuario} from "../../../../../core/interfaces/components/crear-usuario/crear-usuario.interface";
import {BasicFormComponent, ToastService} from "../../../../../components";
import {ActivatedRoute, Router} from "@angular/router";
import {
  inputsEliminarUsuario
} from "../../../../../core/interfaces/components/eliminar-usuario/eliminar-usuario.interface";
import {UserService} from "../../../../../core/service/user.service";

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
  userName: string | undefined = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.getId()
  }

  getId(){
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.userService.getUserById(id).subscribe(user => {
        this.userName = user.nombre_1 + " " + user.nombre_2 + " " +  user.apellido_paterno + " " + user.apellido_materno;
        this.inputs[0].label = this.inputs[0].label + ' ' + this.userName
      })
    })
  }

  onSubmitHandler(){
    return (values: any, toast: ToastService): void => {
      if (this.userName != values.usuario){
        toast.addToast("No hay concidencia entre el nombre del usuario y el ingresado", "error")
      }

      if (this.userName == values.usuario){
        //TODO realizar la funcionalidad de la eliminacion de usuarios
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
