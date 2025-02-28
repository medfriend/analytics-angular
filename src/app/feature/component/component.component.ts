import {Component, ViewEncapsulation} from "@angular/core";
import {ChartOptions, ChartType, ChartDataSets, ChartConfiguration} from 'chart.js';
import {sharedModules} from "../../shared/shared.module";
import {NgxGaugeModule} from "ngx-gauge";
import BasicCardComponent from "../../components/card/basic-card/basic-card.component";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
  imports: [...sharedModules, NgxGaugeModule, BasicCardComponent],
  encapsulation: ViewEncapsulation.None,
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

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
  };

  public bubbleChartLegend = true;

  public bubbleChartDatasets: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 10, y: 12, r: 40 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
      backgroundColor: 'rgba(54, 162, 235, 0.2)'
    },
  ];

  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartLegend = true;

  public scatterChartDatasets: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10 },
        { x: 15, y: 5 },
        { x: 10, y: 12 },
        { x: 7, y: 8 },
      ],
      pointRadius: 10,
      label: 'Series A',
      backgroundColor: 'rgba(54, 162, 235, 0.2)'
    },
  ];

  gaugeType = "semi";
  gaugeValue = 28.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";
  gaugeThickness = 15;
  gaugueSize = 200;
}
