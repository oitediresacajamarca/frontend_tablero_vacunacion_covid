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
import { DetalleDistribucionAlmacenRedComponent } from './detalle-distribucion-almacen-red/detalle-distribucion-almacen-red.component';
import { DetalleEnvioIpressComponent } from './detalle-envio-ipress/detalle-envio-ipress.component';
import { DetalleEnvioRedComponent } from './detalle-envio-red/detalle-envio-red.component';
import { NuevoEnvioRedComponent } from './nuevo-envio-red/nuevo-envio-red.component';
import { DistribucionEstrategiaRedComponent } from './distribucion-estrategia-red/distribucion-estrategia-red.component';
import { DetalleDistribucionEstrategiaRedComponent } from './detalle-distribucion-estrategia-red/detalle-distribucion-estrategia-red.component';
import { CuadroComparacionAlmacenRedComponent } from './cuadro-comparacion-almacen-red/cuadro-comparacion-almacen-red.component';
import { RecepcionAnexosComponent } from './recepcion-anexos/recepcion-anexos.component';
import { RecepcionAnexosDetalleComponent } from './recepcion-anexos-detalle/recepcion-anexos-detalle.component';
import { ReporteStockComponent } from './reporte-stock/reporte-stock.component';
import { ReporteStockDetalleComponent } from './reporte-stock-detalle/reporte-stock-detalle.component';
import { DetalleEnvioIpressIpressComponent } from './detalle-envio-ipress-ipress/detalle-envio-ipress-ipress.component';
import { DetalleDistribucionAlmacenRedSismedComponent } from './detalle-distribucion-almacen-red-sismed/detalle-distribucion-almacen-red-sismed.component';
import { RegistroCentroVacunacionComponent } from './registro-centro-vacunacion/registro-centro-vacunacion.component';
import { DetalleRegistroCentroVacunacionComponent } from './detalle-registro-centro-vacunacion/detalle-registro-centro-vacunacion.component';
import { NuevoMicroredIpressComponent } from './nuevo-microred-ipress/nuevo-microred-ipress.component';
import { ReporteCabeceraRegionalComponent } from './reportes/reporte-cabecera-regional/reporte-cabecera-regional.component';
import { EditarDistribucionAlmacenRedSismedComponent } from './editar-distribucion-almacen-red-sismed/editar-distribucion-almacen-red-sismed.component';
import { CasosProblemasDigitacionComponent } from './registros/casos-problemas-digitacion/casos-problemas-digitacion.component';
import { DetalleCasosProblemasDigitacionComponent } from './registros/detalle-casos-problemas-digitacion/detalle-casos-problemas-digitacion.component';
import { ReporteRegistroCentroVacunacionComponent } from './centro-vacunacion/reporte-registro-centro-vacunacion/reporte-registro-centro-vacunacion.component';
import { ModificarRegistroCentroVacunacionComponent } from './centro-vacunacion/modificar-registro-centro-vacunacion/modificar-registro-centro-vacunacion.component';


@NgModule({
  declarations: [
    RegistroDisponiblidadComponent,
    DetalleDistribucionComponent,
    DistribucionVacunasComponent,
    DistribucionAlmacenRedComponent,
    DistribucionRedIpressComponent,
    DetalleDistribucionPorIpressComponent,
    RegistroStockComponent,
    RecepcionAlmacenEspecialComponent,
    DetalleDistribucionAlmacenRedComponent,
    DetalleEnvioIpressComponent,
    DetalleEnvioRedComponent,
    NuevoEnvioRedComponent,
    DistribucionEstrategiaRedComponent,
    DetalleDistribucionEstrategiaRedComponent,
    CuadroComparacionAlmacenRedComponent,
    RecepcionAnexosComponent,
    RecepcionAnexosDetalleComponent,
    ReporteStockComponent,
    ReporteStockDetalleComponent,
    DetalleEnvioIpressIpressComponent,
    DetalleDistribucionAlmacenRedSismedComponent,
    RegistroCentroVacunacionComponent,
    DetalleRegistroCentroVacunacionComponent,
    NuevoMicroredIpressComponent,
    ReporteCabeceraRegionalComponent,
    EditarDistribucionAlmacenRedSismedComponent,
    CasosProblemasDigitacionComponent,
    DetalleCasosProblemasDigitacionComponent,
    ReporteRegistroCentroVacunacionComponent,
    ModificarRegistroCentroVacunacionComponent
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
