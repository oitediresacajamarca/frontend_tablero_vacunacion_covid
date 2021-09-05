import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CoberturasComponent } from './coberturas/coberturas.component';
import { DepartamentoCajamarcaComponent } from './componentes/svgs/departamento-cajamarca/departamento-cajamarca.component';
import { EscudoCajamarcaComponent } from './componentes/svgs/escudo-cajamarca/escudo-cajamarca.component';
import { JeringaComponent } from './componentes/svgs/jeringa/jeringa.component';
import { VacunometroSvgComponent } from './componentes/vacunometro-svg/vacunometro-svg.component';
import { ContenerdorTableroComponent } from './contenerdor-tablero/contenerdor-tablero.component';
import { DistritoSelectorComponent } from './controles/distrito-selector/distrito-selector.component';
import { ProvinciaSelectorComponent } from './controles/provincia-selector/provincia-selector.component';
import { RegistroDisponiblidadComponent } from './disponibilidad-vacunacion/registro-disponiblidad/registro-disponiblidad.component';
import { PrimeroComponent } from './primero/primero.component';

const routes: Routes = [

  {path:'',component:ContenerdorTableroComponent,children:[
    {path:'',component:BodyComponent},
    {path:'avance',component:BodyComponent},
    {path:'cobertura',component:CoberturasComponent}
  ]},
  {path:'primero',component:BodyComponent},
  {path:'vacunacion',component:BodyComponent},
  {path:'cobertura',component:CoberturasComponent},
  {path:'escudo',component:EscudoCajamarcaComponent},
  {path:'departamento',component:DepartamentoCajamarcaComponent},
  {path:'jeringa',component:JeringaComponent},

  {path:'controles',component:DistritoSelectorComponent},
  
  {path:'modulos',component:RegistroDisponiblidadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
