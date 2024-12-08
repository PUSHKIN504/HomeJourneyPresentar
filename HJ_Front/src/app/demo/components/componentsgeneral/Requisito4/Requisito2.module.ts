import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
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
import { FormsModule } from '@angular/forms';
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePipe } from '@angular/common';

import { Requisito2Component } from "./Requisito2.component";
import { Requisito2RoutingModule } from "./Requisito2-routing.module";
@NgModule({
  providers: [DatePipe],
    imports: [
      CommonModule,
      Requisito2RoutingModule,
      ReactiveFormsModule,
      TableModule,
      ButtonModule,
      ToastModule,
      InputTextModule,
      CalendarModule,
      ToggleButtonModule,
      RippleModule,FormsModule,
      InputGroupModule,
      MultiSelectModule,
      DropdownModule,
      DialogModule,
      
      AutoCompleteModule,
     
      SplitButtonModule,
    ],
    declarations: [
      Requisito2Component
    ]
  })
  export class Requisito2Module { }