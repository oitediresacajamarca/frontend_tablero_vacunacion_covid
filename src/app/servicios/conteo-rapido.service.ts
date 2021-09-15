import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConteoRapidoService {

  constructor( private http:HttpClient) { 


  }

  nuevoConteo(body:any){
    return this.http.post<any>(environment.url__backend + 'conteo_rapido/nuevo/', body)
  }


  cargarDetalle(ubigeo:any){
    return this.http.get<any>(environment.url__backend + 'conteo_rapido/detalle/'+ubigeo)
  }

}
