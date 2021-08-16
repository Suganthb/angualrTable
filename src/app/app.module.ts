import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import {FormsModule,ReactiveFormsModule } from "@angular/forms";
import {CustomerserviceService} from "./customerservice.service";
import { TableDataComponent } from './table-data/table-data.component';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { TablematComponent } from './tablemat/tablemat.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SharedTableComponent } from './shared-table/shared-table.component';
import { StringComComponent } from './sharedComp/string-com/string-com.component';
import { NumberComComponent } from './sharedComp/number-com/number-com.component';
import { ViewComponent } from './view/view.component';
import { DateComComponent } from './sharedComp/date-com/date-com.component';


@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    TablematComponent,
    SharedTableComponent,
    StringComComponent,
    NumberComComponent,
    ViewComponent,
    DateComComponent,
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
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    FlexLayoutModule
  ],
  providers: [CustomerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
