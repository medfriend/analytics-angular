import { Component, OnInit } from '@angular/core';
import { ActionPanelComponent } from '../../../../../../components';
import { sharedModules } from "../../../../../../shared/shared.module";
import { NavigationEnd, Router} from "@angular/router";
import { filter } from "rxjs";
import { UserListComponent } from "../user-list/user-list.component";
import { routeInformation } from "../../../../../../core/interfaces/components/control-panel/control-panel.interface";
import {StorageService} from "../../../../../../util/localstorage/localstorage.service";


@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [
    ...sharedModules,
    ActionPanelComponent,
    UserListComponent
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent implements OnInit {

  constructor(
    private router: Router,
    private localstorageService: StorageService,
  ) {}

  routes: routeInformation[] = [];

  userName = '';

  ngOnInit() {
    this.initRoutes()
    this.getUserInfo()
    this.convertRoute()
  }

  getUserInfo() {
    const userInfo = this.localstorageService.getItem('userInfo')
    // @ts-ignore
    this.userName = userInfo.user.nombre_1
    console.log(userInfo)
  }

  initRoutes(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.convertRoute()
    });
  }

  convertRoute(): void {
    const routesAux = this.router.url.split("/");
    routesAux.splice(0, 2);

    this.routes = routesAux.map(route => {
      return {
        name: route === 'user' ? this.userName : route,
        hasActionPanel: route === 'user',
        actionPanelComponent: UserListComponent
      }
    });

    console.log(this.routes);
  }
}
