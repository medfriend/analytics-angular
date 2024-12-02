import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { sharedModules } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TableComponent } from '../basic-table/table.component';
import { Subject, takeUntil } from 'rxjs';
import { TableColumn } from '../../../core/interfaces/components/table/basic-table/basic-table.interface';
import { BasicAutocompleteComponent } from '../../autocompletes/basic-autocomplete.component';
import {ApiService} from "../../../util/apiService/apiService.service";
import {Usercolumns} from "../../../core/interfaces/components/rol-usuario/rol-usuario.interface";
import {SelectableTableComponent} from "../selectable-table/selectable-table.component";
import {ToastService} from "../../toast/toast.component";

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss'],
  standalone: true,
  imports: [[...sharedModules], FormsModule, TableComponent, BasicAutocompleteComponent, SelectableTableComponent]
})

export class filterTableComponent implements  OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  subjections: any[] = []
  dataSource: any[] = [];
  allDataSource: any[] = []

  row: any = null;

  @Input('dataUri') dataUri: string = '';
  @Input('filterKey') filterKey: string = '';
  @Input('placeholder') placeholder: string = '';
  @Input('tableColumns') columns: TableColumn[] = [];

  @Output() selectedRow: EventEmitter<any> = new EventEmitter();

  constructor(
    private httpServer: ApiService,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    this.getAll()
  }

  filter() {
    return (value: any)=> {
      this.dataSource =  this.allDataSource.filter((item: any) =>item[this.filterKey].toString() === value.toString())
    }
  }

  getAll() { this.httpServer.get<any>(this.dataUri, true)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      this.subjections = data.map((item: any) => item[this.filterKey].toString())
      this.dataSource = data
      this.allDataSource = data
    })
  }

  handlerSelected(row: any) {
    this.row = row;
  }

  handlerButton(){
    if(this.row === null){
      this.toastService.addToast('No se a seleccionado un valor', 'error')
      return
    }

    this.selectedRow.emit(this.row);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
