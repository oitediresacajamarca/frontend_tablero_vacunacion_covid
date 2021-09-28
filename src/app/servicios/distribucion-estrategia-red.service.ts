import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistribucionEstrategiaRedService {

  constructor(private http: HttpClient) { }


  query_cantidad_asiganda:any = {
    "measures": [
      "DISTRIBUCIONDosisPorProvinicia.cantidad_asignada_dosis"
    ],

    "dimensions": [],
    "filters": [
      {
        "member": "DISTRIBUCIONDosisPorProvinicia.codProvincia",
        "operator": "contains",
        "values": [
  
        ]
      },
      {
        "member": "DISTRIBUCIONDosisPorProvinicia.fabricante",
        "operator": "contains",
        "values": [
       
        ]
      }
    ]
  }

  
  query_dosis_suministradas:any ={
    "filters": [
      {
        "member": "VACUNADOSCovid.provinciaEstablecimiento",
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
    ]
    
  }
  crear_nueva(nueva: any) {
    return this.http.post<any>(environment.url__backend + 'distribucion-estrategia-red/nuevo', nueva)
  }

  listar() {
    return this.http.get<any>(environment.url__backend + 'distribucion-estrategia-red/listar')
  }

  eliminar(id: any) {
    return this.http.get<any>(environment.url__backend + 'distribucion-estrategia-red/eliminar/' + id)
  }

  reporte_cuadro() {
    return this.http.get<any>(environment.url__backend + 'distribucion-estrategia-red/cuadro_listar/')
  }

  dosis_asignadas_() {
    let params = new HttpParams().set('query', JSON.stringify(this.query_cantidad_asiganda));
    return this.http.get<any>(environment.url_cubo, { params })
    .pipe(
      map(dato => {
        if (dato.data[0]['DISTRIBUCIONDosisPorProvinicia.cantidad_asignada_dosis'] == null) { return 0 }
        else {

          return dato.data[0]['DISTRIBUCIONDosisPorProvinicia.cantidad_asignada_dosis']
        }


      }))

  }

  dosis_suministradas() { 
    let params = new HttpParams().set('query', JSON.stringify(this.query_dosis_suministradas));
    return this.http.get<any>(environment.url_cubo, { params })  .pipe(
      map(dato => {
        if (dato.data[0]["VACUNADOSCovid.count"] == null) { return 0 }
        else {
          return dato.data[0]["VACUNADOSCovid.count"]
        }
      }))

  }
}

