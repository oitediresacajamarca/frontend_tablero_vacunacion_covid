import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistritoSelectorComponent } from './distrito-selector/distrito-selector.component';
import { ProvinciaSelectorComponent } from './provincia-selector/provincia-selector.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { EstablecimientosSelectorComponent } from './establecimientos-selector/establecimientos-selector.component';
import { RedSelectorComponent } from './red-selector/red-selector.component';
import { MicroredSelectorComponent } from './microred-selector/microred-selector.component';
import { IpressSelectorComponent } from './ipress-selector/ipress-selector.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { RolesSelectorComponent } from './roles-selector/roles-selector.component';
import { AmbitoSelectorComponent } from './ambito-selector/ambito-selector.component';
import { EstrategiaVacunacionSelectorComponent } from './estrategia-vacunacion-selector/estrategia-vacunacion-selector.component';
import { FechaSelectorComponent } from './fecha-selector/fecha-selector.component';
import { CalendarModule } from 'primeng/calendar';
import { FiltrosSeguimientoComponent } from './filtros-seguimiento/filtros-seguimiento.component';
import { FiltrosSeguimientoAdicionalesComponent } from './filtros-seguimiento-adicionales/filtros-seguimiento-adicionales.component';
import {CheckboxModule} from 'primeng/checkbox';
import {SelectButtonModule} from 'primeng/selectbutton';


@NgModule({
  declarations: [DistritoSelectorComponent,ProvinciaSelectorComponent, FabricanteComponent, EstablecimientosSelectorComponent, RedSelectorComponent, MicroredSelectorComponent, IpressSelectorComponent, SemaforoComponent, RolesSelectorComponent, AmbitoSelectorComponent, EstrategiaVacunacionSelectorComponent, FechaSelectorComponent, FiltrosSeguimientoComponent, FiltrosSeguimientoAdicionalesComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,SelectButtonModule
  ],exports:[DistritoSelectorComponent,ProvinciaSelectorComponent,ButtonModule,FabricanteComponent,EstablecimientosSelectorComponent,
    RedSelectorComponent,MicroredSelectorComponent,IpressSelectorComponent,SemaforoComponent,RolesSelectorComponent,AmbitoSelectorComponent,
  EstrategiaVacunacionSelectorComponent,FechaSelectorComponent,FiltrosSeguimientoComponent,FiltrosSeguimientoAdicionalesComponent]
})
export class ControlesModule { }
