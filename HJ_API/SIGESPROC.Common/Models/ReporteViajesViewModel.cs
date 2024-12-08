using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SIGESPROC.Common.Models
{
   
    public class ViajeDetalleViewModel
    {
        public int viaj_id { get; set; }       
        public DateTime viaj_fecha { get; set; }     
        public string transportista { get; set; } 
        public string sucursal { get; set; }   
        public decimal total_km { get; set; }   
        public decimal total_a_pagar { get; set; }
        public string c_nombre { get; set; }
        public decimal total_pago_individual { get; set; }
        public decimal trans_tarifa_por_km { get; set; }
        public string cola_sexo { get; set; }
        public string cola_direccion { get; set; }


    }

  
}
