import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnviosIpressService {

  constructor(private http:HttpClient) {

   }
   listar_envios(){
    return this.http.get(environment.url__backend+'envios-ipress/listar/')
   }
}
