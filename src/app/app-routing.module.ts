import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CoberturasComponent } from './coberturas/coberturas.component';
import { DepartamentoCajamarcaComponent } from './componentes/svgs/departamento-cajamarca/departamento-cajamarca.component';
import { EscudoCajamarcaComponent } from './componentes/svgs/escudo-cajamarca/escudo-cajamarca.component';
import { JeringaComponent } from './componentes/svgs/jeringa/jeringa.component';
import { VacunometroSvgComponent } from './componentes/vacunometro-svg/vacunometro-svg.component';
import { PrimeroComponent } from './primero/primero.component';

const routes: Routes = [
  {path:'primero',component:BodyComponent},
  {path:'vacunacion',component:BodyComponent},
  {path:'cobertura',component:CoberturasComponent},
  {path:'escudo',component:EscudoCajamarcaComponent},
  {path:'departamento',component:DepartamentoCajamarcaComponent},
  {path:'jeringa',component:JeringaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
