import {TableColumn} from "../table/basic-table/basic-table.interface";

export const Entitycolumns: TableColumn[]  = [
  { header: 'Estado', field: 'activo' },
  { header: 'razon social', field: 'razon_social', foldable: true, overflow: true },
  { header: 'email', field: 'email' },
  { header: 'nit', field: 'nit' },
];
