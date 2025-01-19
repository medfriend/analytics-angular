import {Routes} from "@angular/router";
import {SubmenusMenuComponent} from "./submenus-menu.component";
import {PermissionsGuard} from "../../../core/guard/permission.guard";

export const ASIGNACION_SUBMENU_MENU_ROUTES: Routes = [
  { path: 'asignacion-menu-submenu', component: SubmenusMenuComponent, canActivate: [PermissionsGuard] },
]
