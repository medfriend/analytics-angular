import {Component, OnDestroy} from "@angular/core";
import {sharedModules} from "../../../../../shared/shared.module";
import {Subject, takeUntil} from "rxjs";
import {inputsCrearMenu} from "../../../../../core/interfaces/components/crear-menu/crear-menu.interface";
import {Router} from "@angular/router";
import {BasicFormComponent, ToastService} from "../../../../../components";
import {StorageService} from "../../../../../util/localstorage/localstorage.service";
import {MenuService} from "../../../../../core/service/menu.service";
import {refreshTunnel} from "../../../../../core/tunnel/usuario/usuario.tunnel";

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
    private localstorageService: StorageService,
    private menuService: MenuService,
    private refreshTunnel: refreshTunnel
  ) {}

  onSubmitHandler(){
    return (values: any, toast: ToastService): void => {
      const userInfo = this.localstorageService.getItem('userInfo');

      // @ts-ignore
      values['entidad_id'] = userInfo.entidadId

      if(values['menu_padre_id']  === ""){
        values['menu_padre_id'] = null;
      }

      this.menuService.createMenu(values)
        .pipe(takeUntil(this.destroy$))
        .subscribe(menus => {
          toast.addToast("menu creado exitosamente", "success")
          this.refreshTunnel.setrefreshState(true)
          this.goBack()()
        })
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
