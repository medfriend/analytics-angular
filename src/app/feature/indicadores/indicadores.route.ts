import {Routes} from "@angular/router";
import {PermissionsGuard} from "../../core/guard/permission.guard";
import {CookieGuard} from "../../core/guard/cookie.guard";
import IndicadoresComponent from "./indicadores.component";

export const INDICADORES_ROUTE: Routes = [
  {
    path: 'indicadores',
    children: [
      { path: '', component: IndicadoresComponent, canActivate: [PermissionsGuard, CookieGuard] }
    ]
  },
]
