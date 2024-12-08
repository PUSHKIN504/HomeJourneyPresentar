using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SIGESPROC.Common.Models
{
    public class ColaboradoresXSucViewModel
    {
        public int cosu_id { get; set; }
        public int cola_id { get; set; }
        public bool? cola_activo { get; set; }
        public int sucu_id { get; set; }
        public decimal distancia_km { get; set; }
    }
}
