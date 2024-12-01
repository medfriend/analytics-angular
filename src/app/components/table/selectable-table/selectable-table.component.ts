import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";
import {TableService} from "../../../util/table/table.service";
import {sharedModules} from "../../../shared/shared.module";
import {ActionPanelComponent} from "../../actionPanel/actionPanel.component";
import {TableListComponent} from "../../list/table-list/table-list.component";
import {BasicPaginationComponent} from "../../pagination/basic-pagination/basic-pagination.component";

@Component({
  selector: "selectable-table",
  templateUrl: "./selectable-table.component.html",
  styleUrls: ["./selectable-table.component.scss"],
  standalone: true,
  imports: [...sharedModules, ActionPanelComponent, TableListComponent, BasicPaginationComponent]
})
export class SelectableTableComponent implements AfterViewInit {
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
