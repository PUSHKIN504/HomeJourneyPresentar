using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SIGESPROC.Common.Models
{
    public class TransportistaViewModel
    {
        public int trans_id { get; set; }
        public string nombre_transp { get; set; }
        public decimal trans_tarifa_por_km { get; set; }

    }
}
