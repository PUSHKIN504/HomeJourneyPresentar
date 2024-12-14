import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Table } from 'primeng/table';
import { GralService } from 'src/app/demo/services/ServiceGral/colaboradorsuc.service';
import { ColaboradorSucursal } from 'src/app/demo/models/modelsplanilla/colaboradorsucursalviewmodel';
import { SucursalViewModel } from 'src/app/demo/models/modelsplanilla/sucursalviewmodel';
import { MensajeViewModel } from 'src/app/demo/models/MessageViewModel';
import { Respuesta } from 'src/app/demo/services/ServiceResult';
import { CookieService } from 'ngx-cookie-service';
import { filter } from 'rxjs/operators';
import { transportistaViewModel } from 'src/app/demo/models/modelsplanilla/Transportistasviewmodel';
import { ViajeEncabezado,ViajeConDetallesViewModel } from 'src/app/demo/models/modelsplanilla/viajesviewmodel';
import { ViajeDetalle } from 'src/app/demo/models/modelsplanilla/viajesviewmodel';
import { er } from '@fullcalendar/core/internal-common';
import { from } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
@Component({
  selector: 'app-presupuesto',
  templateUrl: './Requisito3.component.html',
  styleUrl: './Requisito3.component.scss',
  providers: [ MessageService]
})
export class Requisito3Component implements OnInit {
  ngOnInit(): void {
    this.items = [
    ];
    this.obtenerViajes();
    this.form = this.fb.group({
      sucursal: ['', Validators.required],
      sucu_id: ['', Validators.required],
      trans_id: ['', Validators.required],
      transportista: ['', Validators.required],
      colaboradores: this.fb.array([]),
      viaj_fecha: [null, Validators.required]
    });
    this.getTransportistas();
    this.getSucursales();
    this.id = this.cookieService.get('iduser'); 
        console.log('Nombre del usuario:', this.id);
  }
  submitted: boolean = false;
  Create: boolean = false;
  items: MenuItem[] = [];
  expandedRowKeys: { [key: number]: boolean } = {};
  form: FormGroup;
  totalPago: number = 0;
  id = this.cookieService.get('iduser');
  errores: number = 0;
  sucursales: SucursalViewModel[] = []; 
  transportistasvm: transportistaViewModel[] = []; 
  kilometrosTotales: number = 0;
  sucursalSuggestions: any[] = [];
  transportistasSuggestions: any[] = [];
  transportistas: any[] = [];
  colaboradores: any[] = [];
  titulo: string = "Nuevo";
  colaboradorSeleccionado: { [key: number]: boolean } = {};
  tarifaPorKm: number | null = null;
  errorKm: boolean = false;
  Index: boolean = true;
  colaboradorscuursal: ColaboradorSucursal[] = [];
  transportistaSeleccionado: any = null; 
  viajes:ViajeConDetallesViewModel[] = [];
  expandedRows: number[] = []; 
        constructor(private fb: FormBuilder,private service: GralService,private messageService: MessageService,private cookieService: CookieService,) {
   
  }
 
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  obtenerViajes(): void {
    this.service.obtenerViajes().subscribe((data) => {
      // this.viajes = data.map((viaje) => ({
      //   ...viaje,
        
      //   sucu_nombre: viaje.sucu_nombre || 'Sin nombre'
      // }));
      this.viajes = this.agruparViajesConPasajeros(data);
      console.log('viajes cargadas:', this.viajes);
    });
  }
  crearRegistro() {
    this.Index = false;
    this.Create = true;
  }

  
 
  agruparViajesConPasajeros(data: ViajeConDetallesViewModel[]): any[] {
    return data.reduce((viajes, item) => {
      let viaje = viajes.find(v => v.viaj_id === item.viaj_id);
      if (!viaje) {
        viaje = {
          viaj_id: item.viaj_id,
          sucu_nombre: item.sucu_nombre || 'Desconocido',
          trans_nombre: item.trans_nombre,
          trans_apellido: item.trans_apellido,
          pasajeros: []
        };
        viajes.push(viaje);
      }
      if (item.cola_id) {
        viaje.pasajeros.push({
          cola_nombre: item.cola_nombre || 'Desconocido',
          cola_apelllido: item.cola_apelllido || '',
          cola_email: item.cola_email || '',
          cola_sexo: item.cola_sexo || '',
          distancia_km: item.distancia_km || 0
        });
      }
      return viajes;
    }, []);
  }

  toggleExpandRow(viaj_id: number): void {
    const index = this.expandedRows.indexOf(viaj_id);
    if (index > -1) {
      this.expandedRows.splice(index, 1); 
    } else {
      this.expandedRows.push(viaj_id); 
    }
    console.log('Filas expandidas:', this.expandedRows); 
  }


  getSucursales(): void {
    this.service.obtenerSucursales().subscribe((data) => {
      this.sucursales = data.map((sucursal) => ({
        ...sucursal,
        sucu_nombre: sucursal.sucu_nombre || 'Sin nombre'
      }));
      console.log('Sucursales cargadas:', this.sucursales);
    });
  }
  get colaboradoresArray(): FormArray {
    return this.form.get('colaboradores') as FormArray;
  }

  onColaboradorChange(event: any, colaborador: any): void {
    const formArray: FormArray = this.colaboradoresArray;
    console.log('Colaborador seleccionado:', colaborador);
  
    if (event.checked) {
      formArray.push(
        this.fb.group({
          cola_id: colaborador.cola_id,
          cosu_id: colaborador.cosu_id,
          distancia_km: colaborador.distancia_km,
          total_a_pagar: Number(colaborador.distancia_km) * Number(this.tarifaPorKm),
          colaborador: colaborador.cola_nombre_completo,
          
        })
      );
      this.kilometrosTotales += colaborador.distancia_km;
      this.totalPago += Number(colaborador.distancia_km) * Number(this.tarifaPorKm);
    } else {
      const index = formArray.controls.findIndex(
        (control) => control.value === colaborador.cola_id
      );
      if (index !== -1) {
        formArray.removeAt(index);
      }
  
      this.kilometrosTotales -= colaborador.distancia_km;
      this.totalPago -= Number(colaborador.distancia_km) * Number(this.tarifaPorKm);
    }
  
    console.log('Colaboradores seleccionados:', this.form.value);
    console.log('Kilómetros totales:', this.kilometrosTotales);
    console.log('Pago total:', this.totalPago);
  }

  isColaboradorSeleccionado(colaboradorId: number): boolean {
    return this.colaboradoresArray.value.includes(colaboradorId);
  }
  resetVariables(): void {
    this.kilometrosTotales = 0; 
    this.totalPago = 0;
    this.colaboradoresArray.clear(); 
    console.log('Variables reiniciadas:', {
      kilometrosTotales: this.kilometrosTotales,
      totalPago: this.totalPago,
      colaboradoresArray: this.colaboradoresArray.value,
    });
  }
  onSucursalSelect(event: any): void {
    console.log('Sucursal seleccionada:', event);
    this.form.get('sucu_id')?.setValue(event.value.sucu_id);
    this.form.get('sucursal')?.setValue(event.value.sucu_nombre);
    this.Listado(event.value.sucu_id);
    this.resetVariables();
  } 
  buscarSucursales(event: any): void {
    const query = event.query.toLowerCase();
    this.sucursalSuggestions = this.sucursales.filter((sucursal) =>
      sucursal.sucu_nombre.toLowerCase().includes(query)
    );
    console.log('Sucursales sugeridas:', this.sucursalSuggestions);
  }

  getTransportistas(): void {
    this.service.obtenerTransportistas().subscribe((data) => {
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
    this.transportistaSeleccionado = event.value;
    this.tarifaPorKm = event.value.trans_tarifa_por_km;
    console.log('transportista seleccionada:', event);
    this.form.get('trans_id')?.setValue(event.value.trans_id);
    this.form.get('transportista')?.setValue(event.value.nombre_transp);
  }
 
  Listado(id: number): void {
    this.service.Listar().subscribe(
      (data: any[]) => {
        const colaboradoresFiltrados = data.filter(
          (colaborador: any) => colaborador.sucu_id === id
        );
  
        this.colaboradorscuursal = colaboradoresFiltrados.map((colaborador: any) => ({
          ...colaborador,
          distancia_km: parseFloat(colaborador.distancia_km),
        }));
  
        console.log('Colaboradores filtrados:', this.colaboradorscuursal);
      },
      (error) => {
        console.error('Error al listar colaboradores:', error);
      }
    );
  }
  
  calcularTotalKm() {
    
    this.errorKm = this.kilometrosTotales > 100;
  }

  // guardar() {
  //   this.calcularTotalKm();
  //   this.submitted = true;
  //   if (this.errorKm || this.form.invalid) {
  //     console.error('Error al guardar: revisa las validaciones.');
  //     return;
  //   }

  //   console.log('Guardado exitosamente');
  // }



  // guardar(): void {
  //   if (this.form.valid) {
  //     if (this.kilometrosTotales>100) {
  //       this.messageService.add({
  //         severity: 'error',
  //         styleClass: 'iziToast-custom',
  //         summary: 'Error',
  //         detail: 'El total de kilometros es mayor a 100',
  //         life: 3000
  //       });
  //       this.colaboradorscuursal = [];
  //       console.log('soy papo.');
  //       return;
  //     }

  //     const encabezadoViaje: any = {
  //       sucu_id: this.form.value.sucu_id,
  //       user_user_id: this.id,
  //       viaj_fecha: this.form.value.viaj_fecha ? this.form.value.viaj_fecha.toISOString() : null,
  //       // viaj_fecha: new Date().toISOString(), 
  //       trans_id: this.form.value.trans_id
  //     };
  
  //     this.service.insertarViajeEnc(encabezadoViaje).subscribe(
  //       (responseEncabezado: any) => {
  //         if (responseEncabezado.data && responseEncabezado.data.viaj_id) {
  //           const nuevoViajeId = responseEncabezado.data.viaj_id;
  //             console.log('Nuevo Viaje ID:', nuevoViajeId);
  //           console.log('form:', this.form.value);

  //           const detalles = this.form.value.colaboradores.map((colaborador) => ({
  //             viaj_id: nuevoViajeId,
  //             distancia_km: colaborador.distancia_km,
  //             total_a_pagar: colaborador.total_a_pagar,
  //             cosu_id: colaborador.cosu_id,
  //             // fecha_viaje: new Date().toISOString(),
  //             fecha_viaje: this.form.value.viaj_fecha.toISOString(),
  //             nombre: colaborador.colaborador
  //           }));
  //           console.log('Nuevo Viaje ID:', detalles);
  //           console.log('form:', this.form.value);
            
  
  //           detalles.forEach((detalle) => {
  //             this.service.insertarViajeDet(detalle).subscribe(
  //               (responseDetalle: any) => {
  //                 if (responseDetalle.data.codeStatus === 0) {
  //                   // Mostrar mensaje para el colaborador ya asignado
  //                   this.messageService.add({
  //                     severity: 'error',
  //                     styleClass: 'iziToast-custom',
  //                     summary: 'Error',
  //                     detail: `El colaborador ${detalle.nombre} ya se encuentra asignado.`,
  //                     life: 3000
  //                   });
  //                 }
                 
  //               },
  //               (error) => {
  //                 this.messageService.add({
  //                   severity: 'error',
  //                   styleClass: 'iziToast-custom',
  //                   summary: 'Error',
  //                   detail: 'El colaborador ' + detalle.nombre + ' ya se encuentra asignado.',
  //                   life: 3000
  //                 });
  //               }
                
  //             );
             
  //           });
  
            
  //         }
  //         if (this.errores > 0) {
  //           this.messageService.add({
              
  //             severity: 'error',
  //             styleClass: 'iziToast-custom',
  //             summary: 'Error',
  //             detail: 'El colaborador ya se encuentra asignado.',
  //             life: 3000
  //           });
  //         }

  //         this.messageService.add({
  //           severity: 'success',
  //           styleClass: 'iziToast-custom',
  //           summary: 'Éxito',
  //           detail: 'Insertado con Éxito.',
  //           life: 3000
  //         });
  //       },
  //       (error) => {

  //         console.error(error);
  //         this.messageService.add({
  //           severity: 'error',
  //           styleClass: 'iziToast-custom',
  //           summary: 'Error',
  //           detail: 'Error de comunicación con el servidor al insertar el encabezado.',
  //           life: 3000
  //         });
  //       }
  //     );
  //   } else {
  //     this.submitted = true;
  //   }
   
  // }
  
  
  guardar(): void {
    if (this.form.valid) {
      if (this.kilometrosTotales > 100) {
        this.messageService.add({
          severity: 'error',
          styleClass: 'iziToast-custom',
          summary: 'Error',
          detail: 'El total de kilometros es mayor a 100',
          life: 3000
        });
        this.colaboradorscuursal = [];
        return;
      }
  
      const encabezadoViaje: any = {
        sucu_id: this.form.value.sucu_id,
        user_user_id: this.id,
        viaj_fecha: this.form.value.viaj_fecha ? this.form.value.viaj_fecha.toISOString() : null,
        trans_id: this.form.value.trans_id
      };
  
      this.service.insertarViajeEnc(encabezadoViaje).subscribe(
        (responseEncabezado: any) => {
          if (responseEncabezado.data && responseEncabezado.data.viaj_id) {
            const nuevoViajeId = responseEncabezado.data.viaj_id;
  
            const detalles = this.form.value.colaboradores.map((colaborador) => ({
              viaj_id: nuevoViajeId,
              distancia_km: colaborador.distancia_km,
              total_a_pagar: colaborador.total_a_pagar,
              cosu_id: colaborador.cosu_id,
              fecha_viaje: this.form.value.viaj_fecha.toISOString(),
              nombre: colaborador.colaborador
            }));
  
            from(detalles)
              .pipe(
                concatMap((detalle) => 
                  this.service.insertarViajeDet(detalle).pipe(delay(100)) 
                )
              )
              .subscribe(
                (responseDetalle: any) => {
                  if (responseDetalle.data && responseDetalle.data.codeStatus === 0) {
                    this.messageService.add({
                      severity: 'error',
                      styleClass: 'iziToast-custom',
                      summary: 'Error',
                      detail: `El colaborador ${responseDetalle.data.nombre} ya se encuentra asignado.`,
                      life: 3000
                    });
                  }
                },
                (error) => {
                  this.messageService.add({
                    severity: 'error',
                    styleClass: 'iziToast-custom',
                    summary: 'Error',
                    detail: 'Ocurrió un error al asignar al colaborador.',
                    life: 3000
                  });
                },
                () => {
                  this.messageService.add({
                    severity: 'success',
                    styleClass: 'iziToast-custom',
                    summary: 'Éxito',
                    detail: 'Todos los detalles del viaje han sido procesados.',
                    life: 3000
                  });
                }
              );
          }
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            styleClass: 'iziToast-custom',
            summary: 'Error',
            detail: 'Error al guardar el encabezado del viaje.',
            life: 3000
          });
        }
      );
    } else {
      this.submitted = true;
    }
  }
  
  cancelar() {
    this.form.reset();
    this.ngOnInit();
    this.colaboradorSeleccionado = {};
    this.colaboradorscuursal = [];
    this.Index = true;
    this.Create = false;
    this.errorKm = false;
  }
}
