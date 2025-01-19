import {Routes} from "@angular/router";
import {RolUsuarioComponent} from "./rol-usuario.component";
import {PermissionsGuard} from "../../../core/guard/permission.guard";

export const ASIGNACION_ROL_USUARIO_ROUTE: Routes = [
  { path: 'asignacion-user-rol', component: RolUsuarioComponent, canActivate: [PermissionsGuard] },
]
