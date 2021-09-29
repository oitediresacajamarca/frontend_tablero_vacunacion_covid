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
import {FileUploadModule} from 'primeng/fileupload';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, PanelModule, CalendarModule, InputNumberModule,
     InputTextareaModule, ConfirmDialogModule,TableModule,InputTextModule,DialogModule,DropdownModule,CardModule,FileUploadModule,MessagesModule,MessageModule
  ], exports: [PanelModule, CalendarModule, InputNumberModule,
     InputTextareaModule, ConfirmDialogModule,TableModule,InputTextModule,DialogModule,DropdownModule,CardModule,FileUploadModule,MessagesModule,MessageModule]
})
export class LibsModule { }
