import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReporteRegionesStockService {

  constructor(private http: HttpClient) {


  }

  devolver_reporte_stock_regiones() {
    return this.http.get<any[]>(environment.url__backend_base + 'movimientos-vacunas-sismed/reporte_stock_regiones')
  }
}
