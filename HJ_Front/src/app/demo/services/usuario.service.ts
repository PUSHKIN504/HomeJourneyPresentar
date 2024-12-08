import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioViewModel } from '../models/usuariosviewmodel';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Respuesta } from './ServiceResult';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioActual: UsuarioViewModel[] = [];
  private pantallasPermitidas: { pant_Descripcion: string }[] = []; // Manejo de pantallas

  constructor(private http: HttpClient) { 
      
  }

  private apiUrl: string = environment.apiUrl;
  private apiKey: string = environment.apiKey;
  private EmpleadoEncabezado = `${this.apiUrl}/api/Empleado`;
  private UsuarioEncabezado = `${this.apiUrl}/api/Usuario`;

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'XApiKey': `${this.apiKey}`
      })
    };
  }

 

  IniciarSesionWeb(usuario: string, clave: string):Observable<any> {
    return this.http.get<{ data: UsuarioViewModel[] }>(`${this.UsuarioEncabezado}/InicioSesion/${usuario}/${clave}`, this.getHttpOptions())
        
        
}
  

 

  setUsuarioActual(usuario: UsuarioViewModel[]) {
    this.usuarioActual = usuario;
  }

  getUsuarioActual(): UsuarioViewModel[] {
    return this.usuarioActual;
  }

  




}
