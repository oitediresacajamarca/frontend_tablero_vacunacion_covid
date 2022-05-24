import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PadronInterface } from 'src/app/seguimiento-vacunacion/padron-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PadronesServiceService {

  constructor(private http: HttpClient) { }
  cargar_padron(renipress: string) {
    return this.http.get<PadronInterface[]>(environment.url__backend_base + 'afiliados-sis/padrones/' + renipress)
  }
}
