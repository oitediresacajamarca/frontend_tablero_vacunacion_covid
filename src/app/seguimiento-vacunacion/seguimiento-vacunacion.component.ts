import { Component, OnInit, ViewChild } from '@angular/core';
import { DetallePadronComponent } from './detalle-padron/detalle-padron.component';
import { NuevoComponent } from './seguimiento-persona/nuevo/nuevo.component';

@Component({
  selector: 'app-seguimiento-vacunacion',
  templateUrl: './seguimiento-vacunacion.component.html',
  styleUrls: ['./seguimiento-vacunacion.component.scss']
})
export class SeguimientoVacunacionComponent implements OnInit {

  constructor() { }

  @ViewChild('detalle_padron')
  detalle_padron!:DetallePadronComponent

  ngOnInit(): void {
  }
  cargar_data(e:any){
    console.log(e.COD_IPRESS)
    this.detalle_padron.RENIPRESS=e.COD_IPRESS
    this.detalle_padron.cargar_detalle_padron()
  }
  @ViewChild('nuevo_seguimiento')
  nuevo_seguimiento!:NuevoComponent


  abrir_nuevo(e:any){
    this.nuevo_seguimiento.visible=true
  }



}
