import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResgistrosCentrosService {

  constructor(private http: HttpClient) { }

  cargarResgistrosPorCentros(id_centro: string) {
    return this.http.get<any[]>(environment.url__backend_base + 'registro-centro-vacunacion/listar_por_centro/' + id_centro)

  }

  nuevoResgistrosPorCentros(id_centro: string, datos: any) {
    return this.http.post<any>(environment.url__backend_base + 'registro-centro-vacunacion/nuevo/' + id_centro, datos)
  }
  eliminarRegistro(id: any) {
    return this.http.delete(environment.url__backend_base + 'registro-centro-vacunacion/eliminar', { body: { id } })
  }
  cargarRegistrosPorUbigeoyFecha(ubigeo:string,fecha:any) {
    return this.http.post<any[]>(environment.url__backend_base+'registro-centro-vacunacion/ubigeofecha/'+ubigeo,{fecha})
  }
  modificarRegistro(id:any,data:any){
    return this.http.post<any[]>(environment.url__backend_base+'registro-centro-vacunacion/actualizar/'+id,data)

  }

}
