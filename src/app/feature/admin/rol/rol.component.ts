import {Component, OnDestroy} from "@angular/core";
import {Subject, takeUntil} from "rxjs";
import {RolService} from "../../../core/service/rol.service";

@Component({
  selector: 'app-rol-admin',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss'],
  standalone: true
})
export class RolAdminComponent implements OnDestroy{

  private destroy$ = new Subject<void>();

  constructor(
    private rolService: RolService
  ) {}

  handleRolClick() {
    this.rolService
      .GetRolById("1")
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          console.log('Rol recibido:', data);
        },
        error: (err) => {
          console.error('Error al obtener el rol:', err);
        },
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
