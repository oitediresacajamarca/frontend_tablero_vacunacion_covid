import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DistribucionRedService } from 'src/app/servicios/distribucion-red.service';
import { EnviosRedService } from 'src/app/servicios/envios-red.service';
import { NuevoEnvioRedComponent } from '../nuevo-envio-red/nuevo-envio-red.component';

@Component({
  selector: 'app-detalle-envio-red',
  templateUrl: './detalle-envio-red.component.html',
  styleUrls: ['./detalle-envio-red.component.scss']
})
export class DetalleEnvioRedComponent implements OnInit {

  constructor(private envio_red: EnviosRedService, private router_map: ActivatedRoute, private distribuciones_red: DistribucionRedService) { }

  envios_red: any[] = []

  @ViewChild('nuevo_envio')
  nuevo_envio!: NuevoEnvioRedComponent
  id: any

  distribucion_cabecera: any


  ngOnInit(): void {


    this.router_map.params.subscribe(data => {
      console.log(data)

      this.id = data.id

      this.cargar_envios()
      this.cargar_distribucion()
    })
  }

  cargar_envios() {
    this.envio_red.listar_envios(this.id).subscribe(data => {


      console.log(data)

      this.envios_red = data;
    }
    )

  }

  cargar_distribucion() {

    this.distribuciones_red.listarDistribucionRedId(this.id).subscribe(data => {

      this.distribucion_cabecera = data[0];


    })
  }



  eliminar_envios(id: any) {

    this.envio_red.eliminar_envio(id).subscribe(data=>{
      this.cargar_envios()
    })
 
  }


  modificar_envios() {

  }

  open_nuevo_envio() {
    this.nuevo_envio.ID_DISTRIBUCION = this.id

    this.nuevo_envio.open()
  }

  nuevo_envio_registrado() {
    this.cargar_distribucion()
    this.cargar_envios()
  }

}
