import { Component, OnInit } from '@angular/core';
import { EnviosIpressService } from 'src/app/servicios/envios-ipress.service';

@Component({
  selector: 'app-detalle-envio-ipress',
  templateUrl: './detalle-envio-ipress.component.html',
  styleUrls: ['./detalle-envio-ipress.component.scss']
})
export class DetalleEnvioIpressComponent implements OnInit {

  constructor(private detalle: EnviosIpressService) { }

  ngOnInit(): void {
    this.cargar_envios()
  }




  envios_ipress: any[] = []
  cargar_envios() {
    this.detalle.listar_envios().subscribe(data => {
 

    })
  }

}
