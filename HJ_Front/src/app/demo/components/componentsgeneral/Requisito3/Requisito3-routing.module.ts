import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Requisito3Component } from './Requisito3.component';

@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: Requisito3Component }
    ])],
    exports: [RouterModule]
})
export class Requisito3RoutingModule { }