export interface Entity {
  entidad_id: number;
  nit: number;
  nit_alterno?: string;
  razon_social: string;
  email?: string;
  activo: boolean;
}
