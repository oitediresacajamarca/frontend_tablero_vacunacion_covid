import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AmbitoService {

  constructor(private http:HttpClient) { }

  cargar_ambito(nivel:string,raiz:string){

    return this.http.get<any>(environment.url__backend_base+'ambito/'+nivel+'/'+raiz)
  }
  cargar_ambito_segun_ubigeo(nivel:string,ubigeo:string){

    return this.http.get<any>(environment.url__backend_base+'ambito/por_ubigeo/'+nivel+'/'+ubigeo)
  }
}
