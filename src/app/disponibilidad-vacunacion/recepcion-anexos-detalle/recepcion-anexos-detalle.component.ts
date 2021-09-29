import { Component, OnInit, ViewChild } from '@angular/core';
import { AnexosService } from 'src/app/servicios/anexos.service';
import { RecepcionAnexosComponent } from '../recepcion-anexos/recepcion-anexos.component';

@Component({
  selector: 'app-recepcion-anexos-detalle',
  templateUrl: './recepcion-anexos-detalle.component.html',
  styleUrls: ['./recepcion-anexos-detalle.component.scss']
})
export class RecepcionAnexosDetalleComponent implements OnInit {

  constructor(private recepciones: AnexosService) { }

  @ViewChild('nuevo')
  nuevo!:RecepcionAnexosComponent

  anexos: any[] = []

  ngOnInit(): void {
    this.cargar_anexos()
  }

  cargar_anexos() {
    this.recepciones.devolver_listado_anexos().subscribe(data => { console.log(data)
    
    this.anexos=data
    })
  }

  ANIADIR(){
  
    this.nuevo.VISIBLE=true;
  }

}
