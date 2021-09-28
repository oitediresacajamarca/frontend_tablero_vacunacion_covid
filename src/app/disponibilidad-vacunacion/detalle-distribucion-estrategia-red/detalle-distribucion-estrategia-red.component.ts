import { Component, OnInit, ViewChild } from '@angular/core';
import { DistribucionEstrategiaRedService } from 'src/app/servicios/distribucion-estrategia-red.service';
import { DistribucionEstrategiaRedComponent } from '../distribucion-estrategia-red/distribucion-estrategia-red.component';

@Component({
  selector: 'app-detalle-distribucion-estrategia-red',
  templateUrl: './detalle-distribucion-estrategia-red.component.html',
  styleUrls: ['./detalle-distribucion-estrategia-red.component.scss']
})
export class DetalleDistribucionEstrategiaRedComponent implements OnInit {

  constructor(private distribuciones: DistribucionEstrategiaRedService) { }

  @ViewChild('nuevo_envio') nuevo!: DistribucionEstrategiaRedComponent

  distribuciones_listado: any[] = []

  ngOnInit(): void {
    this.cargarDistribuciones()
  }

  open_nuevo() {
    this.nuevo.open()

  }

  cargarDistribuciones() {
    this.distribuciones.listar().subscribe((data) => {
      this.distribuciones_listado = data;

    })
  }

  creo_nuevo() {

    this.cargarDistribuciones()
  }

  eliminar(id: any) {

    this.distribuciones.eliminar(id).subscribe(data => {
      this.cargarDistribuciones()

    });



  }

}
