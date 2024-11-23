import {Component} from "@angular/core";
import {BasicBorderComponent} from "../../border/basic-border.component";

@Component({
  selector: "app-mini-table",
  templateUrl: "./mini-table.component.html",
  styleUrls: ["./mini-table.component.scss"],
  standalone: true,
  imports: [
    BasicBorderComponent
  ]
})
export class miniTableComponent {}
