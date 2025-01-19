import {Routes} from "@angular/router";
import {MenuAdminComponent} from "./menu.component";
import {PermissionsGuard} from "../../../core/guard/permission.guard";
import {CrearMenuComponent} from "./pages/crear-menu/crear-menu.component";
import {ActualizarMenuComponent} from "./pages/actualizar-menu/actualizar-menu.component";
import {EliminarMenuComponent} from "./pages/eliminar-menu/eliminar-menu.component";

export const ADMIN_MENU_ROUTE: Routes = [
  {
    path: 'administracion-menus',
    children: [
      { path: '', component: MenuAdminComponent, canActivate: [PermissionsGuard] },
      { path: 'crear', component: CrearMenuComponent, canActivate: [PermissionsGuard] },
      { path: 'actualizar', component: ActualizarMenuComponent, canActivate: [PermissionsGuard] },
      { path: 'eliminar', component: EliminarMenuComponent, canActivate: [PermissionsGuard] },
    ]
  },
]
