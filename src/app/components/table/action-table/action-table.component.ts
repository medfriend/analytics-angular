import {Component, Input} from "@angular/core";
import {RouterIconButtonComponent} from "../../buttons/router-icon-button/router-icon-button.component";
import {sharedModules} from "../../../shared/shared.module";
import {ActionTable} from "../../../core/interfaces/components/action-table/action-table.component";

@Component({
  selector: 'app-action-table',
  templateUrl: './action-table.component.html',
  styleUrls: ['./action-table.component.scss'],
  standalone: true,
  imports: [
    RouterIconButtonComponent,
    ...sharedModules
  ]
})
export class ActionTableComponent {
  @Input() actions: ActionTable[];
}
