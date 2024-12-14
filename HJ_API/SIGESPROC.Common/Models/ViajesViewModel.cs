using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SIGESPROC.Common.Models
{
    public class ViajesViewModel
    {
        public int viaj_id { get; set; }
        public int sucu_id { get; set; }
        public int user_user_id { get; set; }
        public int trans_id { get; set; }
        public DateTime viaj_fecha { get; set; }
        public decimal total_km { get; set; }
        public string sucu_nombre { get; set; }
        public decimal total_a_pagar { get; set; }

        public int? vide_id { get; set; }
        public int? cola_id { get; set; }
        public decimal? distancia_km { get; set; }
        public decimal? total_a_pagar_detalle { get; set; }
        public int? cosu_id { get; set; }
        public DateTime? fecha_viaje { get; set; }

        public string trans_nombre { get; set; }
        public string trans_apellido { get; set; }
        public decimal? trans_tarifa_por_km { get; set; }
        public bool? trans_activo { get; set; }

        public bool? cola_activo { get; set; }
        public decimal? distancia_sucursal { get; set; }

        public string cola_nombre { get; set; }
        public string cola_apelllido { get; set; }
        public string cola_sexo { get; set; }
        public string cola_email { get; set; }
        public string cola_direccion { get; set; }
        public bool? colaborador_activo { get; set; }

        public string user_username { get; set; }
        public string user_role { get; set; }

    }
}
