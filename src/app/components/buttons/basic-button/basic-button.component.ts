import {Component, Input} from "@angular/core";
import {sharedModules} from "../../../shared/shared.module";

@Component({
  selector: "app-basic-button",
  templateUrl: "./basic-button.component.html",
  styleUrls: ["./basic-button.component.scss"],
  standalone: true,
  imports: [ [...sharedModules] ]
})
export class BasicButtonComponent {
  @Input() label: string = '';
  @Input() icon: string | undefined;
}
