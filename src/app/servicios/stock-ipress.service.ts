import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyPtrRecord } from 'dns';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockIpressService {

  constructor(private http: HttpClient) {


  }

  nuevoStock(body: any) {

    return this.http.post<any[]>(environment.url__backend + 'stock-ipress/nuevo', body)
  }

  cargarDetalleStock(codigo_unico:any) {

    return this.http.get<any[]>(environment.url__backend + 'stock-ipress/listar_por_ipress/'+codigo_unico)
  }
}
