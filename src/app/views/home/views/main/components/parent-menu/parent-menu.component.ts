import {Component, Inject, OnInit, PLATFORM_ID} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../../../../../util/localstorage/localstorage.service";
import {sharedModules} from "../../../../../../shared/shared.module";
import {BasicAutocompleteComponent} from "../../../../../../components/autocompletes/basic-autocomplete.component";
import {enviroment} from "../../../../../../enviroment/service.enviroment.local";
import {isPlatformBrowser} from "@angular/common";
import {ServiceService} from "../../../../../../core/service/md-service/service.service";

type menuItem = {
  label: string;
  icon: string;
  route: string;
  submenus: menuItem[]
}

@Component({
  selector: "app-parent-menu",
  styleUrls: ["./parent-menu.component.scss"],
  templateUrl: "./parent-menu.component.html",
  imports: [[...sharedModules], BasicAutocompleteComponent],
  standalone: true,
})
export class ParentMenuComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private localstorageService: StorageService,
    private serviceService: ServiceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  menu = '';
  submenus: menuItem[] = []

  enviromentP = enviroment

  ngOnInit() {
    this.getMenuName()
  }

  getMenuName(){
    this.route.queryParams.subscribe(params => {
      this.menu = params['menu'];
      const userInfo = this.localstorageService.getItem('userInfo');

      // @ts-ignore
      const menus = userInfo.menus;
      menus.forEach((item: menuItem) => {
        if (item.label === this.menu){
          // @ts-ignore
          this.submenus = item.submenus
        }
      })
    });
  }

  getService(prefijo: string, path: string) {
    this.serviceService.getServiceBYPrefijo(prefijo).subscribe(service => {
      const host = enviroment.deployed ? service[0].deployserver : service[0].localserver;
      window.location.href = 'https://' + host + "/" + prefijo +path;
    })
  }

  routeHandler(routeName: string){
    if (isPlatformBrowser(this.platformId)) {
      const service = routeName.split("/")[1];

      const firstSlash = routeName.indexOf("/"); // Encuentra el primer /
      const secondSlash = routeName.indexOf("/", firstSlash + 1); // Encuentra el segundo /
      const path = secondSlash !== -1 ? routeName.substring(secondSlash) : "";
      // @ts-ignore
      this.getService(service, path)
    }
  }
}
