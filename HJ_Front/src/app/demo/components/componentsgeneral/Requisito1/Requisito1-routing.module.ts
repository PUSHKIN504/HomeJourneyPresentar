import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Requisito1Component } from './Requisito1.component';

@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: Requisito1Component }
    ])],
    exports: [RouterModule]
})
export class Requisito1RoutingModule { }