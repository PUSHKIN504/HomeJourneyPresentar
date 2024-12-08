import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', redirectTo: 'auth', pathMatch: 'full',
            },
            {
                path: 'auth',
                data: { breadcrumb: 'Auth' },
                loadChildren: () =>
                    import('./demo/components/auth/auth.module').then(
                        (m) => m.AuthModule
                    ),
            },
        ]
    },
    {
        path: 'homejourney',
        component: AppLayoutComponent,
        children: [
            {
                path: 'Paginaprincipal',
                data: { breadcrumb: 'Inicio' },
                loadChildren: () =>
                    import('./demo/components/componentsgraficosprincipales/graficosprincipales.module').then((m) => m.GraficoModule),
            },
           
           
          
            {
                path: 'general',
                data: { breadcrumb: 'General' },
                loadChildren: () =>
                    import('./demo/components/componentsgeneral/general.module').then((m) => m.GeneralModule),
            },
          
           
           
            
        ],
    },
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
