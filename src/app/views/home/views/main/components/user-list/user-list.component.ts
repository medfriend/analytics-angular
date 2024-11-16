import {Component, OnInit} from '@angular/core';
import {sharedModules} from "../../../../../../shared/shared.module";
import {StorageService} from "../../../../../../util/localstorage/localstorage.service";
import {BasicListComponent} from "../../../../../../components/list/basic-list/basic-list.component";

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
export class UserListComponent implements OnInit {

  constructor(
    private localstorageService: StorageService,
  ) {}

  menuItems = [
    { icon: 'manage_accounts', label: 'Cuenta', route: 'user/account', submenus: []},
    { icon: 'palette', label: 'Apariencia', route: 'user/appearance', submenus: [] },
    { icon: 'tune', label: 'Preferencia', route: 'user/preference', submenus: []}
  ];

  ngOnInit() {

    const userInfo = this.localstorageService.getItem("userInfo");

    // @ts-ignore
    userInfo.menus.map((menu) => {
      this.menuItems.push(menu);
    })

  }

}
