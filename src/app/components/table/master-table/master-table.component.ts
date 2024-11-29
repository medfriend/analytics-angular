import {Component, EventEmitter, Input, Output} from "@angular/core";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";
import {miniTableComponent} from "../mini-table/mini-table.component";
import {TableComponent} from "../basic-table/table.component";
import {NotFound} from "../../not-found/not-found.component";
import {sharedModules} from "../../../shared/shared.module";

@Component({
  selector: "app-master-table",
  templateUrl: "./master-table.component.html",
  styleUrls: ["./master-table.component.scss"],
  imports: [
    miniTableComponent,
    TableComponent,
    NotFound,
    ...sharedModules
  ],
  standalone: true
})
export class MasterTableComponent {
  @Input() dataSource: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() paginated: boolean = true;
  @Input() idKey: string = '';
  @Input() noFoundTitle: string = '';

  @Input() overflow: boolean | undefined;

  @Output() overflowDetected = new EventEmitter<boolean>();

  handleOverflow(event: boolean): void {
    this.overflowDetected.emit(event);
  }
}
