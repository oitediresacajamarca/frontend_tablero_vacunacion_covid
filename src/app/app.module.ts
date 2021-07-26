import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeroComponent } from './primero/primero.component';
import { VacunometroSvgComponent } from './componentes/vacunometro-svg/vacunometro-svg.component';
import { BodyComponent } from './body/body.component';
import { DepartamentoCajamarcaComponent } from './componentes/svgs/departamento-cajamarca/departamento-cajamarca.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';





import { FormsModule } from '@angular/forms';

import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { JeringaComponent } from './componentes/svgs/jeringa/jeringa.component';
import { CoberturasComponent } from './coberturas/coberturas.component';
import { MapaSelectorDirective } from './directivas/mapa-selector.directive';
import { ContenerdorTableroComponent } from './contenerdor-tablero/contenerdor-tablero.component';




import { NgxDateRangeModule } from 'ngx-daterange';



@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    VacunometroSvgComponent,
    BodyComponent,
    DepartamentoCajamarcaComponent,
    JeringaComponent,
    CoberturasComponent,
    MapaSelectorDirective,
    ContenerdorTableroComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HighchartsChartModule,
    ChartModule,
    FormsModule,

    NgxDateRangeModule,
 

 
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
