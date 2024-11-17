import {Component, OnInit} from "@angular/core";
import {StorageService} from "../../../../../../util/localstorage/localstorage.service";
import {sharedModules} from "../../../../../../shared/shared.module";

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
    private localstorageService: StorageService
  ) {}

  ngOnInit() {
    this.getMenus()
  }

  getMenus(){
    const userInfo = this.localstorageService.getItem('userInfo')
    // @ts-ignore
    this.menu = userInfo.menus
  }
}
