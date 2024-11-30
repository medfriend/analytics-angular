import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, ElementRef, Input, OnChanges, Output, SimpleChanges, ViewChild, EventEmitter } from '@angular/core';
import {sharedModules} from "../../../shared/shared.module";
import {ActionPanelComponent} from "../../actionPanel/actionPanel.component";
import {UserListComponent} from "../../list/user-list/user-list.component";
import {TableListComponent} from "../../list/table-list/table-list.component";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";
import {enviroment} from "../../../enviroment/components.enviroment";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [[...sharedModules], ActionPanelComponent, UserListComponent, TableListComponent]
})
export class TableComponent implements OnChanges, AfterViewInit {
  @ViewChild('tableContainer', { static: true }) tableContainer!: ElementRef;
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() paginated: boolean = true;
  @Input() idKey: string = '';

  @Output() overflowDetected: EventEmitter<boolean>  = new EventEmitter<boolean>();

  //TODO guardar esta variable dentro de un redux y su copia en el localstorage
  currentPage: number = 1;
  itemsPerPage: number = enviroment.numberRowsTable;
  paginatedData: any[] = [];
  totalPages: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['columns']) {
      this.calculatePagination();
    }
  }

  ngAfterViewInit(): void {
    this.checkOverflow();

    new ResizeObserver(() => {
      this.checkOverflow();
    }).observe(this.tableContainer.nativeElement);
  }

  checkOverflow(): void {
    /*const element = this.tableContainer.nativeElement;
    const isOverflowing = element.scrollWidth > element.clientWidth;

    if(this.overflowDetected !== undefined){
      this.overflowDetected.emit(isOverflowing || false)
    }*/
  }

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }

  calculatePagination() {
    if (!this.paginated) {
      this.paginatedData = this.data;
      return;
    }

    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    this.currentPage = Math.min(this.currentPage, this.totalPages);

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.paginatedData = this.data.slice(start, end);
  }

  convertDate(dateString : string): string{
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    return date.toLocaleString('es-ES', options);
  }

  changePage(direction: number) {
    const newPage = this.currentPage + direction;
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.calculatePagination();
    }
  }
}
