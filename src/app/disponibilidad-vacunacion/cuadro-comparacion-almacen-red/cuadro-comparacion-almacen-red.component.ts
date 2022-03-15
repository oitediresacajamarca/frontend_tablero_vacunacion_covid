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
  fabricante=''

  ngOnInit(): void {
    this.cargar_cuadro()
  }

  cargar_cuadro() {
    this.distrib.reporte_cuadro().subscribe(data => {

      console.log(data)
      this.reporte = data;

    })
  }

  cargar_cuadro_por_fabricante(fabricante:any) {
    this.distrib.reporte_cuadro_por_fabricante(fabricante).subscribe(data => {

      console.log(data)
      this.reporte = data;

    })
  }

  selecciono_fabricante(e:any){

this.cargar_cuadro_por_fabricante(e)
    
  }

}
