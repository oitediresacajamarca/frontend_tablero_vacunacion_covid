import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  login(credenciales: any) {

    const resp = this.http.post<any>(environment.url__backend_base + 'usuarios/login', credenciales)

    return resp
  }

  litar_por_ambito(ambito: any) {

    const resp = this.http.get<any>(environment.url__backend_base + 'usuarios/listar_por_ambito/' + ambito)

    return resp
  }

  litar_roles() {

    const resp = this.http.get<any>(environment.url__backend_base + 'usuarios/listar_roles/')

    return resp
  }
  nuevo_usuario(datos:any){
    const resp = this.http.post<any>(environment.url__backend_base + 'usuarios/nuevo/',datos)

    return resp

  }
}
