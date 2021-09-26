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
}
