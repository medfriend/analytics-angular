export interface Usuario {
    activo: boolean;
    apellido_materno: string;
    apellido_paterno: string;
    cambiar_clave: boolean;
    clave: string;
    email: string;
    fecha_cambio_clave: string;
    fecha_creacion: string;
    fecha_retiro: string | null;
    nombre_1: string;
    nombre_2: string;
    tiempo_valides_token: string;
    usuario: number;
    usuario_id: number;
  }
  