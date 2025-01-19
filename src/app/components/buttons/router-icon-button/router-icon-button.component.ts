import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {sharedModules} from "../../../shared/shared.module";

@Component({
  selector: "app-router-icon-button",
  templateUrl: "./router-icon-button.component.html",
  styleUrls: ["./router-icon-button.component.scss"],
  standalone: true,
  imports: [...sharedModules],
})
export class RouterIconButtonComponent {

  @Input() icon: string = 'link';
  @Input() color: string = '#000000';
  @Input() size: number = 48;
  @Input() route: string = '/';

  constructor(private router: Router) {}

  navigate(): void {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
