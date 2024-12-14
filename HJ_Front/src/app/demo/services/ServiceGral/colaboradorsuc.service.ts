import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import {ColaboradorSucursal } from '../../models/modelsplanilla/colaboradorsucursalviewmodel';
import {SucursalViewModel } from '../../models/modelsplanilla/sucursalviewmodel';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { transportistaViewModel } from '../../models/modelsplanilla/Transportistasviewmodel';
import { ViajeEncabezado, ViajeConDetallesViewModel } from '../../models/modelsplanilla/viajesviewmodel';
import { ViajeDetalle } from '../../models/modelsplanilla/viajesviewmodel';

@Injectable({
  providedIn: 'root'
})
export class GralService {

  constructor(private http: HttpClient) { }
  private apiUrl: string = environment.apiUrl;
  private apiKey: string = environment.apiKey;
  private colaboradorsucursalEncabezado = `${this.apiUrl}/api/Colaborador`;


  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'XApiKey': `${this.apiKey}`
      })
    };
  }

  Listar (){
    return this.http.get<ColaboradorSucursal[]>(`${this.colaboradorsucursalEncabezado}/ListarColaSuc`,this.getHttpOptions());
  }

  grafico (){
    return this.http.get<any>(`${this.colaboradorsucursalEncabezado}/grafico`,this.getHttpOptions());
  }
  obtenerColaboradores (){
    return this.http.get<ColaboradorSucursal[]>(`${this.colaboradorsucursalEncabezado}/ListarColaboradores`,this.getHttpOptions());
  }
  obtenerViajes (){
    return this.http.get<ViajeConDetallesViewModel[]>(`${this.colaboradorsucursalEncabezado}/ListarViajes`,this.getHttpOptions());
  }
  obtenerSucursales (){
    return this.http.get<SucursalViewModel[]>(`${this.colaboradorsucursalEncabezado}/ListarSuc`,this.getHttpOptions());
  }
  obtenerTransportistas (){
    return this.http.get<transportistaViewModel[]>(`${this.colaboradorsucursalEncabezado}/ListarTransportistas`,this.getHttpOptions());
  }
  insertarViajeEnc(encabezado: ViajeEncabezado): Observable<{ NuevoViajeID: number; codestatus: number }> {
    return this.http.post<{ NuevoViajeID: number; codestatus: number }>(`${this.colaboradorsucursalEncabezado}/InsertarViajeEnc`, encabezado, this.getHttpOptions());
  }
  insertarViajeDet( modelo:any): Observable<any> {
    return this.http.post(`${this.colaboradorsucursalEncabezado}/InsertarViajeDet`,modelo,this.getHttpOptions());
  }


  Insertar(modelo:any):Observable<any>{
    return this.http.post<any>(`${this.colaboradorsucursalEncabezado}/InsertarColXSuc`,modelo, this.getHttpOptions());
  }

  Actualizar(modelo:any):Observable<any>{
    return this.http.put<ColaboradorSucursal>(`${this.colaboradorsucursalEncabezado}/ActualizarColXSuc`,modelo, this.getHttpOptions());
  }
  getReporte(transportistaId: number, fechaInicio: string, fechaFin: string): Observable<any> {
    return this.http.get<any[]>(`${this.colaboradorsucursalEncabezado}/ObtenerReporteViajes?transportistaId=${transportistaId}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`, this.getHttpOptions());
  }
  Eliminar(id:number):Observable<any>{
    return this.http.delete<any>(`${this.colaboradorsucursalEncabezado}/DeleteColXSuc/${id}`, this.getHttpOptions());
  }
}
