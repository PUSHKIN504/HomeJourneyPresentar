import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'requisito1',
                data: { breadcrumb: 'Rucursales' },
                loadChildren: () =>
                    import('./Requisito1/Requisito1.module').then(
                        (m) => m.Requisito1Module
                    ),
            },
            {
                path: 'requisito4',
                data: { breadcrumb: 'Reporte' },
                loadChildren: () =>
                    import('./Requisito4/Requisito2.module').then(
                        (m) => m.Requisito2Module
                    ),
            },
            {
                path: 'requisito3',
                data: { breadcrumb: 'Gestion de Viajes' },
                loadChildren: () =>
                    import('./Requisito3/Requisito3.module').then(
                        (m) => m.Requisito3Module
                    ),
            },
           
        ]),
    ],
    exports: [RouterModule],
})
export class GeneralRoutingModule {}
