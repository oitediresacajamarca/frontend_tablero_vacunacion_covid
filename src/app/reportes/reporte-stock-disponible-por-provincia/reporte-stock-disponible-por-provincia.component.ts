import { Component, OnInit } from '@angular/core';
import { ReporteRegionesStockService } from 'src/app/servicios/reportes/reporte-regiones-stock.service';

@Component({
  selector: 'app-reporte-stock-disponible-por-provincia',
  templateUrl: './reporte-stock-disponible-por-provincia.component.html',
  styleUrls: ['./reporte-stock-disponible-por-provincia.component.scss']
})
export class ReporteStockDisponiblePorProvinciaComponent implements OnInit {

  constructor(private repor: ReporteRegionesStockService) { }

  ngOnInit(): void {
    this.cargar_data()
  }

  datos: any[] = []

  cargar_data() {
    this.repor.devolver_reporte_stock_regiones().subscribe((data) => {
      this.datos = data

      console.log(data)
    })
  }

}
