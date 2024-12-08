using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SIGESPROC.Common.Models
{
    public class UsuarioViewModel
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string UserRole { get; set; }
        public int ColaId { get; set; }
        public string ColaNombre { get; set; }
        public string ColaApellido { get; set; }
        public string ColaSexo { get; set; }
        public string ColaEmail { get; set; }
        public bool UserActivo { get; set; }
    }

}
