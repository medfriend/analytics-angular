import {TableColumn} from "../table/basic-table/basic-table.interface";

export type ModalInput = {
  label: string; // etiqueta que se mostrara dentro del modal
  datauri: string; // peticion de tipo GET que traera los datos
  filterKey?: string; // es la key con la cual se realizaran las peticiones en el autocomple
  labelKey?: string; // la key que se mostrar cuando el proceso se haya completado
  placeholder?: string; // el placeholder que se mostrara en el autocomplete
  tableColumn?: TableColumn; // configuracion de la tabla que se mostrara
}
