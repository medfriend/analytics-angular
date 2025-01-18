import {TableColumn} from "../table/basic-table/basic-table.interface";

export const Usercolumns: TableColumn[]  = [
  { header: 'Estado', field: 'activo' },
  { header: 'Usuario', field: 'usuario' },
  { header: 'Primer nombre', field: 'nombre_1', overflow: true },
  { header: 'Segundo nombre', field: 'nombre_2' },
  { header: 'Apellido Paterno', field: 'apellido_paterno' },
  { header: 'Apellido Materno', field: 'apellido_materno' },
  { header: 'Email', field: 'email' },
  { header: 'Fecha de Creación', field: 'fecha_creacion', date: true },
];

export const Rolcolumns: TableColumn[] = [
  { header: 'Estado', field: 'activo' },
  { header: 'descripción', field: 'descripcion' },
  { header: 'nombre', field: 'nombre', overflow: true },
]
