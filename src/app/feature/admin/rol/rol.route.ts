import {Routes} from "@angular/router";
import {RolAdminComponent} from "./rol.component";
import {PermissionsGuard} from "../../../core/guard/permission.guard";
import {CrearRolComponent} from "./pages/crear-rol/crear-rol.component";
import {ActualizarRolComponent} from "./pages/actualizar-rol/actualizar-rol.component";
import {EliminarRolComponent} from "./pages/eliminar-rol/eliminar-rol.component";

export const ADMIN_ROL_ROUTE: Routes = [
  { path: 'administracion-roles',
    children: [
      { path: '', component: RolAdminComponent, canActivate: [PermissionsGuard]},
      { path: 'crear', component: CrearRolComponent, canActivate: [PermissionsGuard]},
      { path: 'actualizar', component: ActualizarRolComponent, canActivate: [PermissionsGuard]},
      { path: 'eliminar', component: EliminarRolComponent, canActivate: [PermissionsGuard]}
    ],
  },
]
