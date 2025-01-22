import {Component, OnDestroy, OnInit} from "@angular/core";
import {BasicFormComponent, ToastService} from "../../../../../components";
import {NgIf} from "@angular/common";
import {ActualizarMenuInputs} from "../../../../../core/interfaces/components/actualizar-menu/actualizar.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {MenuService} from "../../../../../core/service/menu.service";

@Component({
  selector: "app-actualizar-menu",
  templateUrl: "./actualizar-menu.component.html",
  styleUrls: ["./actualizar-menu.component.scss"],
  imports: [
    BasicFormComponent,
    NgIf
  ],
  standalone: true
})
export class ActualizarMenuComponent implements OnInit, OnDestroy {
  inputs = ActualizarMenuInputs;
  initialValues: any;
  destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService,
  ) {}

  ngOnInit(): void {
    this.getId()
  }

  onSubmitHandler(){
    return (values: any, toast: ToastService) => {
      console.log(values);
    }
  }

  getId(){
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.menuService.getMenuById(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(menu => {

          if(menu.menu_padre){
            menu.menu_padre_id = menu.menu_padre.nombre
          }

          this.initialValues = menu
      })
    })
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
