import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnviosRedService {

  constructor(private http: HttpClient) { }

  listar_envios(id: string) {
    return this.http.get<any[]>(environment.url__backend + 'envios-red/listar/' + id)
  }

  nuevo_envio(body: string) {
    return this.http.post<any[]>(environment.url__backend + 'envios-red/nuevo/', body)
  }
  eliminar_envio(id: string) {
    return this.http.get<any[]>(environment.url__backend + 'envios-red/eliminar/' + id)
  }
}
