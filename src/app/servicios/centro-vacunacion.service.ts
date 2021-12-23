import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CentroVacunacionService {

  constructor(private http: HttpClient) { }
  cargar_centros_por_ubigeo(ubigeo: string) {
    return this.http.get<any[]>(environment.url__backend_base + 'centro-vacunacion/listar_por_ubigeo/' + ubigeo)
  }
  cargar_centros_por_ubigeo_tipo_centro(ubigeo: string,tipo_centro:string) {
    return this.http.get<any[]>(environment.url__backend_base + 'centro-vacunacion/listar_por_ubigeo_tipo_centro/' + ubigeo+'/'+tipo_centro)
  }
  
}
