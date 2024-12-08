import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UsuarioService } from '../../../services/usuario.service';
import { UsuarioViewModel } from '../../../models/usuariosviewmodel';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

import { Respuesta } from 'src/app/demo/services/ServiceResult';
import { CookieService } from 'ngx-cookie-service';
@Component({
	templateUrl: './login.component.html',
	styleUrl:'./login.scss',
  providers: [MessageService]
})
export class LoginComponent implements OnInit{
	InicioSesion: UsuarioViewModel[] = [];
    usuario?: string;
    clave?: string;
    usuarioValidarClave: boolean = false;
    



	constructor(  public layoutService: LayoutService,
        private router: Router,
        public UsuarioService: UsuarioService,
    private messageService: MessageService,

        public cookieService: CookieService,) {}

	get dark(): boolean {
		return this.layoutService.config().colorScheme !== 'light';
	}

	async ngOnInit() {
       
    }
     Login():void {
	
		const usuarioTrimmed = this.usuario ? this.usuario.trim() : '';
		const claveTrimmed = this.clave ? this.clave.trim() : '';
		if (usuarioTrimmed && claveTrimmed) {
                this.UsuarioService.IniciarSesionWeb(usuarioTrimmed, claveTrimmed).subscribe(
                  (response) => {console.log('response',response);
                    
                        
                        if (response.data[0].userId > 0) {
                            this.router.navigate(['/homejourney/Paginaprincipal/Paginaprincipal']);
                              console.log('if1');
                              // localStorage.setItem('nombreUsuario', response.data[0].userRole);
                              this.cookieService.set('nombreUsuario', response.data[0].userRole, 1, '/');
                              this.cookieService.set('iduser', response.data[0].userId, 1, '/');
                        }
                        else if (response.data[0].userId === 0) {
                          console.log('if2');

                          this.usuarioValidarClave = true;
                          this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Credeciales incorrectas.',
                            life: 3000
                          });
                        }
                    
                    else {
                      console.log('if3');

                      this.usuarioValidarClave = true;
                      this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Credeciales incorrectas.',
                        life: 3000
                      });
                    }}
                )        
		}
    else {
      this.usuarioValidarClave = true;
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Credeciales incorrectas.',
        life: 3000
      });
    }
  
	}
	

}
