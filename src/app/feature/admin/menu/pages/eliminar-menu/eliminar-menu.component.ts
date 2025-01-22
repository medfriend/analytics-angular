import {Component} from "@angular/core";
import {BasicFormComponent, ToastService} from "../../../../../components";
import {inputsEliminarMenu} from "../../../../../core/interfaces/components/eliminar-menu/eliminar-menu.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../../core/service/user.service";

@Component({
  selector: "app-eliminar-menu",
  templateUrl: "./eliminar-menu.component.html",
  styleUrls: ["./eliminar-menu.component.scss"],
  imports: [
    BasicFormComponent
  ],
  standalone: true
})
export class EliminarMenuComponent {
  protected readonly inputs = inputsEliminarMenu;

  constructor(
    private router: Router
  ) {}

  onSubmitHandler(){
    return (values: any, toast: ToastService): void => {
      console.log(values);
    }
  }

  goBack() {
    return (): void => {
      this.router.navigate(['/home/administracion-menus'])
    }
  }
}
