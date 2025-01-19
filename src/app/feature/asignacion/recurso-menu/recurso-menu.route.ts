import {Routes} from "@angular/router";
import {RecursoMenuComponent} from "./recurso-menu.component";
import {PermissionsGuard} from "../../../core/guard/permission.guard";

export const ASIGNACION_RECURSO_MENU_ROUTE: Routes = [
  { path: 'asignacion-menu-recurso', component: RecursoMenuComponent, canActivate: [PermissionsGuard] },
]
