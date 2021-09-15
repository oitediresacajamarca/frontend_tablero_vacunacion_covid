import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CoberturasComponent } from './coberturas/coberturas.component';
import { DepartamentoCajamarcaComponent } from './componentes/svgs/departamento-cajamarca/departamento-cajamarca.component';
import { EscudoCajamarcaComponent } from './componentes/svgs/escudo-cajamarca/escudo-cajamarca.component';
import { JeringaComponent } from './componentes/svgs/jeringa/jeringa.component';
import { VacunometroSvgComponent } from './componentes/vacunometro-svg/vacunometro-svg.component';
import { ContenerdorTableroComponent } from './contenerdor-tablero/contenerdor-tablero.component';
import { ConteoRapidoComponent } from './conteo-rapido/conteo-rapido.component';
import { DistritoSelectorComponent } from './controles/distrito-selector/distrito-selector.component';
import { ProvinciaSelectorComponent } from './controles/provincia-selector/provincia-selector.component';
import { DistribucionAlmacenRedComponent } from './disponibilidad-vacunacion/distribucion-almacen-red/distribucion-almacen-red.component';
import { DistribucionVacunasComponent } from './disponibilidad-vacunacion/distribucion-vacunas/distribucion-vacunas.component';
import { RegistroDisponiblidadComponent } from './disponibilidad-vacunacion/registro-disponiblidad/registro-disponiblidad.component';
import { AdminDistribucionVacunasComponent } from './layouts/admin-distribucion-vacunas/admin-distribucion-vacunas.component';
import { PrimeroComponent } from './primero/primero.component';

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

  { path: 'distribucion', component: DistribucionVacunasComponent },
  { path: 'almacen-red', component: DistribucionAlmacenRedComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
