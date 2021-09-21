import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BodyComponent } from '../body/body.component';

@Injectable({
  providedIn: 'root'
})
export class DistribucionRedService {

  constructor(private http: HttpClient) { }

  listarDistribucionRed() {
    return this.http.get<any[]>(environment.url__backend + 'distribucion_red/listar_/')
  }

  nuevoDistribucionRed(  body:any) {

    return this.http.post<any[]>(environment.url__backend + 'distribucion_red/nuevo/',body)
  }

  listarDistribucionRedId(id:any) {
    return this.http.get<any[]>(environment.url__backend + 'distribucion_red/listar_id/'+id)
  }
}

