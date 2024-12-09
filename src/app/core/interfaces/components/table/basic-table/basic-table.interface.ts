export type  TableColumn = {
  header: string;  // El encabezado que se muestra en la tabla
  field: string;   // El nombre del campo del objeto que corresponde a la columna
  foldable?: boolean;  // Opcional: Indica si la columna es plegable
  date?: boolean;  // Opcional: Indica si el campo debe tratarse como una fecha
  overflow?: boolean; // Opcional: Indica si el campo es que se mostrara cuando se encuentra en overflow en el componente de mobile
  icon?: boolean; // opciona: indica si se mostrara en forma de icono
}
