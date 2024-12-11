import {Component, OnDestroy, OnInit} from "@angular/core";
import {BasicAutocompleteComponent} from "../../../components/autocompletes/basic-autocomplete.component";
import {BasicHeaderComponent} from "../../../components/header/basic-header/basic-header.component";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";
import {RecursoService} from "../../../core/service/recurso.service";
import {refreshTunnel} from "../../../core/tunnel/usuario/usuario.tunnel";
import {Recurso, RecursoColumns} from "../../../core/interfaces/components/recurso/recurso.interface";
import {MenuColumns} from "../../../core/interfaces/components/menu/menu.interface";
import {BasicPopupComponent} from "../../../components";
import {MasterTableComponent} from "../../../components/table/master-table/master-table.component";
import {UserListComponent} from "../../../components/list/user-list/user-list.component";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";

@Component({
    selector: 'app-admin-recurso',
    templateUrl: './recurso.component.html',
    styleUrls: ['./recurso.component.scss'],
  imports: [
    BasicAutocompleteComponent,
    BasicHeaderComponent,
    BasicButtonComponent,
    BasicPopupComponent,
    MasterTableComponent,
    UserListComponent
  ],
    standalone: true
})
export class RecursoAdminComponent implements OnInit, OnDestroy{

  private destroy$ = new Subject<void>();
  refreshResource = false;
  dataSource: Recurso[] = [];
  idKey= 'recurso_id';
  overflow: boolean | undefined = false;
  columns: TableColumn[] = RecursoColumns;

  constructor(
    private router: Router,
    private recursoService: RecursoService,
    private refreshTunnel: refreshTunnel
  ) {}

  ngOnInit() {
    this.handleRefreshResources()
    this.recursoService.getResources(this.refreshResource)
      .pipe(takeUntil(this.destroy$))
      .subscribe(resources => {
        this.dataSource = resources;
      })
  }

  handleOverflow(isOverflowing: boolean | undefined): void {
    this.overflow = isOverflowing;
  }

  navegateCreate(){
    this.router.navigate(["/home/administracion-recursos/crear"])
  }

  handleRefreshResources() {
    this.refreshTunnel.refresh$
      .pipe(takeUntil(this.destroy$))
      .subscribe(refresh => {
        this.refreshResource = refresh;
      })
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }
}
