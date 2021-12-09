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
}
