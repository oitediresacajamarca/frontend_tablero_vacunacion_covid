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
import { DistribucionVacunasComponent } from './distribucion-vacunas/distribucion-vacunas.component';
import { DistribucionAlmacenRedComponent } from './distribucion-almacen-red/distribucion-almacen-red.component';
import { DistribucionRedIpressComponent } from './distribucion-red-ipress/distribucion-red-ipress.component';
import { DetalleDistribucionPorIpressComponent } from './detalle-distribucion-por-ipress/detalle-distribucion-por-ipress.component';
import { RegistroStockComponent } from './registro-stock/registro-stock.component';
import { RecepcionAlmacenEspecialComponent } from './recepcion-almacen-especial/recepcion-almacen-especial.component';




@NgModule({
  declarations: [
    RegistroDisponiblidadComponent,
    DetalleDistribucionComponent,
    DistribucionVacunasComponent,
    DistribucionAlmacenRedComponent,
    DistribucionRedIpressComponent,
    DetalleDistribucionPorIpressComponent,
    RegistroStockComponent,
    RecepcionAlmacenEspecialComponent
  ],
  imports: [
    CommonModule,
    ControlesModule,
    ReactiveFormsModule,
    LibsModule,

  ],exports:[  RegistroDisponiblidadComponent,
    DetalleDistribucionComponent,
    DistribucionVacunasComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ConfirmationService]
})
export class DisponibilidadVacunacionModule { }
