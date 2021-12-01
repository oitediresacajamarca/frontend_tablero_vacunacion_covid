import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MicroRedService {

  constructor(private http:HttpClient) { }

  cargar_microred_por_id_red(id_red:string){
    return this.http.get<any[]>(environment.url__backend_base+'microred/listar_por_idred/'+id_red)
  }
}
