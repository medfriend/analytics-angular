import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {refreshTunnel} from "../../../../../core/tunnel/usuario/usuario.tunnel";
import {BasicFormComponent, ToastService} from "../../../../../components";
import {Recurso} from "../../../../../core/interfaces/components/recurso/recurso.interface";
import {inputsCrearRecurso} from "../../../../../core/interfaces/components/crear-recurso/crear-recurso.interface";
import {RecursoService} from "../../../../../core/service/recurso.service";

@Component({
  selector: "app-crear-recurso",
  templateUrl: "./crear-recurso.component.html",
  styleUrls: ["./crear-recurso.component.scss"],
  imports: [
    BasicFormComponent
  ],
  standalone: true
})
export class CrearRecursoComponent implements OnDestroy {
  formTitle = "Crear Recurso";
  inputs = inputsCrearRecurso;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private refreshTunnel: refreshTunnel,
    private recursoService: RecursoService,
  ) {}

  onSubmitHandler() {
    return (values: Recurso, toast: ToastService): void => {
      this.recursoService.createResource(values)
        .pipe(takeUntil(this.destroy$))
        .subscribe(response => {
          toast.addToast("recurso creado exitosamente", "success")
          this.refreshTunnel.setrefreshState(true)
          this.goBack()()
        })
    }
  }

  goBack() {
    return (): void => {
      this.router.navigate(["/home/administracion-recursos"]);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
