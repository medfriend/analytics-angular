import {Routes} from "@angular/router";
import {HomeComponent} from "./views/main/home.component";
import {AccountComponent} from "./views/account/account.component";
import {AppearanceComponent} from "./views/appearance/appearance.component";
import {PreferenceComponent} from "./views/preference/preference.component";
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
import {CrearEntidadComponent} from "../../feature/admin/entidad/pages/crear-entidad/crear-entidad.component";
import {ADMIN_USUARIO_ROUTE} from "../../feature/admin/usuario/usuario.route";
import {ADMIN_RECURSO_ROUTE} from "../../feature/admin/recurso/recurso.route";
import {ADMIN_MENU_ROUTE} from "../../feature/admin/menu/menu.route";

export const HOME_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'user/account', component: AccountComponent },
      { path: 'user/appearance', component: AppearanceComponent },
      { path: 'user/preference', component: PreferenceComponent },
      { path: 'parent-menu', component: ParentMenuComponent },
      ...ADMIN_USUARIO_ROUTE,
      ...ADMIN_RECURSO_ROUTE,
      ...ADMIN_MENU_ROUTE,
      { path: 'administracion-roles', component: RolAdminComponent, canActivate: [PermissionsGuard] },
      {
        path: 'administracion-entidades',
        children: [
          { path: '', component: EntidadComponent, canActivate: [PermissionsGuard] },
          { path: 'crear', component: CrearEntidadComponent, canActivate: [PermissionsGuard] },
        ]
      },
      { path: 'asignacion-menu-recurso', component: RecursoMenuComponent, canActivate: [PermissionsGuard] },
      { path: 'asignacion-menu-submenu', component: SubmenusMenuComponent, canActivate: [PermissionsGuard] },
      { path: 'asignacion-user-rol', component: RolUsuarioComponent, canActivate: [PermissionsGuard] },
      { path: 'gestion-mantenimiento', component: GestionMantenimientoComponent, canActivate: [PermissionsGuard] },
      { path: 'solicitud-mantenimiento', component: RolUsuarioComponent, canActivate: [PermissionsGuard] },
    ]
  }
];
