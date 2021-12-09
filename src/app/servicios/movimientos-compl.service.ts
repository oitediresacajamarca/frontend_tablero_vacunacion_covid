import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovimientosComplService {

  constructor(private http :HttpClient) { }


  asignar(data:any){
  return  this.http.post(environment.url__backend_base+'movimiento-vacunas-compl/asignar',data)
  }
}
