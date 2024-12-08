using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SIGESPROC.Common.Models
{
    public class ColaboradorSucursalViewModel
    {
        public int cosu_id { get; set; }
        public int cola_id { get; set; } 
        public string cola_nombre_completo { get; set; } 
        public string cola_email { get; set; } 
        public string cola_sexo { get; set; }
        public bool cola_activo { get; set; }
        public int sucu_id { get; set; } 
        public string sucu_nombre { get; set; } 
        public string sucu_direccion { get; set; } 
        public decimal distancia_km { get; set; }
    }
}
