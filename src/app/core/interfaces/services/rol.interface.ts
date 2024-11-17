export interface Rol {
  rolId: number; // Corresponde a uint en Go
  nombre: string;
  descripcion: string;
  entidadId: number; // Corresponde a uint en Go
  activo: boolean;
}
