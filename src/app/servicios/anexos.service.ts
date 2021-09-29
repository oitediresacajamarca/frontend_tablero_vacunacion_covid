import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AnexosService {

  constructor(private http: HttpClient) { }

  devolver_listado_anexos() {

    return this.http.get<any[]>(environment.url__backend + 'recepcion-anexos/listar')

  }

  nuevo(body: any) {

    return this.http.post(environment.url__backend + 'recepcion-anexos/nuevo', body)

  }
}
