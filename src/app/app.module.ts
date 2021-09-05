import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

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


import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';

import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import { JeringaComponent } from './componentes/svgs/jeringa/jeringa.component';
import { CoberturasComponent } from './coberturas/coberturas.component';
import { MapaSelectorDirective } from './directivas/mapa-selector.directive';
import { ContenerdorTableroComponent } from './contenerdor-tablero/contenerdor-tablero.component';
import {DropdownModule} from 'primeng/dropdown';
import {TranslateModule} from '@ngx-translate/core'





import { NgxDateRangeModule } from 'ngx-daterange';
import { ProvinciaSelectorComponent } from './controles/provincia-selector/provincia-selector.component';
import { DistritoSelectorComponent } from './controles/distrito-selector/distrito-selector.component';
import { DisponibilidadVacunacionModule } from './disponibilidad-vacunacion/disponibilidad-vacunacion.module';



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
    MultiSelectModule,
    DropdownModule,
    DisponibilidadVacunacionModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es_ES'
  })
       
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
