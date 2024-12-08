using Dapper;
using Microsoft.Data.SqlClient;
using SIGESPROC.Common.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SIGESPROC.DataAccess.Repositories
{
    public class usuarioRepository
    {
        public IEnumerable<UsuarioViewModel> InicioSesion(string usuario, string clave)
        {
            List<UsuarioViewModel> result = new List<UsuarioViewModel>();

            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {
                var parametro = new DynamicParameters();
                parametro.Add("user_username", usuario);
                parametro.Add("user_password_hash", clave);

                var response = db.QueryFirstOrDefault<UsuarioViewModel>(
                    "[dbo].[SP_Login]",
                    parametro,
                    commandType: CommandType.StoredProcedure
                );

                
                    result.Add(response);
                

                return result;
            }
        }

    }
}
