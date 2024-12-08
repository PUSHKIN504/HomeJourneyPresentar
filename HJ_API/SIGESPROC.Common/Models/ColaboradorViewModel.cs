using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SIGESPROC.Common.Models
{
    public class ColaboradorViewModel
    {
        public int cola_id { get; set; }
        public string cola_nombre { get; set; }
        public string cola_apelllido { get; set; }
        public string cola_sexo { get; set; }
        public string cola_email { get; set; }
        public bool? user_activo { get; set; }
    }
}
