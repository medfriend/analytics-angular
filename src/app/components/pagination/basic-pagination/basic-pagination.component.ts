import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {sharedModules} from "../../../shared/shared.module";
import {enviroment} from "../../../enviroment/components.enviroment";

@Component({
  selector: "app-basic-pagination",
  templateUrl: "./basic-pagination.component.html",
  styleUrls: ["./basic-pagination.component.scss"],
  standalone: true,
  imports: [ ...sharedModules]
})
export class BasicPaginationComponent implements  OnChanges{
  @Input() paginated: boolean = true;
  @Input() data: any[] = [];
  @Output() paginatedDataChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  currentPage: number = 1;
  itemsPerPage: number = enviroment.numberRowsTable;
  totalPages: number = 0;
  paginatedData: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['columns']) {
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
    this.paginatedDataChange.emit(this.paginatedData)
  }

  changePage(direction: number) {
    const newPage = this.currentPage + direction;
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.calculatePagination();
    }
  }
}
