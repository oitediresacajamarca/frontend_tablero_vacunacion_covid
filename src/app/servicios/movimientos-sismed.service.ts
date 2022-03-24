import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovimientoSismed } from '../disponibilidad-vacunacion/interfaces/movimiento-sismed';

@Injectable({
  providedIn: 'root'
})
export class MovimientosSismedService {

  constructor(private http:HttpClient) { }

  cargar_todos_movimientos(){

   return this.http.get<MovimientoSismed[]>(environment.url__backend+'distribucion-sismed/listar')
  }

  
  cargar_filtrados_movimientos(filtro:any){

    return this.http.post<MovimientoSismed[]>(environment.url__backend+'distribucion-sismed/filtro',filtro)
   }

   cargar_movimientos_de_red(CODIGO_RED:string){

    return this.http.get<MovimientoSismed[]>(environment.url__backend+'movimientos/red/'+CODIGO_RED)


   }
   cargar_movimientos_de_red_filtros(CODIGO_RED:string,filtro:any){

    return this.http.put<MovimientoSismed[]>(environment.url__backend+'movimientos/red/'+CODIGO_RED,filtro)
   }

   cargar_movimientos_filtro(filtro:any){

    return this.http.post<MovimientoSismed[]>(environment.url__backend+'movimientos/filtro/',filtro)


   }
   cargar_movimientos_cenares(){
    return this.http.get<MovimientoSismed[]>(environment.url__backend_base+'movimientos-vacunas-sismed/dosis_distribuidas_cenares')
   }

   cargar_movimientos_distribuciones_de_red(CODIGO_RED:string){
    return this.http.get<MovimientoSismed[]>(environment.url__backend_base+'movimientos-vacunas-sismed/distribuciones_red/'+CODIGO_RED)
   }


   cargar_movimientos_distribuciones_de_red_ipres_filtro(CODIGO_RED:string,filtro:any){
    return this.http.post<MovimientoSismed[]>(environment.url__backend_base+'movimientos-vacunas-sismed/distribuciones_red_ipress_filtro/'+CODIGO_RED,filtro)
   }

   cargar_movimientos_vacunas_almacenes_especializados(filtro:any){
 
     return this.http.post<MovimientoSismed[]>(environment.url__backend_base+'movimientos-vacunas-sismed/movimientos_sismed_almacen_especializado/'+   filtro.almacen.almcod,filtro)

   }

}
