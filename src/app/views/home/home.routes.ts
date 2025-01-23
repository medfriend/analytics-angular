import {Routes} from "@angular/router";
import {HomeComponent} from "./views/main/home.component";
import {ParentMenuComponent} from "./views/main/components/parent-menu/parent-menu.component";
import {USER_ROUTE} from "./views/user/user.route";

export const HOME_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'parent-menu', component: ParentMenuComponent },
      ...USER_ROUTE,
    ]
  }
];
