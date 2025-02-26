import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {BaseChartDirective} from "ng2-charts";

export const sharedModules = [
  CommonModule,
  MatIconModule,
  RouterModule,
  BaseChartDirective
]
