import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistritoSelectorComponent } from './distrito-selector/distrito-selector.component';
import { ProvinciaSelectorComponent } from './provincia-selector/provincia-selector.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { EstablecimientosSelectorComponent } from './establecimientos-selector/establecimientos-selector.component';



@NgModule({
  declarations: [DistritoSelectorComponent,ProvinciaSelectorComponent, FabricanteComponent, EstablecimientosSelectorComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ButtonModule

  ],exports:[DistritoSelectorComponent,ProvinciaSelectorComponent,ButtonModule,FabricanteComponent,EstablecimientosSelectorComponent]
})
export class ControlesModule { }
