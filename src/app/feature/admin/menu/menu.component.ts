import {Component, OnDestroy, OnInit} from "@angular/core";
import {BasicAutocompleteComponent} from "../../../components/autocompletes/basic-autocomplete.component";
import {BasicHeaderComponent} from "../../../components/header/basic-header/basic-header.component";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";
import {Router} from "@angular/router";
import {Menu, MenuActions, MenuColumns} from "../../../core/interfaces/components/menu/menu.interface";
import {Subject, takeUntil} from "rxjs";
import {MenuService} from "../../../core/service/menu.service";
import {StorageService} from "../../../util/localstorage/localstorage.service";
import {sharedModules} from "../../../shared/shared.module";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";
import {MasterTableComponent} from "../../../components/table/master-table/master-table.component";
import {BasicPopupComponent} from "../../../components";
import {UserListComponent} from "../../../components/list/user-list/user-list.component";
import {RouterIconButtonComponent} from "../../../components/buttons/router-icon-button/router-icon-button.component";
import {ActionTableComponent} from "../../../components/table/action-table/action-table.component";
import {ActionTable} from "../../../core/interfaces/components/action-table/action-table.component";
import {refreshTunnel} from "../../../core/tunnel/usuario/usuario.tunnel";

@Component({
  selector: 'app-menu-admin',
  standalone: true,
  templateUrl: './menu.component.html',
  imports: [
    BasicAutocompleteComponent,
    BasicHeaderComponent,
    BasicButtonComponent,
    sharedModules,
    MasterTableComponent,
    BasicPopupComponent,
    UserListComponent,
    RouterIconButtonComponent,
    ActionTableComponent
  ],
  styleUrls: ['./menu.component.scss']
})
export class MenuAdminComponent implements OnInit, OnDestroy {

  dataSource: Menu[] = [];
  overflow: boolean | undefined = false;
  idKey= 'MenuID';
  columns: TableColumn[] = MenuColumns;
  menuActions: ActionTable[] = MenuActions;

  refreshMenu = false;

  private destroy$ = new Subject<void>();

  constructor(
    private localstorageService: StorageService,
    private router: Router,
    private menuService: MenuService,
    private refreshTunnel: refreshTunnel
  ) {}

  ngOnInit() {
    this.handleRefreshMenu()
    this.handleGetMenus()
  }

  //TODO pasarlo a una utilidad
  handleOverflow(isOverflowing: boolean | undefined): void {
    this.overflow = isOverflowing;
  }

  handleRefreshMenu(){
    this.refreshTunnel.refresh$
      .pipe(takeUntil(this.destroy$))
      .subscribe(refresh => {
        this.refreshMenu = refresh;
      })
  }

  handleGetMenus(){
    const userInfo = this.localstorageService.getItem('userInfo');
    // @ts-ignore
    this.menuService.getParentMenu(userInfo.entidadId, this.refreshMenu)
      .pipe(takeUntil(this.destroy$))
      .subscribe(menus => {
        this.dataSource = menus;
        this.refreshTunnel.setrefreshState(false)
      })
  }

  navegateCreate(){
    this.router.navigate(["/home/administracion-menus/crear"])
  }

  actionHandler(event: any, row:any){
    this.router.navigate(
      [`/home/asignacion-${event}`],
      { queryParams: { menu: row.MenuID } }
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
