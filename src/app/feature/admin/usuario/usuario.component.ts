import {Component, OnInit, OnDestroy} from "@angular/core";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";
import {Router} from "@angular/router";
import { UserService } from "../../../core/service/user.service";
import { TableComponent } from "../../../components/table/basic-table/table.component";
import { sharedModules } from "../../../shared/shared.module";
import {BasicAutocompleteComponent} from "../../../components/autocompletes/basic-autocomplete.component";
import {miniTableComponent} from "../../../components/table/mini-table/mini-table.component";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  standalone: true,
  imports: [[...sharedModules], BasicButtonComponent, TableComponent, BasicAutocompleteComponent, miniTableComponent
  ],
})
export class UsuarioAdminComponent implements OnInit, OnDestroy {
  dataSource: any[] = [];
  overflow: boolean | undefined = false;
  private destroy$ = new Subject<void>();

  columns = [
    { header: 'Estado', field: 'activo' },
    { header: 'Usuario', field: 'usuario' },
    { header: 'Primer nombre', field: 'nombre_1', foldable: true },
    { header: 'Segundo nombre', field: 'nombre_2' },
    { header: 'Apellido Paterno', field: 'apellido_paterno' },
    { header: 'Apellido Materno', field: 'apellido_materno' },
    { header: 'Email', field: 'email' },
    { header: 'Fecha de Creación', field: 'fecha_creacion', date: true },
  ];

  idKey= 'usuario_id';

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => this.dataSource = data);
  }

  navegateCreate(){
    this.router.navigate(["/home/administracion-usuarios/crear"]);
  }

  handleOverflow(isOverflowing: boolean | undefined): void {
    this.overflow = isOverflowing;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
