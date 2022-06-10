import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-filtros-seguimiento-adicionales',
  templateUrl: './filtros-seguimiento-adicionales.component.html',
  styleUrls: ['./filtros-seguimiento-adicionales.component.scss']
})

export class FiltrosSeguimientoAdicionalesComponent implements OnInit {

  constructor() { }
  @Output('selecciono_vacunados_hoy')
  selecciono_vacunados_hoy: EventEmitter<any> = new EventEmitter()
  @Output('cambio_filtros')
  cambio_filtros: EventEmitter<any> = new EventEmitter()

  @Output('filtrar_por_texto')
  filtrar_por_texto: EventEmitter<any> = new EventEmitter()


  dosis: any[] = []
  dosis_seleccionadas: any[] = []
  stateOptions: any[] = []
  incluye_rezagados = 1
  visualizar_alt = true;

  filtros: any = {}


  ngOnInit(): void {
    this.dosis = [
      { name: 'Dosis 1', value: 1 },
      { name: 'Dosis 2', value: 2 },
      { name: 'Dosis 3', value: 3 },
      { name: 'Dosis 4', value: 4 }
    ];
    this.stateOptions = [
      { name: 'SI', value: 1 },
      { name: 'NO', value: 2 },

    ];

  }
  cambio_opcion() {


    this.selecciono_vacunados_hoy.emit(this.opciones)

  }

  cambio_filtros_adic() {


    if (this.opciones.findIndex(dat => { return dat == 'hoy' }) >= 0) {
      this.filtros.hoy = true
    } else {
      this.filtros.hoy = false
    }

    this.filtros.dosis_seleccionadas = this.dosis_seleccionadas
    this.filtros.incluye_rezagados = this.incluye_rezagados



    this.cambio_filtros.emit(this.filtros)

  }

  filtra(e: any) {

    this.filtrar_por_texto.emit(e)

  }

  selecciono_hoy(e: any) {
  

    if (e.checked == true) {
    
      this.visualizar_alt = true;

    }
    else {
    
      this.visualizar_alt = false;
      this.incluye_rezagados = 1

    }

  }

  texto_fil!: string

  opciones = ['hoy']

}
