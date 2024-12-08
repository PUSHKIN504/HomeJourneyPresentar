import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AppSidebarComponent } from './app.sidebar.component';

import { CookieService } from 'ngx-cookie-service';
import { MenuItem, MessageService, SelectItem } from 'primeng/api';
import { SwPush } from '@angular/service-worker';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuario } from 'src/app/demo/models/modelsplanilla/usuarioviewmodel';
import { UsuarioService } from 'src/app/demo/services/servicesacceso/usuario.service';
import { CommonModule } from "@angular/common"; //no
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { InputGroupModule } from "primeng/inputgroup";
import { InputTextModule } from "primeng/inputtext";
import { MultiSelectModule } from "primeng/multiselect";
import { RippleModule } from "primeng/ripple";
import { SplitButtonModule } from "primeng/splitbutton";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";
import { CheckboxModule } from 'primeng/checkbox';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  providers: [MessageService]

})

export class AppTopbarComponent {

  @ViewChild('menubutton') menuButton!: ElementRef;
  @ViewChild('searchinput') searchInput!: ElementRef;
  @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;
  searchActive: boolean = false;
  valor: number = 0;
    usuario: number = parseInt(this.cookieService.get('usua_Id'));
  campana: boolean = true;
  visible: boolean = false;
  Usuario: usuario[] = [];
  items: MenuItem[] = [];
  Index: boolean = true;
  Create: boolean = false;
  Detail: boolean = false;
  Delete: boolean = false;
  form: FormGroup;
  submitted: boolean = false;
  identity: string = "Crear";
  selectedUsuario: usuario;
  id: number = parseInt(this.cookieService.get('usua_Id'));
  Correo: boolean = true;
  titulo: string = "Nuevo Correo";
  contra: boolean = false;
  editarUsuarioDialog: boolean = false;
  filteredRoles: any[] = [];
  selectedRol: string = "";
  Datos = [{}];
  detalle_Codigo: string = "";
  detalle_Usuario: string = "";
  detalle_Administrador: string = "";
  detalle_Rol: string = "";
  detalle_Estado: string = "";
  detalle_Empleado: string = "";
  detalle_usuaCreacion: string = "";
  detalle_usuaModificacion: string = "";
  detalle_FechausuaCreacion: string = "";
  detalle_FechausuaModificacion: string = "";
  selectedProduct: any;
  textoDialogActivarDesactivar: string = "";
  Admin: boolean = true;
  modalCorreo: boolean = false;
  modalContra: boolean = false;
  confirm: boolean = false;

  private actionItemsCache = new Map();





  constructor(
    public layoutService: LayoutService,
    public el: ElementRef,
    public cookieService: CookieService,
    private messageService: MessageService,
    private swPush: SwPush,
    // private notificationService: NotificationPushService,
    private usuarioservice: UsuarioService,
    private router: Router,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,

    //Inyectamos el servicio de los empleados
  ) {
    this.form = this.fb.group({
      empl_CorreoElectronico: ['', Validators.required],
      usua_Clave: [''], // Agregué el campo de la clave
    });
  }



  ngOnInit(): void {
    
    
    this.Correo = false;

    const valorGuardado = this.cookieService.get('notificacionesNoLeidas');
    if (valorGuardado) {
        this.valor = parseInt(valorGuardado, 10);
        this.campana = this.valor > 0;
    }
  }


  cerrarSesion(): void {
    // Eliminar todas las cookies
    this.cookieService.deleteAll('/'); // Especifica el path raíz para asegurar que todas las cookies sean eliminadas

    // Redirigir a la página de login
    window.location.href = 'http://localhost:4200/#/auth/login';
  }

  sanitizarUrl(base64: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(base64);

}




  CloseDialog() {
    this.Correo = false;
    this.modalContra = false;
    this.modalCorreo = false;
    this.submitted = false;
    this.form.reset();
  }




  onMenuButtonClick() {
    this.layoutService.onMenuToggle();
  }

   activateSearch() {
    this.searchActive = true;
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 100);
  }

  deactivateSearch() {
    this.searchActive = false;
  }


  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }

  onSidebarButtonClick() {
    this.layoutService.showSidebar();
  }

  

  validarCorreo() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(this.form.value.agen_Correo);
}

  unsubscribe() {
    if (this.swPush.isEnabled && Notification.permission == 'granted')
      this.swPush.unsubscribe();
  }

  getToken() {
    if (this.swPush.isEnabled && Notification.permission == 'granted')
      this.swPush.subscription.subscribe((subscription) => {
      });
  }


  private onEventNotifications() {
    if (this.swPush.isEnabled && Notification.permission == 'granted') {

      this.swPush.notificationClicks.subscribe((data) => {
        this.messageService.add({ key: 'confirm', sticky: false, severity: '', summary: 'Tienes una nueva notificacion' });
      })

      this.swPush.messages.subscribe((message: any) => {
      });
    }
  }
  //#endregion



  showConfirm() {
    if (!this.visible) {
      this.visible = true;
    }
  }

  onConfirm() {
    this.messageService.clear('confirm');
    this.visible = false;
  }

  onReject() {
    this.messageService.clear('confirm');
    this.visible = false;
  }









  }



@NgModule({
  imports: [
    CheckboxModule,
    AutoCompleteModule,
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    CalendarModule,
    ToggleButtonModule,
    RippleModule,
    InputGroupModule,
    MultiSelectModule,
    DropdownModule,
    DialogModule,
    SplitButtonModule,
  ],
})
export class AppTopBarModule { }
function onMenuButtonClick() {
  throw new Error('Function not implemented.');
}

