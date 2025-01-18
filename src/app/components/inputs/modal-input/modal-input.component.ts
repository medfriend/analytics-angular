import {Component, forwardRef, Input} from "@angular/core";
import {sharedModules} from "../../../shared/shared.module";
import {BasicBorderComponent} from "../../border/basic-border.component";
import {BasicModalComponent} from "../../modal/basic-modal/basic-modal.component";
import {filterTableComponent} from "../../table/filter-table/filter-table.component";
import {ModalService} from "../../../util/modal/modal.service";
import {TableColumn} from "../../../core/interfaces/components/table/basic-table/basic-table.interface";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-modal-input",
  templateUrl: "./modal-input.component.html",
  styleUrls: ["./modal-input.component.scss"],
  standalone: true,
  imports: [...sharedModules, BasicBorderComponent, BasicModalComponent, filterTableComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ModalInputComponent),
      multi: true,
    },
  ],
})
export class ModalInputComponent implements ControlValueAccessor{

  @Input() label: string = '';
  @Input() dataUri: string = '';
  @Input() filterKey: string = '';
  @Input() labelKey: string = '';
  @Input() formKey: string = '';
  @Input() placeholder: string = '';
  @Input() tableColumn: TableColumn[] = [];

  isModalVisible: boolean = false;
  value: any;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private modalService: ModalService) {}

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  openModal() {
    this.isModalVisible = true;
    this.modalService.openModal();
  }

  handleModalClose() {
    this.isModalVisible = false;
  }

  handlerSelectedRow(row: any){
    this.value = row[this.labelKey];
    this.placeholder = this.value;
    this.onChange(row[this.formKey]);

    this.modalService.closeModal();
    this.handleModalClose()
  }
}
