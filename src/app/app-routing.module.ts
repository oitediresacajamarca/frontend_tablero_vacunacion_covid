import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CoberturasComponent } from './coberturas/coberturas.component';
import { DepartamentoCajamarcaComponent } from './componentes/svgs/departamento-cajamarca/departamento-cajamarca.component';
import { EscudoCajamarcaComponent } from './componentes/svgs/escudo-cajamarca/escudo-cajamarca.component';
import { JeringaComponent } from './componentes/svgs/jeringa/jeringa.component';
import { VacunometroSvgComponent } from './componentes/vacunometro-svg/vacunometro-svg.component';
import { ContenerdorTableroComponent } from './contenerdor-tablero/contenerdor-tablero.component';
import { ConteoRapidoNhisComponent } from './conteo-rapido/conteo-rapido-nhis/conteo-rapido-nhis.component';
import { ConteoRapidoComponent } from './conteo-rapido/conteo-rapido.component';
import { DistritoSelectorComponent } from './controles/distrito-selector/distrito-selector.component';

import { CuadroComparacionAlmacenRedComponent } from './disponibilidad-vacunacion/cuadro-comparacion-almacen-red/cuadro-comparacion-almacen-red.component';
import { DetalleDistribucionAlmacenRedSismedComponent } from './disponibilidad-vacunacion/detalle-distribucion-almacen-red-sismed/detalle-distribucion-almacen-red-sismed.component';
import { DetalleDistribucionAlmacenRedComponent } from './disponibilidad-vacunacion/detalle-distribucion-almacen-red/detalle-distribucion-almacen-red.component';
import { DetalleDistribucionEstrategiaRedComponent } from './disponibilidad-vacunacion/detalle-distribucion-estrategia-red/detalle-distribucion-estrategia-red.component';
import { DetalleDistribucionPorIpressComponent } from './disponibilidad-vacunacion/detalle-distribucion-por-ipress/detalle-distribucion-por-ipress.component';
import { DetalleEnvioIpressIpressComponent } from './disponibilidad-vacunacion/detalle-envio-ipress-ipress/detalle-envio-ipress-ipress.component';
import { DetalleEnvioIpressComponent } from './disponibilidad-vacunacion/detalle-envio-ipress/detalle-envio-ipress.component';
import { DetalleEnvioRedComponent } from './disponibilidad-vacunacion/detalle-envio-red/detalle-envio-red.component';
import { DetalleRegistroCentroVacunacionComponent } from './disponibilidad-vacunacion/detalle-registro-centro-vacunacion/detalle-registro-centro-vacunacion.component';
import { DistribucionAlmacenRedComponent } from './disponibilidad-vacunacion/distribucion-almacen-red/distribucion-almacen-red.component';
import { DistribucionVacunasComponent } from './disponibilidad-vacunacion/distribucion-vacunas/distribucion-vacunas.component';
import { RecepcionAlmacenEspecialComponent } from './disponibilidad-vacunacion/recepcion-almacen-especial/recepcion-almacen-especial.component';
import { RecepcionAnexosDetalleComponent } from './disponibilidad-vacunacion/recepcion-anexos-detalle/recepcion-anexos-detalle.component';
import { RecepcionAnexosComponent } from './disponibilidad-vacunacion/recepcion-anexos/recepcion-anexos.component';
import { RegistroDisponiblidadComponent } from './disponibilidad-vacunacion/registro-disponiblidad/registro-disponiblidad.component';
import { RegistroStockComponent } from './disponibilidad-vacunacion/registro-stock/registro-stock.component';
import { ReporteStockComponent } from './disponibilidad-vacunacion/reporte-stock/reporte-stock.component';
import { ReporteCabeceraRegionalComponent } from './disponibilidad-vacunacion/reportes/reporte-cabecera-regional/reporte-cabecera-regional.component';
import { AdminDistribucionVacunasComponent } from './layouts/admin-distribucion-vacunas/admin-distribucion-vacunas.component';
import { ReporteDistribucionVacunasCenaresComponent } from './reportes/reporte-distribucion-vacunas-cenares/reporte-distribucion-vacunas-cenares.component';
import { ReporteStockDisponiblePorProvinciaComponent } from './reportes/reporte-stock-disponible-por-provincia/reporte-stock-disponible-por-provincia.component';
import { LoginComponent } from './usuarios/login/login.component';


const routes: Routes = [

  {
    path: '', component: ContenerdorTableroComponent, children: [
      { path: '', component: BodyComponent },
      { path: 'avance', component: BodyComponent },
      { path: 'cobertura', component: CoberturasComponent }
    ]
  },
  { path: 'primero', component: BodyComponent },
  { path: 'vacunacion', component: BodyComponent },
  { path: 'cobertura', component: CoberturasComponent },
  { path: 'escudo', component: EscudoCajamarcaComponent },
  { path: 'departamento', component: DepartamentoCajamarcaComponent },
  { path: 'jeringa', component: JeringaComponent },
  { path: 'controles', component: DistritoSelectorComponent },
  { path: 'modulos', component: RegistroDisponiblidadComponent },
  { path: 'conteo', component: ConteoRapidoComponent },
  { path: 'conteos', component: ConteoRapidoNhisComponent },
  { path: 'distribucion', component: DistribucionVacunasComponent },
  { path: 'almacen-red', component: DistribucionAlmacenRedComponent },
  { path: 'stock-disponible', component: RegistroStockComponent },
  { path: 'detalle/almacen-red', component: DetalleDistribucionAlmacenRedComponent },
  { path: 'detalle/red-ipress', component: DetalleDistribucionPorIpressComponent },
  { path: 'detalle/envio-ipress', component: DetalleEnvioIpressComponent },
  { path: 'detalle/envio-red', component: DetalleEnvioRedComponent },
  { path: 'detalle/envio-red/:id', component: DetalleEnvioRedComponent },
  { path: 'recepcion-almacen-especial', component: RecepcionAlmacenEspecialComponent },
  {
    path: 'admin-distribucion', component: AdminDistribucionVacunasComponent,
    children: [
      { path: 'recepcion-almacen-especial', component: RecepcionAlmacenEspecialComponent },
      { path: 'almacen-red', component: DetalleDistribucionAlmacenRedSismedComponent },
      { path: 'estrategia-red', component: DetalleDistribucionEstrategiaRedComponent },
      { path: 'red-ipress', component: DetalleDistribucionPorIpressComponent },
      { path: 'stock-disponible', component: RegistroStockComponent },
      { path: 'comparacion-almacen-red', component: CuadroComparacionAlmacenRedComponent },
      { path: 'recepcion-anexos', component: RecepcionAnexosDetalleComponent },
      { path: 'reporte-stock-disponible', component: ReporteStockComponent },
      { path: 'micored-ipress', component: DetalleEnvioIpressIpressComponent },
      { path: 'distribucion-vacunas-cenares', component: ReporteDistribucionVacunasCenaresComponent },
      { path: 'stock-disponible-redes', component: ReporteStockDisponiblePorProvinciaComponent },
      
      
      { path: 'centro-vacunacion', component: DetalleRegistroCentroVacunacionComponent }
    ]
  },
  { path: 'login', component: LoginComponent },

  { path: 'pruebas', component: ReporteCabeceraRegionalComponent },
  { path: 'centro-vacunacion', component: DetalleRegistroCentroVacunacionComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
