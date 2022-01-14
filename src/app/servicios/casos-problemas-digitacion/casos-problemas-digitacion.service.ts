import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CasosProblemasDigitacionService {

  constructor(private http:HttpClient) { }
  guardar_nuevo_caso(data:any){
    return this.http.post<any>(environment.url__backend_base+'registros-con-problemas-digitacion/nuevo',data)
  }
  cargar_registrados_por_ubigeo(ubigeo:string){

    return this.http.get<any>(environment.url__backend_base+'registros-con-problemas-digitacion/listar_por_ubigeo/'+ubigeo)
  }
  
}
