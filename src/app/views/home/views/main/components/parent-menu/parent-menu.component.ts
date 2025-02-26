import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../../../../../util/localstorage/localstorage.service";
import {sharedModules} from "../../../../../../shared/shared.module";
import {BasicAutocompleteComponent} from "../../../../../../components/autocompletes/basic-autocomplete.component";
import {enviroment} from "../../../../../../enviroment/service.enviroment.local";

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
          console.log(this.submenus)
        }
      })
    });
  }

  routeHandler(routeName: string){
    const service = routeName.split("/")[1]

    const firstSlash = routeName.indexOf("/"); // Encuentra el primer /
    const secondSlash = routeName.indexOf("/", firstSlash + 1); // Encuentra el segundo /
    const result = secondSlash !== -1 ? routeName.substring(secondSlash) : "";

    // @ts-ignore
    const host = this.enviromentP[service]
    const prefix = this.enviromentP.https ? "https://" : "http://";

    window.location.href = prefix + host + result;
  }
}
