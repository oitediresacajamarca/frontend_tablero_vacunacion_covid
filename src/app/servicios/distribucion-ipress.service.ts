import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistribucionIpressService {

  constructor(private http: HttpClient) {



  }


  registroDisponibilidad(body: any) {
    return this.http.post<any>(environment.url__backend + 'distribucion_ipress/nuevo/', body)
  }
  cargarDetalle(CODIGO_UNICO:string){
    return this.http.get<any>(environment.url__backend + 'distribucion-ipress/listar/'+CODIGO_UNICO)

  }


}
