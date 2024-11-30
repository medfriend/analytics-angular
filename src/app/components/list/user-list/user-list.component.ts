import {Component, OnInit} from '@angular/core';
import {sharedModules} from "../../../shared/shared.module";
import {StorageService} from "../../../util/localstorage/localstorage.service";
import {BasicListComponent} from "../basic-list/basic-list.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    ...sharedModules,
    BasicListComponent,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  menuItems = [
    { icon: 'manage_accounts', label: 'Cuenta', route: 'user/account', submenus: []},
    { icon: 'palette', label: 'Apariencia', route: 'user/appearance', submenus: [] },
    { icon: 'tune', label: 'Preferencia', route: 'user/preference', submenus: []}
  ];

}
