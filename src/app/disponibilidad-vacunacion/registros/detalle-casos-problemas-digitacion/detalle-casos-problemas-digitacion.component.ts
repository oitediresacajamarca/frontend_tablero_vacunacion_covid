import { Component, OnInit, ViewChild } from '@angular/core';
import { CasosProblemasDigitacionComponent } from '../casos-problemas-digitacion/casos-problemas-digitacion.component';

@Component({
  selector: 'app-detalle-casos-problemas-digitacion',
  templateUrl: './detalle-casos-problemas-digitacion.component.html',
  styleUrls: ['./detalle-casos-problemas-digitacion.component.scss']
})
export class DetalleCasosProblemasDigitacionComponent implements OnInit {

  constructor() { }
  @ViewChild('nuevo_caso')
  nuevo_caso!:CasosProblemasDigitacionComponent

  ngOnInit(): void {
  }

  abrir_dialogo(){
    console.log('datos')
    this.nuevo_caso.display=true;

  }
}
