import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistribucionEstrategiaRedService {

  constructor(private http:HttpClient) { }

  crear_nueva(nueva:any){
  return  this.http.post<any>(environment.url__backend+'distribucion-estrategia-red/nuevo',nueva)
  }

  listar(){
    return  this.http.get<any>(environment.url__backend+'distribucion-estrategia-red/listar')
    }

    eliminar(id:any){
      return  this.http.get<any>(environment.url__backend+'distribucion-estrategia-red/eliminar/'+id)
      }

      reporte_cuadro(){
        return  this.http.get<any>(environment.url__backend+'distribucion-estrategia-red/cuadro_listar/')
        }
}

