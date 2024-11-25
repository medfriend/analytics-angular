import {Component, OnDestroy} from "@angular/core";
import {inputsLogin} from "../../../../../core/interfaces/components/login/login.interface";
import {inputsCrearUsuario} from "../../../../../core/interfaces/components/crear-usuario/crear-usuario.interface";
import {BasicFormComponent, ToastService} from "../../../../../components";
import {Router} from "@angular/router";
import {Usuario} from "../../../../../core/interfaces/components/usuario/usuario.interface";
import {UserService} from "../../../../../core/service/user.service";
import {Subject} from "rxjs";

@Component({
  selector: "app-crear-usuario",
  styleUrls: ["./crear-usuario.component.scss"],
  templateUrl: "./crear-usuario.component.html",
  imports: [
    BasicFormComponent
  ],
  standalone: true
})
export class CrearUsuarioComponent implements OnDestroy{

  forTitle: string = 'Crear usuario';
  inputs = inputsCrearUsuario;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  onSubmitHandler(){
    return (values: Usuario, toast: ToastService): void => {
      this.userService.createUser(values).subscribe(response => {
        console.log(response);
        this.goBack()
      })
    }
  }

  goBack() {
    return (): void => {
      this.router.navigate(['/home/administracion-usuarios'])
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
