import {Component, Input} from "@angular/core";
import {sharedModules} from "../../../shared/shared.module";
import {BasicBorderComponent} from "../../border/basic-border.component";
import {BasicModalComponent} from "../../modal/basic-modal/basic-modal.component";
import {filterTableComponent} from "../../table/filter-table/filter-table.component";
import {ModalService} from "../../../util/modal/modal.service";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";

@Component({
  selector: "app-modal-input",
  templateUrl: "./modal-input.component.html",
  styleUrls: ["./modal-input.component.scss"],
  standalone: true,
  imports: [...sharedModules, BasicBorderComponent, BasicModalComponent, filterTableComponent]
})
export class ModalInputComponent {

  @Input() label: string = '';
  @Input() dataUri: string = '';
  @Input() filterKey: string = '';
  @Input() labelKey: string = '';
  @Input() placeholder: string = '';
  @Input() tableColumn: TableColumn[] = [];

  isModalVisible: boolean = false;

  constructor(private modalService: ModalService) {}

  openModal() {
    this.isModalVisible = true;
    this.modalService.openModal();
  }

  handleModalClose() {
    this.isModalVisible = false;
  }

  handlerSelectedRow(row: any){
    this.label = row[this.labelKey];
    this.modalService.closeModal();
    this.handleModalClose()
  }
}
