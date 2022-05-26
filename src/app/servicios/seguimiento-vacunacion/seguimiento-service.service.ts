import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoServiceService {

  constructor(private http: HttpClient) { }
  nuevo_seguimiento(data: any) {
    return this.http.post(environment.url__backend_base + 'seguimiento-vacunacion/nuevo', data)
  }
}
