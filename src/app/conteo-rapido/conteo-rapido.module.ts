import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlesModule } from '../controles/controles.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from '../libs/libs.module';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControlesModule,
    ReactiveFormsModule,
    LibsModule,
  ],exports:[ ControlesModule,
    ReactiveFormsModule,
    LibsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ConfirmationService]
})
export class ConteoRapidoModule { }
