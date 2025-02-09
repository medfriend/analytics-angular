import {Component} from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
  imports: [BaseChartDirective],
  standalone: true
})
export default class ComponentComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Rojo claro
      borderColor: 'rgba(255, 99, 132, 1)',        // Rojo
      borderWidth: 1
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // Azul claro
      borderColor: 'rgba(54, 162, 235, 1)',       // Azul
      borderWidth: 1
    }
  ];
}
