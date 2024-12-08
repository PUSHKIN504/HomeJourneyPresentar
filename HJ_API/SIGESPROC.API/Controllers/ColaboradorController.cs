using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SIGESPROC.BusinessLogic.Services;
using SIGESPROC.Common.Models;
using SIGESPROC.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SIGESPROC.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ColaboradorController : Controller
    {
        private readonly ColaboradorService _colaboradorService;
        private readonly IMapper _mapper;

        public ColaboradorController(ColaboradorService colaboradorService, IMapper mapper)
        {

            _colaboradorService = colaboradorService;
            _mapper = mapper;
        }
        [HttpGet("ListarColaboradores")]
        public IActionResult ListarColaboradores()
        {
            var response = _colaboradorService.ListarColaboradores(); 
            return Ok(response.Data); 
        }

        [HttpGet("ListarColaSuc")]
        public IActionResult ListarColaSuc()
        {
            var response = _colaboradorService.ListarColaSucu();
            return Ok(response.Data);
        }
        [HttpGet("ListarSuc")]
        public IActionResult ListarSuc()
        {
            var response = _colaboradorService.ListarSucu();
            return Ok(response.Data);
        }
        [HttpPost("Insertar")]
        public IActionResult Create(ColaboradorViewModel colaboradorViewModel)
        {
            var colaborador = new tbcolaboradores
            {
                cola_nombre = colaboradorViewModel.cola_nombre,
                cola_apelllido = colaboradorViewModel.cola_apelllido,
                cola_sexo = colaboradorViewModel.cola_sexo,
                cola_email = colaboradorViewModel.cola_email,
               
            };

            var response = _colaboradorService.InsertarColaboradores(colaborador);

            
                return Ok(response); 
           
        }

        [HttpPost("InsertarColXSuc")]
        public IActionResult CreateSucXC(ColaboradoresXSucViewModel colaboradorViewModel)
        {
            var colaborador = new tbcolaboradores_por_sucursales
            {
                cola_id = colaboradorViewModel.cola_id,
                sucu_id = colaboradorViewModel.sucu_id,
                distancia_km = colaboradorViewModel.distancia_km,

            };

            var response = _colaboradorService.InsertarColabXSuc(colaborador);


            return Ok(response); 

        }
        [HttpPost("InsertarViajeEnc")]
        public IActionResult InsertarViajeEnc(ViajeEncViewModel colaboradorViewModel)
        {
            var colaborador = new ViajeEncViewModel
            {
                sucu_id = colaboradorViewModel.sucu_id,
                user_user_id = colaboradorViewModel.user_user_id,
                trans_id = colaboradorViewModel.trans_id,
                viaj_fecha = colaboradorViewModel.viaj_fecha,

            };

            var response = _colaboradorService.InsertarViajeEnc(colaborador);


            return Ok(response);

        }

        [HttpPost("InsertarViajeDet")]
        public IActionResult InsertarViajeDet(ViajeDetViewModel colaboradorViewModel)
        {
            var colaborador = new ViajeDetViewModel
            {
                viaj_id = colaboradorViewModel.viaj_id,
                cola_id = colaboradorViewModel.cola_id,
                distancia_km = colaboradorViewModel.distancia_km,
                total_a_pagar = colaboradorViewModel.total_a_pagar,
                cosu_id = colaboradorViewModel.cosu_id,
                fecha_viaje = colaboradorViewModel.fecha_viaje,

            };

            var response = _colaboradorService.InsertarViajeDet(colaborador);


            return Ok(response);

        }

        [HttpPut("ActualizarColXSuc")]
        public IActionResult ActualizarSucXC(ColaboradoresXSucViewModel colaboradorViewModel)
        {
            var colaborador = new tbcolaboradores_por_sucursales
            {
                cosu_id =colaboradorViewModel.cosu_id,
                cola_id = colaboradorViewModel.cola_id,
                sucu_id = colaboradorViewModel.sucu_id,
                distancia_km = colaboradorViewModel.distancia_km,

            };

            var response = _colaboradorService.ActualizarColabXSuc(colaborador);


            return Ok(response);

        }

        [HttpDelete("DeleteColXSuc/{id}")]
        public IActionResult DeleteSucXC(int id)
        {
           

            var response = _colaboradorService.DeleteColabXSuc(id);


            return Ok(response);

        }
        [HttpGet("ObtenerReporteViajes")]
        public IActionResult ObtenerReporteViajes(int transportistaId, DateTime fechaInicio, DateTime fechaFin)
        {
            var response = _colaboradorService.ObtenerReporteViajes(transportistaId, fechaInicio, fechaFin);

            
                return Ok(response);
           
        }
        [HttpGet("ListarTransportistas")]
        public IActionResult ObtenerReporteViajes()
        {
            var response = _colaboradorService.ListarTransportista  ();


            return Ok(response.Data);

        }
        [HttpGet("grafico")]
        public IActionResult obtenerGrafico()
        {
            var response = _colaboradorService.Graficos();


            return Ok(response.Data);

        }
    }
}
