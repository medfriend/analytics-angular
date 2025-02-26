import {ChangeDetectorRef, Component, OnInit} from "@angular/core";

import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {sharedModules} from "../../shared/shared.module";
import {ExcelService} from "../../core/service/others/excel.service";

@Component({
  selector: 'app-feature-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss'],
  imports: [
    ...sharedModules
  ],
  standalone: true
})
export default class IndicadoresComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: string[] ;
  public barChartLegend = true;

  barChartData: ChartDataSets[]

  constructor(
    private excelService: ExcelService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.excelService.getExcel().subscribe(datos => {
      console.log(datos.values);
      const { values } = datos

      const cabeceras = values[0];
      const restos = values.slice(1)

      let datosProcesados = {}


      restos.forEach((resto: any) => {
        cabeceras.forEach((cabecera: string, index: number) => {
          // @ts-ignore
          if (!datosProcesados[cabecera]) {
            // @ts-ignore
            datosProcesados[cabecera] = [];
          }
          // @ts-ignore
          datosProcesados[cabecera].push(resto[index]);
        })
      })


      this.barChartData = [
        {
          // @ts-ignore
          data: datosProcesados['frecuencia'].map(str => parseFloat(str)),
          label: 'Series A',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Rojo claro
          borderColor: 'rgba(255, 99, 132, 1)',        // Rojo
          borderWidth: 1
        }
      ];

      console.log(datosProcesados);

      // @ts-ignore
      this.barChartLabels = datosProcesados['Color']
      this.cdr.detectChanges();
    })
  }
}
