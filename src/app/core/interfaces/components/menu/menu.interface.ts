import {TableColumn} from "../table/basic-table/basic-table.interface";

export interface Menu {
  MenuID: number;         // ID único del menú
  nombre: string;         // Nombre del menú
  entidad_id: number;     // ID de la entidad asociada
  descripcion: string;    // Descripción del menú
  icono: string;
}

export const MenuColumns: TableColumn[]  = [
  { header: 'Nombre', field: 'nombre', foldable: true, overflow: true },
  { header: 'Descripcion', field: 'descripcion' },
  { header: 'Icono', field: 'icono', icon: true }
];
