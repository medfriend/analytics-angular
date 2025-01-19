import {Routes} from "@angular/router";
import {UsuarioAdminComponent} from "./usuario.component";
import {PermissionsGuard} from "../../../core/guard/permission.guard";
import {CrearUsuarioComponent} from "./pages/crear-usuario/crear-usuario.component";
import {ActualizarUsuarioComponent} from "./pages/actualizar-usuario/actualizar-usuario.component";
import {EliminarUsuarioComponent} from "./pages/eliminar-usuario/eliminar-usuario.component";

export const ADMIN_USUARIO_ROUTE: Routes = [
  {
    path: 'administracion-usuarios',
    children: [
      { path: '', component: UsuarioAdminComponent, canActivate: [PermissionsGuard] },
      { path: 'crear', component: CrearUsuarioComponent, canActivate: [PermissionsGuard] },
      { path: 'actualizar', component: ActualizarUsuarioComponent, canActivate: [PermissionsGuard] },
      { path: 'eliminar', component: EliminarUsuarioComponent, canActivate: [PermissionsGuard] },
    ]
  },
]
