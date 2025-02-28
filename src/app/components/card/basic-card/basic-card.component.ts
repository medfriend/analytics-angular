import {Component, Input} from "@angular/core";
import {BaseChartDirective} from "ng2-charts";
import {sharedModules} from "../../../shared/shared.module";

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss'],
  standalone: true,
  imports: [
    ...sharedModules
  ]
})
export default  class BasicCardComponent {

  @Input() titulo: string;
}
