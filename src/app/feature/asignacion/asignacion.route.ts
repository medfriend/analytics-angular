import {Routes} from "@angular/router";
import {ASIGNACION_RECURSO_MENU_ROUTE} from "./recurso-menu/recurso-menu.route";
import {ASIGNACION_ROL_USUARIO_ROUTE} from "./rol-usuario/rol-usuario.route";
import {ASIGNACION_SUBMENU_MENU_ROUTES} from "./submenus-menu/submenu-menu.route";

export const ASIGNACION_ROUTE: Routes = [
  ...ASIGNACION_RECURSO_MENU_ROUTE,
  ...ASIGNACION_ROL_USUARIO_ROUTE,
  ...ASIGNACION_SUBMENU_MENU_ROUTES
]
