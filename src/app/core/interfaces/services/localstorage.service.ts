export interface AuthData {
  exp: number;
  iss: string;
  menus: Menu[];
  user: User;
}

export interface Menu {
  label: string;
  descripcion: string;
  submenus: Submenu[];
  icon: string;
}

export interface Submenu {
  label: string;
  descripcion: string;
  route: string;
  icon: string;
}

export interface User {
  usuario_id: number;
  usuario: number;
  nombre_1: string;
  nombre_2?: string; // Es opcional porque algunos usuarios podrían no tener un segundo nombre
  apellido_paterno: string;
  apellido_materno: string;
  clave: string;
  email: string;
  cambiar_clave: boolean;
  fecha_cambio_clave: string; // Podría ser un Date si decides manejarlo como objeto de fecha
  fecha_creacion: string; // Igual que arriba
  fecha_retiro?: string | null; // Puede ser nulo
  activo: boolean;
  tiempo_valides_token: string; // Considerar usar un tipo más específico si es un tiempo estructurado
}
