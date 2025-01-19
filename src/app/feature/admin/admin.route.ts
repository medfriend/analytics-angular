import {Routes} from "@angular/router";
import {ADMIN_USUARIO_ROUTE} from "./usuario/usuario.route";
import {ADMIN_RECURSO_ROUTE} from "./recurso/recurso.route";
import {ADMIN_MENU_ROUTE} from "./menu/menu.route";
import {ADMIN_ROL_ROUTE} from "./rol/rol.route";
import {ADMIN_ENTIDAD_ROUTE} from "./entidad/entidad.route";

export const ADMIN_ROUTE: Routes = [
  ...ADMIN_USUARIO_ROUTE,
  ...ADMIN_RECURSO_ROUTE,
  ...ADMIN_MENU_ROUTE,
  ...ADMIN_ROL_ROUTE,
  ...ADMIN_ENTIDAD_ROUTE,
]
