import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistribucionIpressService {

  constructor(private http: HttpClient) {



  }

  query_avances: any = {
    "filters": [
      {
        "member": "VACUNADOSCovid.codigo_unico",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.fabricante",
        "operator": "contains",
        "values": [

        ]
      }
    ],
    "measures": [
      "VACUNADOSCovid.count"
    ],
    "timeDimensions": [],
    "order": {}
  }

  query_cantidad_asiganda: any = {
    "measures": [
      "DISTRIBUCIONPorIpress.DOSIS_RECIBIDAS"
    ],

    "dimensions": [],
    "filters": [
      {
        "member": "DISTRIBUCIONPorIpress.codigoUnico",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "DISTRIBUCIONPorIpress.fabricante",
        "operator": "contains",
        "values": [

        ]
      }
    ]
  }




  registroDisponibilidad(body: any) {
    return this.http.post<any>(environment.url__backend + 'distribucion_ipress/nuevo/', body)
  }
  cargarDetalle(CODIGO_UNICO: string) {
    return this.http.get<any>(environment.url__backend + 'distribucion-ipress/listar/' + CODIGO_UNICO)

  }

  cargarDetalleTotal() {
    return this.http.get<any>(environment.url__backend + 'distribucion-ipress/listar/')

  }
  eliminarDistribucion(id: any) {
    return this.http.get<any>(environment.url__backend + 'distribucion-red-ipress/eliminar/' + id)
  }

  cargarDosisAplicadas() {
    let params = new HttpParams().set('query', JSON.stringify(this.query_avances));
    return this.http.get<any>(environment.url_cubo, { params }).pipe(map(data => {

      return data.data[0]['VACUNADOSCovid.count']
    }))
  }

  cargarDosisRecibidas() {
    let params = new HttpParams().set('query', JSON.stringify(this.query_cantidad_asiganda));
    return this.http.get<any>(environment.url_cubo, { params }).pipe(map(data => {

      if (data.data[0]['DISTRIBUCIONPorIpress.DOSIS_RECIBIDAS'] == null) {
        return 0
      } else {

        return data.data[0]['DISTRIBUCIONPorIpress.DOSIS_RECIBIDAS']
      }

    }))
  }



}
