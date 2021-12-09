import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MicroredSelectorComponent } from 'src/app/controles/microred-selector/microred-selector.component';
import { DitribucionMicroredIpressService } from 'src/app/servicios/ditribucion-microred-ipress.service';
import { NuevoMicroredIpressComponent } from '../nuevo-microred-ipress/nuevo-microred-ipress.component';

@Component({
  selector: 'app-detalle-envio-ipress-ipress',
  templateUrl: './detalle-envio-ipress-ipress.component.html',
  styleUrls: ['./detalle-envio-ipress-ipress.component.scss']
})
export class DetalleEnvioIpressIpressComponent implements OnInit {

  constructor(private distribu_serv: DitribucionMicroredIpressService) { }
  @ViewChild('dialog_nuevo')
  dialog_nuevo!: NuevoMicroredIpressComponent

  @ViewChild('microred_selector')
  microred_selector!: MicroredSelectorComponent


  MICRORED: any = {}



  ngOnInit(): void {
  }

  abrir_dialog() {

    this.dialog_nuevo.MICRORED = this.MICRORED

    this.dialog_nuevo.ABRIR()
  }
  selecciono_red(e: any) {
 
    this.microred_selector.ID_RED = e.ID_RED
    this.microred_selector.cargarMicroredes()
  }
  selecciono_microred(e: any) {

    this.MICRORED = e;


    this.cargar_distribuciones(parseInt(e.CABECERA))



 
  }
  cargar_distribuciones(CABECERA: number) {
    this.distribu_serv.cargar_distribuciones_desde_microred(CABECERA).subscribe(data => {
      console.log(data)
    })
  }

}
