import {Component, OnDestroy} from "@angular/core";
import {sharedModules} from "../../../../../shared/shared.module";
import {Subject, takeUntil} from "rxjs";
import {inputsCrearMenu} from "../../../../../core/interfaces/components/crear-menu/crear-menu.interface";
import {Router} from "@angular/router";
import {BasicFormComponent, ToastService} from "../../../../../components";

@Component({
  selector: "app-crear-menu",
  templateUrl: "./crear-menu.component.html",
  styleUrls: ["./crear-menu.component.scss"],
  standalone: true,
  imports: [
    sharedModules,
    BasicFormComponent
  ]
})
export class CrearMenuComponent implements OnDestroy {

  forTitle: string = 'Crear Menu';
  inputs = inputsCrearMenu;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
