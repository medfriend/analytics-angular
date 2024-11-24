import {Routes} from "@angular/router";
import {HomeComponent} from "./views/main/home.component";
import {AccountComponent} from "./views/account/account.component";
import {AppearanceComponent} from "./views/appearance/appearance.component";
import {PreferenceComponent} from "./views/preference/preference.component";
import {MenuAdminComponent} from "../../feature/admin/menu/menu.component";
import {RecursoAdminComponent} from "../../feature/admin/recurso/recurso.component";
import {UsuarioAdminComponent} from "../../feature/admin/usuario/usuario.component";
import {RolAdminComponent} from "../../feature/admin/rol/rol.component";
import {ParentMenuComponent} from "./views/main/components/parent-menu/parent-menu.component";
import {CrearUsuarioComponent} from "../../feature/admin/usuario/components/crear-usuario/crear-usuario.component";
import {
  ActualizarUsuarioComponent
} from "../../feature/admin/usuario/components/actualizar-usuario/actualizar-usuario.component";
import {
  EliminarUsuarioComponent
} from "../../feature/admin/usuario/components/eliminar-usuario/eliminar-usuario.component";
import {EntidadComponent} from "../../feature/admin/entidad/entidad.component";
import {RecursoMenuComponent} from "../../feature/asignacion/recurso-menu/recurso-menu.component";
import {SubmenusMenuComponent} from "../../feature/asignacion/submenus-menu/submenus-menu.component";
import {RolUsuarioComponent} from "../../feature/asignacion/rol-usuario/rol-usuario.component";
import {PermissionsGuard} from "../../core/guard/permission.guard";
import {
  GestionMantenimientoComponent
} from "../../feature/mantenimiento/gestion-mantenimiento/gestion-mantenimiento.component";

export const HOME_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'user/account', component: AccountComponent },
      { path: 'user/appearance', component: AppearanceComponent },
      { path: 'user/preference', component: PreferenceComponent},
      { path: 'parent-menu', component: ParentMenuComponent},
      {
        path: 'administracion-usuarios',
        component: UsuarioAdminComponent,
        canActivate: [PermissionsGuard]
      },
      {
        path: 'administracion-usuarios/crear',
        component: CrearUsuarioComponent,
        canActivate: [PermissionsGuard]
      },
      {
        path: 'administracion-usuarios/actualizar',
        component: ActualizarUsuarioComponent,
        canActivate: [PermissionsGuard]
      },
      {
        path: 'administracion-usuarios/eliminar',
        component: EliminarUsuarioComponent,
        canActivate: [PermissionsGuard]
      },
      {
        path: 'administracion-recursos',
        component: RecursoAdminComponent,
        canActivate: [PermissionsGuard]
      },
      {
        path: 'administracion-menus',
        component: MenuAdminComponent,
        canActivate: [PermissionsGuard]
      },
      {
        path: 'administracion-roles',
        component: RolAdminComponent,
        canActivate: [PermissionsGuard]
      },
      {
        path: 'adminitracion-entidades',
        component: EntidadComponent,
        canActivate: [PermissionsGuard]
      },
      {
        path: 'asignacion-menu-recurso',
        component: RecursoMenuComponent,
        canActivate: [PermissionsGuard]
      },
      {
        path: 'asignacion-menu-submenu',
        component: SubmenusMenuComponent,
        canActivate: [PermissionsGuard]
      },
      {
        path: 'asignacion-user-rol',
        component: RolUsuarioComponent,
        canActivate: [PermissionsGuard]
      },
      {
        path: 'gestion-mantenimiento',
        component: GestionMantenimientoComponent,
        canActivate: [PermissionsGuard]
      },
      {
        path: 'solicitud-mantenimiento',
        component: RolUsuarioComponent,
        canActivate: [PermissionsGuard]
      },
    ]
  }
]
