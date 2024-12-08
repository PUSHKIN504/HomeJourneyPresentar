using SIGESPROC.Common.Models;
using SIGESPROC.DataAccess.Repositories;
using SIGESPROC.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SIGESPROC.BusinessLogic.Services
{
    public class ColaboradorService
    {
        private readonly ColaboradorRepository _colaboradorRepository;
        public ColaboradorService(
              ColaboradorRepository colaboradorRepository
            )
        {
            _colaboradorRepository = colaboradorRepository;
        }

        public ServiceResult ListarColaboradores()
        {
            var result = new ServiceResult();
            try
            {
                var list = _colaboradorRepository.List();
                return result.Ok(list);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }

        }
        public ServiceResult ListarColaSucu()
        {
            var result = new ServiceResult();
            try
            {
                var list = _colaboradorRepository.ListColaSuc();
                return result.Ok(list);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }

        }
        public ServiceResult ListarSucu()
        {
            var result = new ServiceResult();
            try
            {
                var list = _colaboradorRepository.ListSucursales();
                return result.Ok(list);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }

        }
        public ServiceResult InsertarColaboradores(tbcolaboradores item)
        {
            var result = new ServiceResult();
            try
            {
                var map = _colaboradorRepository.Insert(item);
                if (map.CodeStatus == 1)
                {
                    return result.Ok(map);
                }
                else
                {
                    return result.Error(map);
                }
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }
        public ServiceResult InsertarViajeEnc(ViajeEncViewModel item)
        {
            var result = new ServiceResult();
            try
            {
                var map = _colaboradorRepository.InsertViajeEnc(item);
                if (map.CodeStatus == 1)
                {
                    return result.Ok(map);
                }
                else
                {
                    return result.Error(map);
                }
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }
        public ServiceResult InsertarViajeDet(ViajeDetViewModel item)
        {
            var result = new ServiceResult();
            try
            {
                var map = _colaboradorRepository.InsertViajeDet(item);
                if (map.CodeStatus == 1)
                {
                    return result.Ok(map);
                }
                else
                {
                    return result.Error(map);
                }
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }
        public ServiceResult ActualizarColabXSuc(tbcolaboradores_por_sucursales item)
        {
            var result = new ServiceResult();
            try
            {
                var map = _colaboradorRepository.UpdateSucXCol(item);
                if (map.CodeStatus == 1)
                {
                    return result.Ok(map);
                }
                else
                {
                    return result.Error(map);
                }
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }
        public ServiceResult DeleteColabXSuc(int id)
        {
            var result = new ServiceResult();
            try
            {
                var map = _colaboradorRepository.DeleteSucXCol(id);
                if (map.CodeStatus == 1)
                {
                    return result.Ok(map);
                }
                else
                {
                    return result.Error(map);
                }
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }
        public ServiceResult InsertarColabXSuc(tbcolaboradores_por_sucursales item)
        {
            var result = new ServiceResult();
            try
            {
                var map = _colaboradorRepository.InsertSucxcol(item);
                if (map.CodeStatus == 1)
                {
                    return result.Ok(map);
                }
                else
                {
                    return result.Error(map);
                }
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }

        public ServiceResult ObtenerReporteViajes(int transportistaId, DateTime fechaInicio, DateTime fechaFin)
        {
            var result = new ServiceResult();
            try
            {
                var list = _colaboradorRepository.GetReporteViajes(transportistaId, fechaInicio, fechaFin);
                return result.Ok(list);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }
        public ServiceResult ListarTransportista()
        {
            var result = new ServiceResult();
            try
            {
                var list = _colaboradorRepository.ListarTransportistas();
                return result.Ok(list);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }
        public ServiceResult Graficos()
        {
            var result = new ServiceResult();
            try
            {
                var list = _colaboradorRepository.graficoSucursales();
                return result.Ok(list);
            }
            catch (Exception ex)
            {
                return result.Error(ex.Message);
            }
        }

    }
}
