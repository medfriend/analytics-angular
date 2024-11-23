import {Component} from "@angular/core";
import {sharedModules} from "../../shared/shared.module";

@Component({
  selector: "app-basic-border",
  styleUrls: ["./basic-border.component.scss"],
  templateUrl: "./basic-border.component.html",
  imports: [ ...sharedModules],
  standalone: true
})
export class BasicBorderComponent {}
