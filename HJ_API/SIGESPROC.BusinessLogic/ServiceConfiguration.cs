using Microsoft.Extensions.DependencyInjection;
using SIGESPROC.BusinessLogic.Services;
using SIGESPROC.DataAccess.Context;
using SIGESPROC.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace SIGESPROC.BusinessLogic
{
     public static class ServiceConfiguration
     {
        public static void DataAcces(this IServiceCollection service, string connection)
        {

            SIGESPROC.DataAccess.SIGESPROC.BuildConnectionString(connection);

            #region Acceso
            service.AddScoped<ColaboradorRepository>();
            service.AddScoped<usuarioRepository>();

            #endregion


        }
        public static void BusinessLogic(this IServiceCollection service)
        {
            service.AddScoped<ColaboradorService>();
            service.AddScoped<UsuarioService>();


        }
    }
  
  
}

   

