import {Routes} from "@angular/router";
import {HomeComponent} from "./views/main/home.component";
import {ParentMenuComponent} from "./views/main/components/parent-menu/parent-menu.component";
import {USER_ROUTE} from "./views/user/user.route";
import {COMPONENT_ROUTE} from "../../feature/component/component.route";
import {INDICADORES_ROUTE} from "../../feature/indicadores/indicadores.route";

export const HOME_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'parent-menu', component: ParentMenuComponent },
      ...USER_ROUTE,
      ...COMPONENT_ROUTE,
      ...INDICADORES_ROUTE

    ]
  }
];
