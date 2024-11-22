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

export const HOME_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'user/account', component: AccountComponent },
      { path: 'user/appearance', component: AppearanceComponent },
      { path: 'user/preference', component: PreferenceComponent},
      { path: 'administracion-usuarios', component: UsuarioAdminComponent},
      { path: 'administracion-usuarios/crear', component: CrearUsuarioComponent},
      { path: 'administracion-usuarios/actualizar', component: ActualizarUsuarioComponent},
      { path: 'administracion-usuarios/eliminar', component: EliminarUsuarioComponent},
      { path: 'administracion-recursos', component: RecursoAdminComponent},
      { path: 'administracion-menus', component: MenuAdminComponent},
      { path: 'administracion-roles', component: RolAdminComponent},
      { path: 'parent-menu', component: ParentMenuComponent},
    ]
  }
]
