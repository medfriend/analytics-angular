import {Component, Input} from "@angular/core";
import {sharedModules} from "../../../shared/shared.module";

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  standalone: true,
  imports: [...sharedModules],
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent {
  @Input() menuItems: any[] | undefined;
}
