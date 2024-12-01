import {Component, Input} from "@angular/core";
import {BasicBorderComponent} from "../../border/basic-border.component";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";
import {BasicCollapsedComponent} from "../../collapsed/basic-collapsed/basic-collapsed.component";
import {sharedModules} from "../../../shared/shared.module";
import {ActionPanelComponent} from "../../actionPanel/actionPanel.component";
import {TableListComponent} from "../../list/table-list/table-list.component";
import {BasicPaginationComponent} from "../../pagination/basic-pagination/basic-pagination.component";
import {TableService} from "../../../util/table/table.service";

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
        TableListComponent,
        BasicPaginationComponent
    ]
})
export class miniTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() paginated: boolean = true;
  @Input() idKey: string = '';

  constructor(
    protected tableService: TableService,
  ) {}

  paginatedData: any[] = [];

  handlerPagination(data: any[]){
    this.paginatedData = data
  }
}
