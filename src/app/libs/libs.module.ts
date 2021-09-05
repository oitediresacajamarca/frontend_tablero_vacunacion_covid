import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';

import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, PanelModule, CalendarModule, InputNumberModule, InputTextareaModule, ConfirmDialogModule,TableModule
  ], exports: [PanelModule, CalendarModule, InputNumberModule, InputTextareaModule, ConfirmDialogModule,TableModule]
})
export class LibsModule { }
