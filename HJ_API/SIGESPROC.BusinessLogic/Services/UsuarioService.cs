using SIGESPROC.Common.Models;
using SIGESPROC.DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SIGESPROC.BusinessLogic.Services
{
    public class UsuarioService
    {
        private readonly usuarioRepository _usuarioRepository;
        public UsuarioService(
              usuarioRepository colaboradorRepository
            )
        {
            _usuarioRepository = colaboradorRepository;
        }
        public ServiceResult InicioSesionUsuario(string user, string clave)
        {
            var result = new ServiceResult();

            try
            {
                var usuario = _usuarioRepository.InicioSesion(user, clave);

                return result.Ok(usuario);
            }
            catch (Exception ex)
            {
                result.Error(ex.Message);

                throw;
            }
        }
    }
}
