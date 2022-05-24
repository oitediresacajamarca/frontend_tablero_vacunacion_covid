import { Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';

import { EstablecimientosSelectorComponent } from '../establecimientos-selector/establecimientos-selector.component';
import { IpressSelectorComponent } from '../ipress-selector/ipress-selector.component';
import { MicroredSelectorComponent } from '../microred-selector/microred-selector.component';

@Component({
  selector: 'app-filtros-seguimiento',
  templateUrl: './filtros-seguimiento.component.html',
  styleUrls: ['./filtros-seguimiento.component.scss']
})
export class FiltrosSeguimientoComponent implements OnInit {

  constructor() { }

  @Output('seleciono_establec')
  seleciono_establec:EventEmitter<any>= new EventEmitter();

  ngOnInit(): void {
  }
 @ViewChild('MICRORED')
  MICRORED!:MicroredSelectorComponent
  @ViewChild('ESTABLECIMIENTO')
  ESTABLECIMIENTO!:IpressSelectorComponent

  cargar_microredes(e:any){
 
    this.MICRORED.ID_RED=e.ID_RED;
    this.MICRORED.cargarMicroredes()
  }
  cargar_establecimiento(e:any){

    this.ESTABLECIMIENTO.ID_MICRORED=e.ID_MICRORED
    this.ESTABLECIMIENTO.cargar_establecimeintos_por_id_microred()   
 


  }


  selecciono_establec(e:any){
    console.log(e)
    this.seleciono_establec.emit(e)
  }

}
