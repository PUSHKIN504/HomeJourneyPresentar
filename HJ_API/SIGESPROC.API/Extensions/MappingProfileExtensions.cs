using AutoMapper;

using SIGESPROC.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SIGESPROC.Entities;
using SIGESPROC.Common.Models;

namespace SIGESPROC.API.Extensions
{
    public class MappingProfileExtensions : Profile
    {
        public MappingProfileExtensions()
        {
            #region Mapped
            CreateMap <ColaboradorViewModel, tbcolaboradores>().ReverseMap();
            CreateMap <UsuarioViewModel, tbusers>().ReverseMap();
            CreateMap <ColaboradoresXSucViewModel, tbcolaboradores_por_sucursales>().ReverseMap();
            CreateMap <ColaboradorSucursalViewModel, tbcolaboradores_por_sucursales>().ReverseMap();
            CreateMap <tbsucursales, tbsucursales>().ReverseMap();
            CreateMap <ViajeDetalleViewModel, ViajeDetalleViewModel>().ReverseMap();
            CreateMap <TransportistaViewModel, TransportistaViewModel>().ReverseMap();
            CreateMap <ViajeEncViewModel, ViajeEncViewModel>().ReverseMap();
            CreateMap <ViajeDetViewModel, ViajeDetViewModel>().ReverseMap();
            //CreateMap<PantallaViewModel, tbPantallas>().ReverseMap();
            //CreateMap<RolViewModel, tbRoles>().ReverseMap();
            #endregion




        }
    }
}
