import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {SliderModule} from "primeng/slider";
import {ButtonModule} from "primeng/button";
import {ProgressBarModule} from "primeng/progressbar";
import {MultiSelectModule} from "primeng/multiselect";
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {ContextMenuModule} from "primeng/contextmenu";
import {FormsModule} from "@angular/forms";
import {CustomerserviceService} from "./customerservice.service";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
