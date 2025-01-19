import {Routes} from "@angular/router";
import {AccountComponent} from "./account/account.component";
import {AppearanceComponent} from "./appearance/appearance.component";
import {PreferenceComponent} from "./preference/preference.component";

export const USER_ROUTE: Routes = [
  {
    path: 'user',
    children: [
      { path: 'account', component: AccountComponent },
      { path: 'appearance', component: AppearanceComponent },
      { path: 'preference', component: PreferenceComponent },
    ]
  }
]
