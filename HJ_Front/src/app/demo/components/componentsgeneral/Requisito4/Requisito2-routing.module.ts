import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Requisito2Component } from './Requisito2.component';

@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: Requisito2Component }
    ])],
    exports: [RouterModule]
})
export class Requisito2RoutingModule { }