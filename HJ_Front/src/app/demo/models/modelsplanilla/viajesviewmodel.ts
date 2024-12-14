
export interface ViajeEncabezado {
    sucu_id: number; 
    user_user_id: number; 
    viaj_fecha: string; 
    trans_id: number; 
  }
  

  export interface ViajeDetalle {
    viaj_id: number; 
    cola_id: number; 
    distancia_km: number; 
    total_a_pagar: number; 
    cosu_id: number;
  }


  export interface ViajeConDetallesViewModel {
    viaj_id: number;
    sucu_id: number;
    user_user_id: number;
    sucu_nombre: string;
    trans_id: number;
    viaj_fecha: string;
    total_km: number;
    total_a_pagar: number;
    vide_id: number | null;
    cola_id: number | null;
    distancia_km: number | null;
    total_a_pagar_detalle: number | null;
    cosu_id: number | null;
    fecha_viaje: string | null; 
    trans_nombre: string;
    trans_apellido: string;
    trans_tarifa_por_km: number | null;
    trans_activo: boolean | null;
    cola_activo: boolean | null;
    distancia_sucursal: number | null;
    cola_nombre: string | null;
    cola_apelllido: string | null;
    cola_sexo: string | null;
    cola_email: string | null;
    cola_direccion: string | null;
    colaborador_activo: boolean | null;
    user_username: string;
    user_role: string;
  }
  
  