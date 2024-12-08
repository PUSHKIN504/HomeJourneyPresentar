import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Table } from 'primeng/table';
import { GralService } from 'src/app/demo/services/ServiceGral/colaboradorsuc.service';
import { ColaboradorSucursal } from 'src/app/demo/models/modelsplanilla/colaboradorsucursalviewmodel';
import { SucursalViewModel } from 'src/app/demo/models/modelsplanilla/sucursalviewmodel';
import { MensajeViewModel } from 'src/app/demo/models/MessageViewModel';
import { Respuesta } from 'src/app/demo/services/ServiceResult';
import { CookieService } from 'ngx-cookie-service';
import { filter } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { transportistaViewModel } from 'src/app/demo/models/modelsplanilla/Transportistasviewmodel';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './Requisito2.component.html',
  styleUrl: './Requisito2.component.scss',
  providers: [ MessageService]
})
export class Requisito2Component implements OnInit {
  form: FormGroup;
  loading: boolean = false; 
  submitted: boolean = false; 
  Index: boolean = true; 
  encabezado: any = null; 
  pasajeros: any[] = []; 
  totalAPagar: number = 0;
  Create: boolean = false;
  transportistasvm: transportistaViewModel[] = []; 
  transportistasSuggestions: any[] = [];

  constructor( private fb: FormBuilder,
    private reporteViajesService: GralService,
    private messageService: MessageService,
    private datePipe: DatePipe) {
   
  }

  ngOnInit(): void 
  {
    this.form = this.fb.group({
      transportistaId: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      transportista: ['', Validators.required]
    });

    this.getTransportistas();
  }

  getTransportistas(): void {
    this.reporteViajesService.obtenerTransportistas().subscribe((data) => {
      console.log(data);
      this.transportistasvm = data.map((transp) => ({
        ...transp,
        nombre_transp: transp.nombre_transp 
      }));
      console.log('transportistas cargadas:', this.transportistasvm);
    });
  }
  buscarTransportistas(event: any): void {
    const query = event.query.toLowerCase();
    this.transportistasSuggestions = this.transportistasvm.filter((sucursal) =>
      sucursal.nombre_transp.toLowerCase().includes(query)
    );
    console.log('transportistas sugeridas:', this.transportistasSuggestions);
  }
  onTransportistaSelect(event: any) {
    console.log('transportista seleccionada:', event);
    this.form.get('transportistaId')?.setValue(event.value.trans_id);
    this.form.get('transportista')?.setValue(event.value.nombre_transp);
  }
  imprimirReporte(): void {
    // Verifica si hay datos cargados para generar el reporte
    if (!this.encabezado || this.pasajeros.length === 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'Sin Datos',
        styleClass: 'iziToast-custom',
        detail: 'No hay datos para poder Generar el reporte.',

        life: 3000
      });
      return;
    }
  
    // Abre una nueva ventana para la impresión
    const WindowPrt = window.open('', '', 'width=900,height=650');
  
    if (WindowPrt) {
      WindowPrt.document.write(`
        <html>
          <head>
            <title>Reporte de Viajes</title>
            <style>
              /* Estilos para la impresión */
              body {
                font-family: Arial, sans-serif;
                margin: 20px;
              }
  
              .encabezado-reporte {
                text-align: center;
                margin-bottom: 20px;
              }
  
              .encabezado-reporte h1 {
                font-size: 1.8em;
                margin: 0;
              }
  
              .informacion-encabezado {
                margin: 20px 0;
                display: flex;
                justify-content: space-between;
                border: 1px solid #ccc;
                padding: 10px;
                border-radius: 5px;
                background-color: #f9f9f9;
              }
  
              .informacion-encabezado div {
                flex: 1;
                padding: 5px;
              }
  
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
              }
  
              table th,
              table td {
                border: 1px solid #ccc;
                padding: 10px;
                text-align: left;
              }
  
              table th {
                background-color: #f2f2f2;
                font-weight: bold;
              }
  
              .total-pago {
                text-align: right;
                margin-top: 20px;
                font-size: 1.2em;
                font-weight: bold;
              }
            </style>
          </head>
          <body>
            <!-- Encabezado del Reporte -->
            <div class="encabezado-reporte">
              <h1>Reporte de Viajes</h1>
            </div>
  
            <!-- Información del Transportista -->
            <div class="informacion-encabezado">
              <div>
                <p><strong>Transportista:</strong> ${this.encabezado.transportista}</p>
                <p><strong>Sucursal:</strong> ${this.encabezado.sucursal}</p>
              </div>
              <div>
                <p><strong>Tarifa por Km:</strong> ${this.encabezado.tarifaPorKm}</p>
                <p><strong>Fecha:</strong> ${this.encabezado.fecha}</p>
              </div>
            </div>
  
            <!-- Tabla de Pasajeros -->
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Sexo</th>
                  <th>Total Pago Individual</th>
                </tr>
              </thead>
              <tbody>
                ${this.pasajeros
                  .map(
                    (pasajero) => `
                  <tr>
                    <td>${pasajero.nombre}</td>
                    <td>${pasajero.sexo}</td>
                    <td>${pasajero.totalPagoIndividual}</td>
                  </tr>
                `
                  )
                  .join('')}
              </tbody>
            </table>
  
            <!-- Total a Pagar -->
            <div class="total-pago">
              <p>Total a Pagar: ${this.totalAPagar}</p>
            </div>
          </body>
        </html>
      `);
  
      // Finaliza el proceso de impresión
      WindowPrt.document.close();
      WindowPrt.focus();
      WindowPrt.print();
      WindowPrt.close();
    }
  }
  
  
  generarReporte(): void {
    this.submitted = true;
  
    if (this.form.valid) {
      this.loading = true;
      const { transportistaId, fechaInicio, fechaFin } = this.form.value;

      // Convertir las fechas al formato "yyyy-MM-dd"
      const fechaInicioFormateada = this.datePipe.transform(fechaInicio, 'yyyy-MM-dd');
      const fechaFinFormateada = this.datePipe.transform(fechaFin, 'yyyy-MM-dd');
  
      this.reporteViajesService.getReporte(transportistaId, fechaInicioFormateada, fechaFinFormateada).subscribe(
        (response) => {
          if (response.success) {
            // Procesar datos del reporte
            this.encabezado = {
              transportista: response.data[0]?.transportista,
              sucursal: response.data[0]?.sucursal,
              tarifaPorKm: response.data[0]?.trans_tarifa_por_km,
              fecha: response.data[0]?.viaj_fecha,
            };
  
            this.pasajeros = response.data.map((item: any) => ({
              nombre: item.c_nombre,
              sexo: item.cola_sexo,
              totalPagoIndividual: item.total_pago_individual,
              direc: item.cola_direccion

            }));
            console.log(this.pasajeros);
  
            this.totalAPagar = response.data.reduce((sum: number, item: any) => sum + item.total_pago_individual, 0);
  
            this.messageService.add({
              severity: 'success',
              summary: 'Reporte Generado',
              detail: 'El reporte fue generado exitosamente.',
              life: 3000
            });
          } else {
            this.messageService.add({
              severity: 'warn',
              summary: 'Sin Datos',
              detail: response.message || 'No se encontraron datos para los filtros seleccionados.',
              life: 3000
            });
          }
        },
        (error) => {
          console.error('Error al generar el reporte:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Ocurrió un error al intentar generar el reporte.',
            life: 3000
          });
        }
      ).add(() => {
        this.loading = false; // Finaliza el indicador de carga
      });
    }
  }
  
}
