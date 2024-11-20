import {Component, Input} from "@angular/core";
import {sharedModules} from "../../../shared/shared.module";

@Component({
  selector: "app-route-id-list",
  templateUrl: "./route-id-list.component.html",
  styleUrls: ["./route-id-list.component.scss"],
  imports: [...sharedModules],
  standalone: true,
})
export class RouteIdListComponent {
  @Input() menuItems: any[] | undefined;

  extractId(route: string): string | null {
    const queryStringIndex = route.indexOf('?');
    if (queryStringIndex !== -1) {
      const queryParamsString = route.substring(queryStringIndex + 1);
      const urlParams = new URLSearchParams(queryParamsString);
      return urlParams.get('id');
    }
    return null;
  }

}
