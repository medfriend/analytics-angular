import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject, takeUntil} from "rxjs";
import {RolService} from "../../../core/service/rol.service";
import {BasicAutocompleteComponent} from "../../../components/autocompletes/basic-autocomplete.component";
import {BasicHeaderComponent} from "../../../components/header/basic-header/basic-header.component";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";
import {Router} from "@angular/router";
import {refreshTunnel} from "../../../core/tunnel/usuario/usuario.tunnel";
import {Usuario} from "../../../core/interfaces/components/usuario/usuario.interface";
import {Rol} from "../../../core/interfaces/services/rol.interface";

@Component({
  selector: 'app-rol-admin',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss'],
  imports: [
    BasicAutocompleteComponent,
    BasicHeaderComponent,
    BasicButtonComponent
  ],
  standalone: true
})
export class RolAdminComponent implements OnInit, OnDestroy{

  private destroy$ = new Subject<void>();
  refreshRol: boolean = false;
  dataSource: Rol[] = [];

  constructor(
    private rolService: RolService,
    private router: Router,
    private refreshTunnel: refreshTunnel,
  ) {}

  ngOnInit() {
    this.handleRefreshRol()
    this.getRoles()
  }

  navegateCreate(){
    this.router.navigate(["/home/administracion-roles/crear"]);
  }

  handleRefreshRol(){
    this.refreshTunnel.refresh$
      .pipe(takeUntil(this.destroy$))
      .subscribe(refresh => {
        this.refreshRol = refresh;
      })
  }

  getRoles(){
    this.rolService.getRoles(this.refreshRol)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      this.dataSource = data
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
