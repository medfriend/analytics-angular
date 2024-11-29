import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { sharedModules } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TableComponent } from '../table/basic-table/table.component';
import { UserService } from '../../core/service/user.service';
import { Subject, takeUntil } from 'rxjs';
import { TableColumn } from '../../core/interfaces/components/table/basic-table/basic-table.interface';
import { Usercolumns } from '../../core/interfaces/components/crear-usuario/crear-usuario.interface';
import { BasicAutocompleteComponent } from '../autocompletes/basic-autocomplete.component';
import { Usuario } from '../../core/interfaces/components/usuario/usuario.interface';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss'],
  standalone: true,
  imports: [[...sharedModules], FormsModule, TableComponent, BasicAutocompleteComponent]
})

export class filterTableComponent {
  private destroy$ = new Subject<void>();
  subjections: any[] = []
  dataSource: Usuario[] = [];
  inputValue: string = '';
  columns: TableColumn[] = Usercolumns;
  idKey= 'usuario_id';

  constructor(
    private userService: UserService
  ) {}


  ngOnInit() {
    this.getAllUsers()
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  filter() {
    return (value: any)=> {
      this.dataSource = [];
      this.userService.getUser(value)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data) =>{
          this.dataSource = [data]
      });
    }
  }

  getAllUsers() {
    this.userService.getUsers()
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      this.subjections = data.map(usuario => usuario.usuario_id?.toString())
    });
  }

}
