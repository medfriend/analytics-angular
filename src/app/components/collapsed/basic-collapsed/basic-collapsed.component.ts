import {Component, Input} from "@angular/core";
import {sharedModules} from "../../../shared/shared.module";

@Component({
  selector: 'app-basic-collapsed',
  templateUrl: './basic-collapsed.component.html',
  styleUrls: ['./basic-collapsed.component.scss'],
  imports: [ ...sharedModules],
  standalone: true
})
export class BasicCollapsedComponent {
  @Input() label: string = '';
  @Input() textSize: String = 'text-sm'

  isCollapsed: boolean = true;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
