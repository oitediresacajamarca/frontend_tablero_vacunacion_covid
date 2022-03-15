import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IpressService {

  constructor(private http: HttpClient) { }

  cargar_ipress_por_cod_microred(id_microred: string) {
    return this.http.get<any[]>(environment.url__backend_base + 'ipress/listar_por_id_microred/' + id_microred)

  }

}
