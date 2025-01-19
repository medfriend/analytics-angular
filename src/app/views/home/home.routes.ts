import {Routes} from "@angular/router";
import {HomeComponent} from "./views/main/home.component";
import {AccountComponent} from "./views/user/account/account.component";
import {AppearanceComponent} from "./views/user/appearance/appearance.component";
import {PreferenceComponent} from "./views/user/preference/preference.component";
import {RolAdminComponent} from "../../feature/admin/rol/rol.component";
import {ParentMenuComponent} from "./views/main/components/parent-menu/parent-menu.component";
import {EntidadComponent} from "../../feature/admin/entidad/entidad.component";
import {RecursoMenuComponent} from "../../feature/asignacion/recurso-menu/recurso-menu.component";
import {SubmenusMenuComponent} from "../../feature/asignacion/submenus-menu/submenus-menu.component";
import {RolUsuarioComponent} from "../../feature/asignacion/rol-usuario/rol-usuario.component";
import {PermissionsGuard} from "../../core/guard/permission.guard";
import {
  GestionMantenimientoComponent
} from "../../feature/mantenimiento/gestion-mantenimiento/gestion-mantenimiento.component";
import {ADMIN_USUARIO_ROUTE} from "../../feature/admin/usuario/usuario.route";
import {ADMIN_RECURSO_ROUTE} from "../../feature/admin/recurso/recurso.route";
import {ADMIN_MENU_ROUTE} from "../../feature/admin/menu/menu.route";
import {ADMIN_ENTIDAD_ROUTE} from "../../feature/admin/entidad/entidad.route";
import {ADMIN_ROL_ROUTE} from "../../feature/admin/rol/rol.route";
import {ASIGNACION_RECURSO_MENU_ROUTE} from "../../feature/asignacion/recurso-menu/recurso-menu.route";
import {USER_ROUTE} from "./views/user/user.route";
import {ADMIN_ROUTE} from "../../feature/admin/admin.route";
import {ASIGNACION_ROUTE} from "../../feature/asignacion/asignacion.route";
import {MANTENIMIENTO_ROUTE} from "../../feature/mantenimiento/mantenimiento.route";

export const HOME_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'parent-menu', component: ParentMenuComponent },
      ...ADMIN_ROUTE,
      ...USER_ROUTE,
      ...ASIGNACION_ROUTE,
      ...MANTENIMIENTO_ROUTE
    ]
  }
];
