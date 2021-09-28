import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';

import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';

import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, PanelModule, CalendarModule, InputNumberModule,
     InputTextareaModule, ConfirmDialogModule,TableModule,InputTextModule,DialogModule,DropdownModule,CardModule
  ], exports: [PanelModule, CalendarModule, InputNumberModule,
     InputTextareaModule, ConfirmDialogModule,TableModule,InputTextModule,DialogModule,DropdownModule,CardModule]
})
export class LibsModule { }
