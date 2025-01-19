import {TableColumn} from "../table/basic-table/basic-table.interface";
import {ActionTable} from "../action-table/action-table.component";

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

export const MenuActions: ActionTable[] = [
  {
    icon: 'link',
    color: '#4caf50',
    size: 24,
    identificator: "menu-recurso",
    tooltip: "asignar recurso a menu"
  },
  {
    icon: 'merge',
    color: '#4caf50',
    size: 24,
    identificator: "menu-submenu",
    tooltip: "asignar submenu a menu"
  }
]
