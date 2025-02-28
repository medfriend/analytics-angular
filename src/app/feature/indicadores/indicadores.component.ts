import {ChangeDetectorRef, Component, OnInit} from "@angular/core";

import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {sharedModules} from "../../shared/shared.module";
import {ExcelService} from "../../core/service/others/excel.service";
import BasicCardComponent from "../../components/card/basic-card/basic-card.component";

@Component({
  selector: 'app-feature-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss'],
  imports: [
    ...sharedModules,
    BasicCardComponent
  ],
  standalone: true
})
export default class IndicadoresComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes:[{
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100
        }
      }],
      xAxes: [{}]
    }
  };

  barChartLabels: string[] ;
  public barChartLegend = true;

  barChartLabelsComplete: any = []
  barChartDataComplete: any = []

  hojas = [
    "ALMACEN", "ASIGNACION DE CITAS", "CALIDAD", "CONTRATACION", "CONTROL INTERNO", "PAMEC",
    "PLANEACION", "MANTENIMIENTO", "FISIOTERAPIA", "LABORATORIO CLINICO", "CONSULTA EXTERNA",
    "FARMACEUTICO", "SIAU", "SISTEMAS", "SUGERENCIA FINANCIERA", "TALENTO HUMANO",
    "EPIDEMOLOGIA"
  ]

  barChartData: ChartDataSets[]

  constructor(
    private excelService: ExcelService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const peticiones = this.hojas.map(hoja => this.excelService.getExcel(hoja).toPromise().then(
      datos => {
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
            datosProcesados[cabecera].push(this.recortarString(resto[index], 50));
          })
        })


        this.barChartData = [
          {
            // @ts-ignore
            data: datosProcesados['Porcentaje'].map(str => parseFloat(str)),
            label: hoja,
            backgroundColor: 'rgba(109,255,99,0.2)',  // Rojo claro
            borderColor: 'rgb(99,255,169)',        // Rojo
            borderWidth: 1
          }
        ];

        // @ts-ignore
        this.barChartLabels = datosProcesados['Descripcion']

        this.barChartLabelsComplete[hoja] = this.barChartLabels;
        this.barChartDataComplete[hoja] = this.barChartData


      })
    )

    Promise.all(peticiones).then(() => {
        this.cdr.detectChanges()
        console.log(this.barChartDataComplete)
        console.log(this.barChartLabelsComplete)
    })

    const hoja = "ALMACEN"
  }

  recortarString(originalString: string, cantidad: number){
    return originalString.length > cantidad ? originalString.substring(0, cantidad) : originalString;
  }
}
