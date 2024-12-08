import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../demo/services/servicesacceso/usuario.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(
        private router: Router,
        private usuarioService: UsuarioService,
        private cookieService: CookieService 
    ) {}

    ngOnInit() {
        this.cargarMenuCompleto();
        
    }

    irAPlanilla() {
        const randomParam = Math.random(); // Genera un valor aleatorio para forzar la navegación
        return this.router.navigate(['/homejourney/planilla/planilla', { refresh: randomParam }]);
      }

    

    cargarMenuCompleto() {
        const nombreUsuario = this.cookieService.get('nombreUsuario'); 
        console.log('Nombre del usuario:', nombreUsuario);

        this.model = [
            {
              icon: 'pi pi-th-large',
              items: [
                {
                  label: 'Inicio',
                  icon: 'pi pi-home',
                  routerLink: ['/homejourney/Paginaprincipal/Paginaprincipal']
                },
                {
                  label: 'Generales',
                  icon: 'pi pi-images',
                  items: [
                    {
                      label: 'Sucursales',
                      icon: 'pi pi-fw pi-building',
                      routerLink: ['/homejourney/general/requisito1']
                    },
                    {
                      label: 'Reporte',
                      icon: 'pi pi-fw pi-money-bill',
                      routerLink: ['/homejourney/general/requisito4']
                    }
                  ]
                }
              ]
            }
          ];
      
          // Si el usuario es "Gerente de tienda", agregar "Gestión de Viajes" dentro de "Generales"
          if (nombreUsuario === 'Gerente de tienda') {
            const generalesMenu = this.model[0].items.find(item => item.label === 'Generales');
            if (generalesMenu) {
              generalesMenu.items.push({
                label: 'Gestión de Viajes',
                icon: 'pi pi-fw pi-map',
                routerLink: ['/homejourney/general/requisito3']
              });
            }
          }
    }

    

}
