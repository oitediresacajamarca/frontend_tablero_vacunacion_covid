import { Component, OnInit, ViewChild } from '@angular/core';
import { FiltrosSeguimientoAdicionalesComponent } from '../controles/filtros-seguimiento-adicionales/filtros-seguimiento-adicionales.component';
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
  detalle_padron!: DetallePadronComponent
  @ViewChild('filtros_adic')
  filtros_adic!: FiltrosSeguimientoAdicionalesComponent

  ngOnInit(): void {
  }
  cargar_data(e: any) {

    this.detalle_padron.RENIPRESS = e.COD_IPRESS
    if (this.filtros_adic.opciones[0] == 'hoy') { this.detalle_padron.filtro = { hoy: 'true' } }
    else { this.detalle_padron.filtro = { hoy: 'false' } }


    this.detalle_padron.cargar_detalle_padron_vacunar_filtro()
  }
  @ViewChild('nuevo_seguimiento')
  nuevo_seguimiento!: NuevoComponent


  abrir_nuevo(e: any) {
    this.nuevo_seguimiento.visible = true
  }

  seleciono_vacunados_ho(e: any[]) {


    if (e.findIndex(data => {
      return data == 'hoy'
    }) >= 0) {


      this.detalle_padron.filtro = { hoy: true }

    }
    else {
      this.detalle_padron.filtro = { hoy: false }
    }

    this.detalle_padron.cargar_detalle_padron_vacunar_filtro()
  }


}
