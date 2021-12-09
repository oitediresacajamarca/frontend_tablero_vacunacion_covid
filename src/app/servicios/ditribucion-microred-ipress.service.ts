import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DitribucionMicroredIpressService {

  constructor(private http: HttpClient) { }

  cargar_distribuciones_desde_microred(CABECERA: number) {
    return this.http.get(environment.url__backend_base + 'movimientos-vacunas-sismed/distribuciones_mircored_ipress/' + CABECERA)
  }
  nuevo(data:any){
    return this.http.post(environment.url__backend_base + 'distribucion-vacunas/distribucion_ipress_desde_mic/nuevo/' , data)
  }
}
