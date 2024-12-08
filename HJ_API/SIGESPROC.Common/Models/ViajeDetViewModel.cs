using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SIGESPROC.Common.Models
{
    public class ViajeDetViewModel
    {
        public int viaj_id { get; set; }
        public int cola_id { get; set; }
        public decimal  distancia_km { get; set; }
        public decimal total_a_pagar { get; set; }
        public int cosu_id { get; set; }
        public DateTime fecha_viaje { get; set; }


    }
}
