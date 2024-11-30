import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { sharedModules } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TableComponent } from '../basic-table/table.component';
import { UserService } from '../../../core/service/user.service';
import { Subject, takeUntil } from 'rxjs';
import { TableColumn } from '../../../core/interfaces/components/table/basic-table/basic-table.interface';
import { Usercolumns } from '../../../core/interfaces/components/crear-usuario/crear-usuario.interface';
import { BasicAutocompleteComponent } from '../../autocompletes/basic-autocomplete.component';
import { Usuario } from '../../../core/interfaces/components/usuario/usuario.interface';
import {ApiService} from "../../../util/apiService/apiService.service";

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss'],
  standalone: true,
  imports: [[...sharedModules], FormsModule, TableComponent, BasicAutocompleteComponent]
})

export class filterTableComponent implements  OnInit, OnDestroy {
  refreshUser = false;
  private destroy$ = new Subject<void>();
  subjections: any[] = []
  dataSource: Usuario[] = [];
  inputValue: string = '';
  columns: TableColumn[] = Usercolumns;
  idKey= 'usuario_id';

  @Input('dataUri') dataUri: string = '';
  @Input('filterKey') filterKey: string = '';

  constructor(
    private userService: UserService,
    private httpServer: ApiService
  ) {}

  ngOnInit() {
    this.getAll()
  }

  filter() {
    return (value: any)=> {
      //this.dataSource = [];
      this.userService.getUser(value)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data) =>{
          this.dataSource = [data]
      });
    }
  }

  getAll() { this.httpServer.get<any>(this.dataUri, true)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      this.subjections = data.map((item: any) => item[this.filterKey].toString())
      this.dataSource = data
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
