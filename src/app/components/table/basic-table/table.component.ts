import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, ElementRef, Input, OnChanges, Output, SimpleChanges, ViewChild, EventEmitter } from '@angular/core';
import {sharedModules} from "../../../shared/shared.module";
import {ActionPanelComponent} from "../../actionPanel/actionPanel.component";
import {UserListComponent} from "../../list/user-list/user-list.component";
import {TableListComponent} from "../../list/table-list/table-list.component";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";
import {enviroment} from "../../../enviroment/components.enviroment";
import {BasicPaginationComponent} from "../../pagination/basic-pagination/basic-pagination.component";
import {TableService} from "../../../util/table/table.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [[...sharedModules], ActionPanelComponent, UserListComponent, TableListComponent, BasicPaginationComponent]
})
export class TableComponent implements AfterViewInit {
  @ViewChild('tableContainer', { static: true }) tableContainer!: ElementRef;
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() paginated: boolean = true;
  @Input() idKey: string = '';

  @Output() overflowDetected: EventEmitter<boolean>  = new EventEmitter<boolean>();

  constructor(
    protected tableService: TableService,
  ) {}

  paginatedData: any[] = [];

  ngAfterViewInit(): void {
    this.checkOverflow();

    new ResizeObserver(() => {
      this.checkOverflow();
    }).observe(this.tableContainer.nativeElement);
  }

  checkOverflow(): void {
    const element = this.tableContainer.nativeElement;
    const isOverflowing = element.scrollWidth > element.clientWidth;

    if(this.overflowDetected !== undefined){
      this.overflowDetected.emit(isOverflowing || false)
    }
  }

  handlerPagination(data: any[]){
    this.paginatedData = data
  }

}
