using Dapper;
using Microsoft.Data.SqlClient;
using SIGESPROC.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SIGESPROC.DataAccess;
using System.Data;
using SIGESPROC.Common.Models;

namespace SIGESPROC.DataAccess.Repositories
{
    public class ColaboradorRepository
    {
        public IEnumerable<tbcolaboradores> List()
        {
            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {
                return db.Query<tbcolaboradores>("SP_Colaboradores_Listar", commandType: CommandType.StoredProcedure).ToList();
            }
        }

        public IEnumerable<ColaboradorSucursalViewModel> ListColaSuc()
        {
            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {
                return db.Query<ColaboradorSucursalViewModel>("[SP_ObtenerColaboradoresSucursales]", commandType: CommandType.StoredProcedure).ToList();
            }
        }
        public IEnumerable<tbsucursales> ListSucursales()
        {
            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {
                return db.Query<tbsucursales>("[SP_Sucursales_Listar]", commandType: CommandType.StoredProcedure).ToList();
            }
        }
        public RequestStatus Insert(tbcolaboradores item)
        {
            RequestStatus result = new RequestStatus(); 

            
            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {
                var parameter = new DynamicParameters();
           
                parameter.Add("@cola_nombre", item.cola_nombre);
                parameter.Add("@cola_apellido", item.cola_apelllido);
                parameter.Add("@cola_sexo", item.cola_sexo);
                parameter.Add("@cola_email", item.cola_email);

                var answer = db.QueryFirst<int>("[dbo].[SP_Colaboradores_Insertar]", parameter, commandType: CommandType.StoredProcedure);

                result.CodeStatus = answer; 
                return result; 
            }
        }
        public RequestStatus InsertSucxcol(tbcolaboradores_por_sucursales item)
        {
            RequestStatus result = new RequestStatus();


            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {
                var parameter = new DynamicParameters();

                parameter.Add("@cola_id", item.cola_id);
                parameter.Add("@sucu_id", item.sucu_id);
                parameter.Add("@distancia_km", item.distancia_km);

                var answer = db.QueryFirst<int>("[dbo].[SP_InsertarColaboradorSucursal]", parameter, commandType: CommandType.StoredProcedure);

                result.CodeStatus = answer;
                return result;
            }
        }
        public ViajeEncViewModel InsertViajeEnc(ViajeEncViewModel item)
        {


            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {
                var parameter = new DynamicParameters();

                parameter.Add("@sucu_id", item.sucu_id);
                parameter.Add("@user_user_id", item.user_user_id);
                parameter.Add("@trans_id", item.trans_id);
                parameter.Add("@viaj_fecha", item.viaj_fecha);

                var answer = db.QueryFirst<ViajeEncViewModel>("[dbo].[SP_EncabezadoViaje_Insertar]", parameter, commandType: CommandType.StoredProcedure);

                
                return answer;
            }
        }

        public RequestStatus InsertViajeDet(ViajeDetViewModel item)
        {
            RequestStatus result = new RequestStatus();


            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {
                var parameter = new DynamicParameters();

                parameter.Add("@viaj_id", item.viaj_id);
                parameter.Add("@fecha_viaje", item.fecha_viaje);
                parameter.Add("@distancia_km", item.distancia_km);
                parameter.Add("@total_a_pagar", item.total_a_pagar);
                parameter.Add("@cosu_id", item.cosu_id);

                var answer = db.QueryFirst<int>("[dbo].[SP_DetalleViaje_Insertar]", parameter, commandType: CommandType.StoredProcedure);

                result.CodeStatus = answer;
                return result;
            }
        }
        public RequestStatus UpdateSucXCol(tbcolaboradores_por_sucursales item)
        {
            RequestStatus result = new RequestStatus();


            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {
                var parameter = new DynamicParameters();
                parameter.Add("@cosu_id", item.cosu_id);
                parameter.Add("@cola_id", item.cola_id);
                parameter.Add("@sucu_id", item.sucu_id);
                parameter.Add("@distancia_km", item.distancia_km);

                var answer = db.QueryFirst<int>("[dbo].[SP_ActualizarColaboradorSucursal]", parameter, commandType: CommandType.StoredProcedure);

                result.CodeStatus = answer;
                return result;
            }
        }
        public RequestStatus DeleteSucXCol( int id)
        {
            RequestStatus result = new RequestStatus();


            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {
                var parameter = new DynamicParameters();
                parameter.Add("@cosu_id", id);

                var answer = db.QueryFirst<int>("[dbo].[SP_EliminarColaboradorSucursal]", parameter, commandType: CommandType.StoredProcedure);

                result.CodeStatus = answer;
                return result;
            }
        }

        public IEnumerable<ViajeDetalleViewModel> GetReporteViajes(int transId, DateTime fechaInicio, DateTime fechaFin)
        {
            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {
                
                    var parameters = new DynamicParameters();
                    parameters.Add("@trans_id", transId, DbType.Int32);
                    parameters.Add("@fecha_inicio", fechaInicio, DbType.Date);
                    parameters.Add("@fecha_fin", fechaFin, DbType.Date);

                return db.Query<ViajeDetalleViewModel>(
                        "[dbo].[SP_ReporteViajesTransportista]",
                        parameters,
                        commandType: CommandType.StoredProcedure
                    ).ToList();


                     
            }
        }

        public IEnumerable<TransportistaViewModel> ListarTransportistas()
        {
            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {

              
                return db.Query<TransportistaViewModel>(
                        "[dbo].[SP_Transportistas_Listar]",
                        commandType: CommandType.StoredProcedure
                    ).ToList();



            }
        }
        public IEnumerable<tbsucursales> graficoSucursales()
        {
            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {


                return db.Query<tbsucursales>(
                        "[dbo].[SP_GraficoViajesPorSucursal]",
                        commandType: CommandType.StoredProcedure
                    ).ToList();



            }
        }
        public IEnumerable<ViajesViewModel> viajeslist()
        {
            using (var db = new SqlConnection(SIGESPROC.ConnectionString))
            {


                return db.Query<ViajesViewModel>(
                        "[dbo].[SP_Viajes_Listar]",
                        commandType: CommandType.StoredProcedure
                    ).ToList();



            }
        }
    }
}

