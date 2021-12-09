import { Component, OnInit, ViewChild } from '@angular/core';
import { NuevoMicroredIpressComponent } from '../nuevo-microred-ipress/nuevo-microred-ipress.component';

@Component({
  selector: 'app-detalle-envio-ipress-ipress',
  templateUrl: './detalle-envio-ipress-ipress.component.html',
  styleUrls: ['./detalle-envio-ipress-ipress.component.scss']
})
export class DetalleEnvioIpressIpressComponent implements OnInit {

  constructor() { }
  @ViewChild('dialog_nuevo')
  dialog_nuevo!:NuevoMicroredIpressComponent

  ngOnInit(): void {
  }

  abrir_dialog(){
    this.dialog_nuevo.ABRIR()
  }
}
