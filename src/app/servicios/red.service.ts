import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RedService {

  constructor(private http: HttpClient) { }

  cargar_redes(){
    return this.http.get<any[]>(environment.url__backend_base+'red/listar')
  }
}
