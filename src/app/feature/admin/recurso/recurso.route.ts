import {Routes} from "@angular/router";
import {RecursoAdminComponent} from "./recurso.component";
import {PermissionsGuard} from "../../../core/guard/permission.guard";
import {CrearRecursoComponent} from "./pages/crear-recurso/crear-recurso.component";
import {ActualizarRecursoComponent} from "./pages/actualizar-recurso/actualizar-recurso.component";
import {EliminarRecursoComponent} from "./pages/eliminar-recurso/eliminar-recurso.component";

export const ADMIN_RECURSO_ROUTE: Routes = [
  {
    path: 'administracion-recursos',
    children: [
      { path: '', component: RecursoAdminComponent, canActivate: [PermissionsGuard] },
      { path: 'crear', component: CrearRecursoComponent, canActivate: [PermissionsGuard] },
      { path: 'actualizar', component: ActualizarRecursoComponent, canActivate: [PermissionsGuard] },
      { path: 'eliminar', component: EliminarRecursoComponent, canActivate: [PermissionsGuard] },
    ]
  },
]
