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

@Component({
  selector: 'app-presupuesto',
  templateUrl: './Requisito1.component.html',
  styleUrl: './Requisito1.component.scss',
  providers: [ MessageService]
})
export class Requisito1Component implements OnInit {
  colaboradorscuursal: ColaboradorSucursal[] = [];
  colaboradores: ColaboradorSucursal[] = [];
  colab: ColaboradorSucursal[] = [];
  noResultsFound: boolean = false;
  selected: boolean = false;
  sucursalSuggestions: SucursalViewModel[] = [];
  sucursales: SucursalViewModel[] = []; 
  selectedcolabsuc: ColaboradorSucursal;


  items: MenuItem[] = [];
  Index: boolean = true;
  Editt: boolean = false;
  Create: boolean = false;
  Detail: boolean = false;
  Delete: boolean = false;
  form: FormGroup;
  usua_Id: number;
  submitted: boolean = false;
  identity: string  = "Crear";
  id: number = 0;
  textoIngresado: string = '';
  filaCount: number = 1;
  titulo: string = "Nuevo Colaborador por Sucursal";
  loading: boolean = false;
  // Detalles
  Datos = [{}];
  detalle_cavi_Id: string = "";
  detalle_caviDescripcion: string = "";
  detalle_usuaCreacion: string = "";
  detalle_usuaModificacion: string = "";
  detalle_FechausuaCreacion: string = "";
  detalle_FechausuaModificacion: string = "";
  
  constructor(
    private messageService: MessageService,
    private service: GralService,
    private router: Router,
    private fb: FormBuilder,
    public cookieService: CookieService,
  ) {
    
  }

  ngOnInit(): void {
    
    // this.usua_Id = parseInt(this.cookieService.get('usua_Id'));
    this.Index = true;
    this.Detail = false;
    this.Create = false;
    this.submitted = false; 
    this.getSucursales();
  
    this.Listado();
    this.getcolaboradores();
    this.form = this.fb.group({
      cola_id: ['', Validators.required], 
      sucu_id: ['', Validators.required], 
      sucursal: ['', Validators.required],
      empleado: ['', Validators.required],
      distancia_km: ['', [Validators.required, Validators.min(1), Validators.max(50),Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    });
    this.items = [
      { label: 'Editar', icon: 'pi pi-user-edit', command: (event) => this.Editarcosu() },
      { label: 'Eliminar', icon: 'pi pi-trash', command: (event) => this.EliminarcolSuc() },
    ];
  }
  onSucursalSelect(event: any): void {
    console.log('Sucursal seleccionada:', event);
    this.form.get('sucu_id')?.setValue(event.value.sucu_id);
    this.form.get('sucursal')?.setValue(event.value.sucu_nombre);
  }
  buscarSucursales(event: any): void {
    const query = event.query.toLowerCase();
    this.sucursalSuggestions = this.sucursales.filter((sucursal) =>
      sucursal.sucu_nombre.toLowerCase().includes(query)
    );
    console.log('Sucursales sugeridas:', this.sucursalSuggestions);
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
  Listado() {
    this.loading = true;
    this.service.Listar().subscribe(
      (data: any[]) => {
        this.colaboradorscuursal = data.map((colaborador: any) => ({
          ...colaborador,
          cola_activo: colaborador.cola_activo === 'true' || colaborador.cola_activo === true, 
          distancia_km: parseFloat(colaborador.distancia_km), 
        }));
        this.loading = false;
      },
      (error) => {
        console.error('Error al cargar los datos:', error);
        this.loading = false;
      }
    );
  }

  Guardar(): void {
    if (this.form.valid) {
      const colaboradorSucursal: any = {
        cosu_id: this.id,  
        cola_id: this.form.value.cola_id,
        sucu_id: this.form.value.sucu_id,
        distancia_km: this.form.value.distancia_km
      };
  
      if (this.identity !== 'editar') {
     
        this.service.Insertar(colaboradorSucursal).subscribe(
          (respuesta: Respuesta) => {
            if (respuesta.success) {
              this.messageService.add({
                severity: 'success',
                styleClass: 'iziToast-custom',
                summary: 'Éxito',
                detail: 'Insertado con Éxito.',
                life: 3000
              });
              this.Listado();  
              this.CerrarCosu(); 
              this.submitted = false; 
            } else {
              this.messageService.add({
                severity: 'error',
                styleClass: 'iziToast-custom',
                summary: 'Error',
                detail: 'El registro ya existe.',
                life: 3000
              });
            }
          }
        );
      } else {
        
        this.service.Actualizar(colaboradorSucursal).subscribe(
          (respuesta: Respuesta) => {
            if (respuesta.success) {
              this.messageService.add({
                severity: 'success',
                styleClass: 'iziToast-custom',
                summary: 'Éxito',
                detail: 'Actualizado con Éxito.',
                life: 3000
              });
              this.Listado(); 
              this.CerrarCosu(); 
              this.submitted = false;
            } else {
              this.messageService.add({
                severity: 'error',
                styleClass: 'iziToast-custom',
                summary: 'Error',
                detail: 'El registro ya existe.',
                life: 3000
              });
            }
          }
        );
      }
    } else {
      this.submitted = true; 
    }
  }
  
  getcolaboradores(): void {
    
    this.service.obtenerColaboradores().subscribe((data) => {
      this.colaboradores = data;
      console.log(data);
    });
  }
  filterEmpleado(event: any): void {
    const query = event.query.toLowerCase();
    this.colab = this.colaboradores.filter((empleado) =>
      empleado.cola_nombre.toLowerCase().includes(query)
    );
    this.noResultsFound = this.colab.length === 0;
  }
  onEmpSelect(event: any): void {
    if (event) {
      this.form.get('cola_id')?.setValue(event.value.cola_id);
      this.form.get('empleado')?.setValue(event.value.cola_nombre);
      console.log('evento',event);
    }
    console.log('form',this.form.value);
  }


  // Método para regresar a la vista anterior
  regresar() {
    this.CerrarCosu();
  }



  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  selectRelacion(colaboradorsuc: any) {
    this.selectedcolabsuc = colaboradorsuc;
  }

  CrearRelacion() {
    this.Detail = false;
    this.Index = false;
    this.Create = true;
    this.form.reset();
    this.identity = "crear";
  }

  CerrarCosu() {
    this.Index = true;
    this.Detail = false;
    this.Create = false;
    this.submitted = false;
  }

  handleClick() {
    if (this.identity === 'crear') {
      this.Guardar();
      console.log("primero  ");
    } else if (this.identity === 'editar') {
      this.submitted = true;
      
      this.Editt = true;
    }
  }

  confirmEdit() {
    
    this.Guardar();
    this.Editt = false;
  }

  Editarcosu() {
    this.Detail = false;
    this.Index = false;
    this.Create = true;
    this.identity = "editar";
    this.titulo = "Editar";
    this.form.patchValue({
      empleado: this.selectedcolabsuc.cola_nombre_completo,
      cola_id: this.selectedcolabsuc.cola_id,
      sucursal: this.selectedcolabsuc.sucu_nombre,
      sucu_id: this.selectedcolabsuc.sucu_id,
      distancia_km: this.selectedcolabsuc.distancia_km,
    });
    this.id = this.selectedcolabsuc.cosu_id;
    console.log('id',this.id, 'seleccioncolab',this.selectedcolabsuc);
  }

  
  EliminarcolSuc() {
    this.id = this.selectedcolabsuc.cosu_id;
    this.Delete = true;
  }



  Eliminar() {
    this.Delete = false;

    this.service.Eliminar(this.id).subscribe(
      (response: any) => {
        const { code, data, message } = response;

        let severity = 'error';
        let summary = 'Error';
        let detail = data?.messageStatus || message;

        if (code === 200) {
          severity = data.codeStatus > 0 ? 'success' : 'warn';
          summary = data.codeStatus > 0 ? 'Éxito' : 'Advertencia';
        } else if (code === 500) {
          severity = 'error';
          
          summary = 'Error Interno';
        }

        this.messageService.add({
          severity,
          summary,
          detail,
          styleClass: 'iziToast-custom',
          life: 3000
        });

        if (data.codeStatus > 0) {
          this.Listado();
        }
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error Externo',
          styleClass: 'iziToast-custom',
          detail: error.message || error,
          life: 3000
        });
      }
    );
  }
}
