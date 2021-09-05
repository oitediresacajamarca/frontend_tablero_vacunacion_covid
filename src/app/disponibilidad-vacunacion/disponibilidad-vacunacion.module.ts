import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroDisponiblidadComponent } from './registro-disponiblidad/registro-disponiblidad.component';
import { DistritoSelectorComponent } from '../controles/distrito-selector/distrito-selector.component';
import { ProvinciaSelectorComponent } from '../controles/provincia-selector/provincia-selector.component';
import { ControlesModule } from '../controles/controles.module';
import { LibsModule } from '../libs/libs.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { DetalleDistribucionComponent } from './detalle-distribucion/detalle-distribucion.component';




@NgModule({
  declarations: [
    RegistroDisponiblidadComponent,
    DetalleDistribucionComponent
  ],
  imports: [
    CommonModule,
    ControlesModule,
    ReactiveFormsModule,
    LibsModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ConfirmationService]
})
export class DisponibilidadVacunacionModule { }
