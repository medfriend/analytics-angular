import {TableColumn} from "../table/basic-table/basic-table.interface";

export interface Recurso {
  recurso_id: number;
  descripcion: string;
  acceso: string;
}

export const RecursoColumns: TableColumn[] = [
  { header: 'id', field: 'recurso_id', foldable: true, overflow: true },
  { header: 'Descripcion', field: 'descripcion' },
  { header: 'Acceso', field: 'acceso' },
]
