import {Component} from "@angular/core";
import {sharedModules} from "../../../../../shared/shared.module";

@Component({
  selector: "app-crear-menu",
  templateUrl: "./crear-menu.component.html",
  styleUrls: ["./crear-menu.component.scss"],
  standalone: true,
  imports: [
    sharedModules
  ]
})
export class CrearMenuComponent {}
