import {Component, OnDestroy, OnInit} from "@angular/core";
import {BasicAutocompleteComponent} from "../../../components/autocompletes/basic-autocomplete.component";
import {BasicHeaderComponent} from "../../../components/header/basic-header/basic-header.component";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";
import {Router} from "@angular/router";
import {sharedModules} from "../../../shared/shared.module";
import {RecursoService} from "../../../core/service/recurso.service";
import {refreshTunnel} from "../../../core/tunnel/usuario/usuario.tunnel";
import {EntityService} from "../../../core/service/entity.service";
import {Subject, takeUntil} from "rxjs";
import {MasterTableComponent} from "../../../components/table/master-table/master-table.component";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";
import {Usercolumns} from "../../../core/interfaces/components/crear-usuario/crear-usuario.interface";
import {Usuario} from "../../../core/interfaces/components/usuario/usuario.interface";
import {Entity} from "../../../core/interfaces/services/entity.interface";
import {Entitycolumns} from "../../../core/interfaces/components/entidad/entidad.interface";

@Component({
    selector: "app-entidad",
    templateUrl: "./entidad.component.html",
    styleUrls: ["./entidad.component.scss"],
    standalone: true,
  imports: [
    [...sharedModules],
    BasicAutocompleteComponent,
    BasicHeaderComponent,
    BasicButtonComponent,
    MasterTableComponent
  ]
})
export class EntidadComponent implements OnInit, OnDestroy {

  dataSource: Entity[] = [];

  overflow: boolean | undefined = false;
  private destroy$ = new Subject<void>();

  refreshEntity = false;

  idKey= 'entidad_id';

  columns: TableColumn[] = Entitycolumns;

  constructor(
    private router: Router,
    private entityService: EntityService,
    private refreshTunnel: refreshTunnel
  ) {}

  ngOnInit(): void {
    this.getEntities()
    this.handleRefreshEntities()
  }

  navegateCreate(){
    this.router.navigate(["/home/administracion-entidades/crear"]);
  }

  getEntities(){
    this.entityService.getEntities(this.refreshEntity)
      .pipe(takeUntil(this.destroy$))
      .subscribe(entities => {
        this.dataSource = entities;
        this.refreshTunnel.setrefreshState(false)
      })
  }

  handleOverflow(isOverflowing: boolean | undefined): void {
    this.overflow = isOverflowing;
  }

  handleRefreshEntities(){
    this.refreshTunnel.refresh$
      .pipe(takeUntil(this.destroy$))
      .subscribe(refresh => {
        this.refreshEntity = refresh;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
