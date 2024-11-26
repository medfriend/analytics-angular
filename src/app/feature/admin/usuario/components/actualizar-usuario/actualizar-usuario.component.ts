import {Component, OnInit} from "@angular/core";
import {inputsCrearUsuario} from "../../../../../core/interfaces/components/crear-usuario/crear-usuario.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {BasicFormComponent, ToastService} from "../../../../../components";
import {sharedModules} from "../../../../../shared/shared.module";
import {UserService} from "../../../../../core/service/user.service";
import {
  inputsActualizarUsuario
} from "../../../../../core/interfaces/components/actualizar-usuario/actualizar-usuario.interface";

@Component({
  selector: "app-actualizar-usuario",
  templateUrl: "./actualizar-usuario.component.html",
  styleUrls: ["./actualizar-usuario.component.scss"],
  imports: [
    ...sharedModules,
    BasicFormComponent
  ],
  standalone: true
})
export class ActualizarUsuarioComponent implements OnInit {
  forTitle: string = 'Actualizar usuario';
  inputs = inputsActualizarUsuario;

  //TODO tomar los datos de usuario de router e ingresar los valores en los initial values
  initialValues: any;

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
        console.log(user)
        this.initialValues = user
      })
    })
  }

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
