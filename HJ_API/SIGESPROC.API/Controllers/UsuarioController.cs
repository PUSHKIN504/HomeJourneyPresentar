using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SIGESPROC.BusinessLogic.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SIGESPROC.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : Controller
    {
        private readonly UsuarioService _accesoService;
        private readonly IMapper _mapper;

        public UsuarioController(UsuarioService accesoService, IMapper mapper)
        {
            _mapper = mapper;
            _accesoService = accesoService;
        }
        [HttpGet("InicioSesion/{user}/{clave}")]
        public IActionResult InicioSesion(string user, string clave)
        {
            var usuario = _accesoService.InicioSesionUsuario(user, clave);

            return Ok(usuario);
        }
    }
}
