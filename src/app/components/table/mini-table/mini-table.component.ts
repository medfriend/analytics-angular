import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {BasicBorderComponent} from "../../border/basic-border.component";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";
import {enviroment} from "../../../enviroment/components.enviroment";
import {NgForOf, NgIf} from "@angular/common";
import {BasicCollapsedComponent} from "../../collapsed/basic-collapsed/basic-collapsed.component";
import {sharedModules} from "../../../shared/shared.module";
import {ActionPanelComponent} from "../../actionPanel/actionPanel.component";
import {TableListComponent} from "../../list/table-list/table-list.component";

@Component({
  selector: "app-mini-table",
  templateUrl: "./mini-table.component.html",
  styleUrls: ["./mini-table.component.scss"],
  standalone: true,
  imports: [
    BasicBorderComponent,
    BasicCollapsedComponent,
    [...sharedModules],
    ActionPanelComponent,
    TableListComponent
  ]
})
export class miniTableComponent implements OnInit, OnChanges {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() paginated: boolean = true;
  @Input() idKey: string = '';

  currentPage: number = 1;
  itemsPerPage: number = enviroment.numberRowsTable;
  paginatedData: any[] = [];
  totalPages: number = 0;

  ngOnInit() {
    console.log(this.data)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['columns']) {
      this.calculatePagination();
    }
  }

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
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

}
