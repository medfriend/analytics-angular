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
import {BasicListComponent} from "../../../../../../components/list/basic-list/basic-list.component";
import bootstrap from "../../../../../../../main.server";

//TODO convetir el menuItem en una constante
//TODO revizar la parte de menus dentro de submenus
@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [
    ...sharedModules,
    ActionPanelComponent,
    UserListComponent,
    BasicListComponent
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent implements OnInit {
  protected menus: any;
  actualRoute = '';

  constructor(
    private router: Router,
    private localstorageService: StorageService,
  ) {}

  routes: routeInformation[] = [];
  userName = '';
  injectionComponent = InjectListComponent;

  menuItems = [
    { icon: 'manage_accounts', label: 'Cuenta', route: 'home/user/account', submenus: []},
    { icon: 'palette', label: 'Apariencia', route: 'home/user/appearance', submenus: [] },
    { icon: 'tune', label: 'Preferencia', route: 'home/user/preference', submenus: []}
  ];

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
      const submenu = menu.submenus.find((sub: { route: string }) => {
        return route.startsWith(sub.route);
      });
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

  // funcionalidad para encontrar si se encuentra en una ruta de parent-menu
  findParentMenuLink(urls: any, parent: { submenus: any; }){
    urls.forEach((url: string, index: number) => {
      if (url.includes('parent-menu?menu=')) {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        urls[index] = urlParams.get('menu');
        parent.submenus = this.findSubmenuBylabel(urlParams.get('menu'))
        return
      }
    })
  }

  findSubmenuBylabel(label: string | null){
    for (const menu of this.menus) {
      if (menu.label === label){
        return menu.submenus
      }
    }
  }

  convertRoute(): void {

    this.actualRoute = this.router.url

    let parent = this.findParentMenuByRoute(this.actualRoute);

    if (parent === null) {
      parent = { submenus: [] };
    }

    const routewithoutHome = this.actualRoute.split("/").splice(2, this.actualRoute.length - 1);

    this.findParentMenuLink(routewithoutHome, parent)

    const fullPath = parent.submenus.length > 0 && parent.label ?
      `${parent.label}/${routewithoutHome.join("/")}`
      : routewithoutHome.join("/");

    const routesAux = fullPath.split("/");

    this.routes = routesAux.map(route => {

      return {
       name: route === 'user' ? this.userName : route,
       hasActionPanel: route === 'user' || this.routeHasSubMenus(route),
       actionPanelComponent: {
         component: this.injectionComponent,
         injectors: {
           menuItems: route === 'user' ? this.menuItems : parent.submenus,
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
          useValue: inputs,
        },
      ],
    });
  }

  navegateTo(route: string, index: number, isLast: boolean) {
    const actualRoute = this.router.url;

    let acc = ''
    let foundRoute = false;

    if (!isLast) {
     actualRoute.split("/").forEach(splitted => {
       if (!foundRoute){
         acc = acc + "/" + splitted
       }

       if (splitted === route){
         foundRoute = true;
       }
     })
     this.router.navigate([acc.slice(1)])

    }
  }

  navegateHome(){
    console.log(this.actualRoute)
  }

}
