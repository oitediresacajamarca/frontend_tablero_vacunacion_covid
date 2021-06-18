import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var moment = require('moment'); // require


@Injectable({
  providedIn: 'root'
})
export class CuboService {

  query_meta:any={
    "measures": [
      "DISTRIBUCIONGeograficaMeta.meta"
    ],
    "timeDimensions": [],
    "order": {
      "DISTRIBUCIONGeograficaMeta.meta": "desc"
    },
    "dimensions": [
     
    ],
    "filters": [
      {
        "member": "DISTRIBUCIONGeograficaMeta.grupoRiesgo",
        "operator": "contains",
        "values": [
     
        ]
      },
      {
        "member": "DISTRIBUCIONGeograficaMeta.grupoMeta",
        "operator": "contains",
        "values": [
     
        ]
      },
      {
        "member": "DISTRIBUCIONGeograficaMeta.provincia",
        "operator": "contains",
        "values": [
   
        ]
      }
    ]
  }

  query_time_line = {
    "measures": [
      "VACUNADOSCovid.count"
    ],
    "timeDimensions": [
      {
        "dimension": "VACUNADOSCovid.fechaVacunacion",
        "granularity": "day"
      }
    ],
    "order": {
      "VACUNADOSCovid.fechaVacunacion": "asc"
    },
    "filters": [],
    "dimensions": [
      "VACUNADOSCovid.dosisAplicada"
    ]
  }
  query_vacunados_hoy = {
    "measures": [
      "VACUNADOSCovid.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovid.fechaNacimiento": "asc"
    },
    "filters": [
      {
        "member": "VACUNADOSCovid.provinciaEstablecimiento",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.fechaVacunacion",
        "operator": "contains",
        "values": [
          moment(new Date()).format('yyyy-MM-DD')
        ]
      },
      {
        "member": "VACUNADOSCovid.dosisAplicada",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.grupo_edad",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.fabricante",
        "operator": "contains",
        "values": [
          "PFIZER"
        ]
      }, {
        "member": "VACUNADOSCovid.grupo_vacunacion",
        "operator": "contains",
        "values": [

        ]
      }


    ]
  }

  query_grupo_vacunacion = {
    "measures": [
      "VACUNADOSCovid.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovid.count": "desc"
    },
    "filters": [

    ],
    "dimensions": [
      "VACUNADOSCovid.grupo_vacunacion"
    ]
  }


  query_maestro_provincias = {
    "measures": [
      "DISTRIBUCIONGeografica.count"
    ],
    "timeDimensions": [],
    "order": {
      "DISTRIBUCIONGeografica.count": "desc"
    },
    "filters": [],
    "dimensions": [
      "DISTRIBUCIONGeografica.provincia"
    ]
  }


  query_dosis: any = {
    "measures": [
      "VACUNADOSCovid.count"
    ],
    "timeDimensions": [],

    "dimensions": [],
    "filters": [
      {
        "member": "VACUNADOSCovid.provinciaEstablecimiento",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.dosisAplicada",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.grupo_edad",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.fabricante",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.grupo_vacunacion",
        "operator": "contains",
        "values": [

        ]
      }

    ]
  }

  query_dosis_grupo_riesgo: any = {
    "measures": [
      "VACUNADOSCovid.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovid.count": "desc"
    },
    "dimensions": [
      "VACUNADOSCovid.gruporiesgo"
    ],
    "filters": [
      {
        "member": "VACUNADOSCovid.provinciaEstablecimiento",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.dosisAplicada",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.grupo_edad",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.fabricante",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.grupo_vacunacion",
        "operator": "contains",
        "values": [

        ]
      }
    ]
  }


  query_stack: any = {
    "measures": [
      "VACUNADOSCovid.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovid.count": "desc"
    },
    "dimensions": [
      "VACUNADOSCovid.provinciaEstablecimiento",
      "VACUNADOSCovid.dosisAplicada"
    ],
    "filters": [
      {
        "member": "VACUNADOSCovid.grupo_edad",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.fabricante",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.grupo_vacunacion",
        "operator": "contains",
        "values": [

        ]
      }

    ]
  }




  query_stack_distritos: any = {
    "measures": [
      "VACUNADOSCovid.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovid.count": "desc"
    },
    "filters": [
      {
        "member": "VACUNADOSCovid.grupo_edad",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.fabricante",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.grupo_vacunacion",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.provinciaEstablecimiento",
        "operator": "contains",
        "values": [

        ]
      }
    ],
    "dimensions": [
      "VACUNADOSCovid.distritoEstablecimiento",
      "VACUNADOSCovid.dosisAplicada"
    ]
  }

  query_stack_general: any = {
    "measures": [
      "VACUNADOSCovid.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovid.count": "desc"
    },
    "filters": [
      {
        "member": "VACUNADOSCovid.grupo_edad",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.fabricante",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.grupo_vacunacion",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovid.provinciaEstablecimiento",
        "operator": "contains",
        "values": [

        ]
      }
    ],
    "dimensions": [
      "VACUNADOSCovid.distritoEstablecimiento",
      "VACUNADOSCovid.dosisAplicada"
    ]
  }


  constructor(private http: HttpClient) {

  }

  devolver_total_por_dosis(dosis: any) {
    this.query_dosis.filters[1].values = dosis


    let params = new HttpParams().set('query', JSON.stringify(this.query_dosis));
    return this.http.get<any>(environment.url_cubo, { params })

  }





  devolver_total_primera_dosis() {

    let query: any = {
      "measures": [
        "VACUNADOSCovid.count"
      ],
      "timeDimensions": [],
      "order": {
        "VACUNADOSCovid.fechaNacimiento": "asc"
      },
      "dimensions": [],
      "filters": [
        {
          "member": "VACUNADOSCovid.provinciaEstablecimiento",
          "operator": "contains",
          "values": [
            "CHOTA"
          ]
        },
        {
          "member": "VACUNADOSCovid.dosisAplicada",
          "operator": "contains",
          "values": [
            "1ª dosis"
          ]
        }
      ]
    }

    let params = new HttpParams().set('query', JSON.stringify(query));
    return this.http.get<any>(environment.url_cubo, { params })
  }


  devolver_dosis_provincia() {

    let params = new HttpParams().set('query', JSON.stringify(this.query_stack));
    return this.http.get<any>(environment.url_cubo, { params })
  }

  devolver_dosis_por_grupo() {
    let params = new HttpParams().set('query', JSON.stringify(this.query_dosis_grupo_riesgo));
    return this.http.get<any>(environment.url_cubo, { params })

  }

  devolver_vacunados_hoy() {


    let params = new HttpParams().set('query', JSON.stringify(this.query_vacunados_hoy));
    return this.http.get<any>(environment.url_cubo, { params })
  }

  devolver_maestro_provincias() {
    let params = new HttpParams().set('query', JSON.stringify(this.query_maestro_provincias));
    return this.http.get<any>(environment.url_cubo, { params })
  }

  devolver_linea_tiempo() {
    let params = new HttpParams().set('query', JSON.stringify(this.query_time_line));
    return this.http.get<any>(environment.url_cubo, { params })
  }

  devolver_maestro_grupos_vacunacion() {
    let params = new HttpParams().set('query', JSON.stringify(this.query_grupo_vacunacion));
    return this.http.get<any>(environment.url_cubo, { params })
  }

  devolver_dosis_distritos(provincia: string) {
    this.query_stack_distritos.filters[3].values = [provincia]
    let params = new HttpParams().set('query', JSON.stringify(this.query_stack_distritos));
    return this.http.get<any>(environment.url_cubo, { params })
  }


  devolver_dosis_ambito(provincia: string) {

    if (provincia == 'TODOS') {

      this.query_stack_general.dimensions[0] = 'VACUNADOSCovid.provinciaEstablecimiento'
      this.query_stack_general.filters[3].values = []
    } else {
      this.query_stack_general.dimensions[0] = 'VACUNADOSCovid.distritoEstablecimiento'
      this.query_stack_general.filters[3].values = [provincia]
    }
    console.log(this.query_stack_general)

    let params = new HttpParams().set('query', JSON.stringify(this.query_stack_general));
    return this.http.get<any>(environment.url_cubo, { params })
  }


  devolver_meta() {


    let params = new HttpParams().set('query', JSON.stringify(this.query_meta));
    return this.http.get<any>(environment.url_cubo, { params })
  }




}
