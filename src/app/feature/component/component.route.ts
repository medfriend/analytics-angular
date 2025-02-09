import {Routes} from "@angular/router";

import ComponentComponent from "./component.component";
import {PermissionsGuard} from "../../core/guard/permission.guard";
import {CookieGuard} from "../../core/guard/cookie.guard";

export const COMPONENT_ROUTE: Routes = [
  {
    path: 'components',
    children: [
      { path: '', component: ComponentComponent, canActivate: [PermissionsGuard, CookieGuard] }
    ]
  },
]
