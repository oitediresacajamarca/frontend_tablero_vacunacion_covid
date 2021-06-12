import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacunometroSvgComponent } from './componentes/vacunometro-svg/vacunometro-svg.component';
import { PrimeroComponent } from './primero/primero.component';

const routes: Routes = [
  {path:'primero',component:PrimeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
