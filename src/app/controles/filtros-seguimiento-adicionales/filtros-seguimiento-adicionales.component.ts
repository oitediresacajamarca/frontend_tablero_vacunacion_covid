import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filtros-seguimiento-adicionales',
  templateUrl: './filtros-seguimiento-adicionales.component.html',
  styleUrls: ['./filtros-seguimiento-adicionales.component.scss']
})
export class FiltrosSeguimientoAdicionalesComponent implements OnInit {

  constructor() { }
  @Output('selecciono_vacunados_hoy')
  selecciono_vacunados_hoy:EventEmitter<any>=new EventEmitter()

  ngOnInit(): void {
  }
  cambio_opcion(){


    this.selecciono_vacunados_hoy.emit(this.opciones)
  
  }

  opciones=['hoy']

}
