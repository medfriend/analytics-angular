import {ValidatorFn} from "@angular/forms";
import {TableColumn} from "../../table/basic-table/basic-table.interface";

type ModalInput = {
  label: string;
  dataUri: string;
  filterKey: string;
  labelKey: string;
  formKey: string;
  placeholder: string;
  tableColumn: TableColumn[];
}

export  type InputInfo = {
  label: string,
  labelFor: string,
  type: string,
  formControlName: string,
  placeholder: string,
  validators?: ValidatorFn[],
  modalInput?: ModalInput,
}
