import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.scss']
})
export class FabricanteComponent implements OnInit {

  constructor() { }

  @Output('selecciono')

  selecciono=new EventEmitter()

  FABRICANTES:any=[{NOMBRE:'SINOPHARM'},{NOMBRE:'PFIZER'},{NOMBRE:'ASTRAZENECA'}]
  FABRICANTE:any;

  ngOnInit(): void {
  }
  seleccionoFabricante(event:any){

    this.selecciono.emit(event.value.NOMBRE)
  }

}
