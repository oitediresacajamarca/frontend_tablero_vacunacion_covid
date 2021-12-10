import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.scss']
})
export class SemaforoComponent implements OnInit, OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  this.ver_colores()
  }

  style_red = "fill:#ff0000;stroke-width:0.75"
  style_green = "fill:#008f39;stroke-width:0.75"
  style_yellow = "fill:#00ff00;stroke-width:0.75"
  style_apagado = "fill:#00000;stroke-width:0.75"
  st_red = "fill:#00000;stroke-width:0.75"
  st_yeloww = "fill:#00000;stroke-width:0.75"
  st_green = "fill:#00000;stroke-width:0.75"

  @Input('valor')
  valor: number = 0.0;


  ngOnInit(): void {

  }

  ver_colores() {

    this.st_red =this.style_apagado
    this.st_yeloww =this.style_apagado
    this.st_green =this.style_apagado
    this.st_red = this.calcula_rojo()
    this.st_yeloww = this.calcula_amarillo()
    this.st_green = this.calcula_verde()
     
  }

  calcula_rojo() {

    if (this.valor >= 0.2) {

      return this.style_red;


    } else {
      return this.style_apagado
    }
  }

  calcula_amarillo() {

    if (this.valor < 0.2 && this.valor >= 0.1) {

      return this.style_yellow;


    } else {
      return this.style_apagado
    }
  }
  calcula_verde() {
    


    if (this.valor < 0.1) {

      return this.style_green;


    } else {
      return this.style_apagado
    }

  }

}
