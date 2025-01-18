import {TableColumn} from "../table/basic-table/basic-table.interface";

export const Menucolumns: TableColumn[] = [
  { header: 'Nombre', field: 'nombre'},
  { header: 'Descripcion', field: 'descripcion' },
  { header: 'Icono', field: 'icono', icon: true }
];

export const Recursocolumns: TableColumn[] = [
  { header: 'Descripcion', field: 'descripcion' },
  { header: 'Acceso', field: 'acceso' },
]
