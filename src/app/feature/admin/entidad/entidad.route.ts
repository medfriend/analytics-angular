import {Routes} from "@angular/router";
import {EntidadComponent} from "./entidad.component";
import {PermissionsGuard} from "../../../core/guard/permission.guard";
import {CrearEntidadComponent} from "./pages/crear-entidad/crear-entidad.component";
import {ActualizarEntidadComponent} from "./pages/actualizar-entidad/actualizar-entidad.component";
import {EliminarEntidadComponent} from "./pages/eliminar-entidad/eliminar-entidad.component";

export const ADMIN_ENTIDAD_ROUTE: Routes = [
  {
    path: 'administracion-entidades',
    children: [
      { path: '', component: EntidadComponent, canActivate: [PermissionsGuard] },
      { path: 'crear', component: CrearEntidadComponent, canActivate: [PermissionsGuard] },
      { path: 'actualizar', component: ActualizarEntidadComponent, canActivate: [PermissionsGuard] },
      { path: 'eliminar', component: EliminarEntidadComponent, canActivate: [PermissionsGuard] },
    ]
  },
]
