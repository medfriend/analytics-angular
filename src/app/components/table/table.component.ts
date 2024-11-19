import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule]  
})
export class TableComponent implements OnChanges {
  @Input() columns: { header: string; field: string }[] = [];
  @Input() data: any[] = [];
  @Input() paginated: boolean = true;

  currentPage: number = 1;
  itemsPerPage: number = 5;
  paginatedData: any[] = [];
  totalPages: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    // Solo recalcular si 'data' o 'columns' cambian
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
    this.currentPage = Math.min(this.currentPage, this.totalPages); // Asegurarse de que la página actual no sea mayor que la total

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.paginatedData = this.data.slice(start, end);
  }

  changePage(direction: number) {
    const newPage = this.currentPage + direction;
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.calculatePagination();
    }
  }
}
