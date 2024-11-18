import {Component, OnInit} from "@angular/core";
import {StorageService} from "../../../../../../util/localstorage/localstorage.service";
import {sharedModules} from "../../../../../../shared/shared.module";
import {Router} from "@angular/router";

@Component({
  selector: "app-lateral-menu",
  styleUrls: ["./lateral-menu.component.scss"],
  templateUrl: "./lateral-menu.component.html",
  imports: [[...sharedModules]],
  standalone: true,
})
export class LateralMenuComponent implements OnInit{

  menu: any;

  constructor(
    private localstorageService: StorageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getMenus()
  }

  getMenus(){
    const userInfo = this.localstorageService.getItem('userInfo')
    // @ts-ignore
    this.menu = userInfo.menus
  }

  routeMenu(item: any) {
    if(item.route ===  undefined){
      this.router.navigate([`/home/parent-menu`], { queryParams: { menu: item.label } });
      return
    }

    this.router.navigate([item.route]);
  }
}
