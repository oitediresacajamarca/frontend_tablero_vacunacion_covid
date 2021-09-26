import { Component, OnInit } from '@angular/core';
import { DistribucionEstrategiaRedService } from 'src/app/servicios/distribucion-estrategia-red.service';

@Component({
  selector: 'app-cuadro-comparacion-almacen-red',
  templateUrl: './cuadro-comparacion-almacen-red.component.html',
  styleUrls: ['./cuadro-comparacion-almacen-red.component.scss']
})
export class CuadroComparacionAlmacenRedComponent implements OnInit {

  constructor(private distrib: DistribucionEstrategiaRedService) { }

  reporte: any[] = []

  ngOnInit(): void {
    this.cargar_cuadro()
  }

  cargar_cuadro() {
    this.distrib.reporte_cuadro().subscribe(data => {

      console.log(data)
      this.reporte = data;

    })
  }

}
