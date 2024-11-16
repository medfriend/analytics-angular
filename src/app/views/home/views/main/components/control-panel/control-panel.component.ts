import {Component, Injector, OnInit} from '@angular/core';
import { ActionPanelComponent } from '../../../../../../components';
import { sharedModules } from "../../../../../../shared/shared.module";
import { NavigationEnd, Router} from "@angular/router";
import { filter } from "rxjs";
import { UserListComponent } from "../user-list/user-list.component";
import { routeInformation } from "../../../../../../core/interfaces/components/control-panel/control-panel.interface";
import {StorageService} from "../../../../../../util/localstorage/localstorage.service";
import {
  INJECT_LIST_DATA,
  InjectListComponent
} from "../../../../../../components/list/inject-list/inject-list.component";

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
  private menus: any;

  constructor(
    private router: Router,
    private localstorageService: StorageService,
  ) {}

  routes: routeInformation[] = [];
  userName = '';

  ngOnInit() {
    this.initRoutes();
    this.getUserInfo();
    this.convertRoute();
  }

  getUserInfo() {
    const userInfo = this.localstorageService.getItem('userInfo');
    // @ts-ignore
    this.userName = userInfo.user.nombre_1;
    // @ts-ignore
    this.menus = userInfo.menus;
  }

  initRoutes(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.convertRoute();
      });
  }

  findParentMenuByRoute(route: string): any | null {
    for (const menu of this.menus) {
      const submenu = menu.submenus.find((sub: { route: string }) => sub.route === route);
      if (submenu) {
        return menu; // Retorna el menú padre si encuentra el submenú con la ruta
      }
    }
    return null; // Si no se encuentra, retorna null
  }

  routeHasSubMenus(route: string): boolean {
    let hasSubMenus = false;
    for (const menu of this.menus) {
      if (menu.label === route && menu.submenus.length > 0 ){
        hasSubMenus = true;
      }
    }

    return hasSubMenus;
  }

  convertRoute(): void {

    const actualRoute = this.router.url

    let parent = this.findParentMenuByRoute(actualRoute);

    if (parent === null) {
      parent = { submenus: [] };
    }

    const routewithoutHome = actualRoute.split("/").splice(2, actualRoute.length - 1);

    const fullPath = parent.submenus.length > 0 ?
      `${parent.label}/${routewithoutHome.join("/")}`
      : routewithoutHome.join("/");

    const menuItems = [
      { icon: 'manage_accounts', label: 'Cuenta', route: 'home/user/account', submenus: []},
      { icon: 'palette', label: 'Apariencia', route: 'home/user/appearance', submenus: [] },
      { icon: 'tune', label: 'Preferencia', route: 'home/user/preference', submenus: []}
    ];

    const routesAux = fullPath.split("/");

    this.routes = routesAux.map(route => {

      return {
       name: route === 'user' ? this.userName : route,
       hasActionPanel: route === 'user' || this.routeHasSubMenus(route),
       actionPanelComponent: {
         component: InjectListComponent,
         injectors: {
           menuItems: route === 'user' ? menuItems : parent.submenus,
         },
       },
     }
    });

  }

  getInjector(inputs: Record<string, any>): Injector {
    return Injector.create({
      providers: [
        {
          provide: INJECT_LIST_DATA,
          useValue: inputs, // Pasa los datos de menuItems al token
        },
      ],
    });
  }
}
