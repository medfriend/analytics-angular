import {Routes} from "@angular/router";
import {HomeComponent} from "./views/main/home.component";
import {AccountComponent} from "./views/account/account.component";
import {AppearanceComponent} from "./views/appearance/appearance.component";
import {PreferenceComponent} from "./views/preference/preference.component";

export const HOME_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'user/account', component: AccountComponent },
      { path: 'user/appearance', component: AppearanceComponent },
      { path: 'user/preference', component: PreferenceComponent}
    ]
  }
]
