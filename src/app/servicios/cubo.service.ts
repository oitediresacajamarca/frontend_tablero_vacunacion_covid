import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators'
import { from } from 'rxjs';
var moment = require('moment'); // require


@Injectable({
  providedIn: 'root'
})
export class CuboService {

  query_meta_cobertura_fil_ambito: any = {
    "measures": [
      "DISTRIBUCIONGeograficaMeta.meta"
    ],
    "timeDimensions": [],
    "order": {},
    "dimensions": ["DISTRIBUCIONGeograficaMeta.provincia"],
    "filters": [
      {
        "member": "DISTRIBUCIONGeograficaMeta.provincia",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "DISTRIBUCIONGeograficaMeta.distrito",
        "operator": "contains",
        "values": [

        ]
      }
    ]
  }

  

  query_avance_cobertura_por_ambito: any = {
    "measures": [
      "VACUNADOSCovidFast.dosis_1",
      "VACUNADOSCovidFast.dosis_2"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovidFast.dosis_1": "desc"
    },
    "dimensions": [
      "VACUNADOSCovidFast.provinciaEstablecimiento"
    ],
    "filters": [
      {
        "member": "VACUNADOSCovidFast.provinciaEstablecimiento",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_edad",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.gruporiesgo",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fabricante",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fechaVacunacion",
        "operator": "inDateRange",
        "values": [
          '2021-02-01', '2022-12-30'
        ]
      }
    ]
  }

  query_meta_cobertura: any = {
    "measures": [
      "DISTRIBUCIONGeograficaMeta.meta"
    ],
    "timeDimensions": [],
    "order": {},
    "filters": [
      {
        "member": "DISTRIBUCIONGeograficaMeta.provincia",
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
        "member": "DISTRIBUCIONGeograficaMeta.grupoRiesgo",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "DISTRIBUCIONGeograficaMeta.distrito",
        "operator": "contains",
        "values": [

        ]
      }
    ]
  }
  query_meta: any = {
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

  query_time_line: any = {
    "measures": [
      "VACUNADOSCovidFast.dosis_1",
      "VACUNADOSCovidFast.dosis_2",
      "VACUNADOSCovidFast.dosis_3"
    ],
    "timeDimensions": [
      {
        "dimension": "VACUNADOSCovidFast.fechaVacunacion",
        "granularity": "day"
      }
    ],
    "order": {
      "VACUNADOSCovidFast.fechaVacunacion": "asc"
    },
    "dimensions": [],
    "filters": [
      {
        "member": "VACUNADOSCovidFast.provinciaEstablecimiento",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_edad",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fabricante",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.gruporiesgo",
        "operator": "contains",
        "values": [

        ]
      }, {
        "member": "VACUNADOSCovidFast.fechaVacunacion",
        "operator": "inDateRange",
        "values": [
          '2021-02-01', '2022-12-30'
        ]
      },
      {
        "member": "VACUNADOSCovidFast.urbanidad",
        "operator": "contains",
        "values": [
          
        ]
      }

    ]
  }
  query_vacunados_hoy = {
    "measures": [
      "VACUNADOSCovidFast.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovidFast.fechaNacimiento": "asc"
    },
    "filters": [
      {
        "member": "VACUNADOSCovidFast.provinciaEstablecimiento",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fechaVacunacion",
        "operator": "contains",
        "values": [
          moment(new Date()).format('yyyy-MM-DD')
        ]
      },
      {
        "member": "VACUNADOSCovidFast.dosisAplicada",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_edad",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fabricante",
        "operator": "contains",
        "values": [

        ]
      }, {
        "member": "VACUNADOSCovidFast.grupo_vacunacion",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fechaVacunacion",
        "operator": "inDateRange",
        "values": [
          '2021-02-01', '2022-12-30'
        ]
      },
      {
        "member": "VACUNADOSCovidFast.urbanidad",
      "operator": "contains",
      "values": [
     
      ]
      }



    ]
  }

  query_grupo_vacunacion = {
    "measures": [
      "VACUNADOSCovidFast.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovidFast.count": "desc"
    },
    "filters": [

    ],
    "dimensions": [
      "VACUNADOSCovidFast.grupo_vacunacion"
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
      "VACUNADOSCovidFast.count"
    ],
    "timeDimensions": [],

    "dimensions": [],
    "filters": [
      {
        "member": "VACUNADOSCovidFast.provinciaEstablecimiento",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.dosisAplicada",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_edad",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fabricante",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_vacunacion",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fechaVacunacion",
        "operator": "inDateRange",
        "values": [
          '2021-02-01', '2022-12-30'
        ]
      },
      {
        "member": "VACUNADOSCovidFast.urbanidad",
      "operator": "contains",
      "values": [
     
      ]
      }


    ]
  }

  query_dosis_grupo_riesgo: any = {
    "measures": [
      "VACUNADOSCovidFast.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovidFast.count": "desc"
    },
    "dimensions": [
      "VACUNADOSCovidFast.gruporiesgo"
    ],
    "filters": [
      {
        "member": "VACUNADOSCovidFast.provinciaEstablecimiento",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.dosisAplicada",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_edad",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fabricante",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_vacunacion",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fechaVacunacion",
        "operator": "inDateRange",
        "values": [
          '2021-02-01', '2022-12-30'
        ]
      },
      {

        "member": "VACUNADOSCovidFast.urbanidad",
        "operator": "contains",
        "values": [
          
        ]
      }
     
    ]
  }


  query_stack: any = {
    "measures": [
      "VACUNADOSCovidFast.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovidFast.count": "desc"
    },
    "dimensions": [
      "VACUNADOSCovidFast.provinciaEstablecimiento",
      "VACUNADOSCovidFast.dosisAplicada"
    ],
    "filters": [
      {
        "member": "VACUNADOSCovidFast.grupo_edad",
        "operator": "equals",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fabricante",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_vacunacion",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fechaVacunacion",
        "operator": "inDateRange",
        "values": [
          '2020-06-01', '2022-12-30'
        ]
      }

    ]
  }




  query_stack_distritos: any = {
    "measures": [
      "VACUNADOSCovidFast.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovidFast.count": "desc"
    },
    "filters": [
      {
        "member": "VACUNADOSCovidFast.grupo_edad",
        "operator": "equals",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fabricante",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_vacunacion",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.provinciaEstablecimiento",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fechaVacunacion",
        "operator": "inDateRange",
        "values": [
          '2021-02-01', '2022-12-30'
        ]
      }

    ],
    "dimensions": [
      "VACUNADOSCovidFast.distritoEstablecimiento",
      "VACUNADOSCovidFast.dosisAplicada"
    ]
  }

  query_stack_general: any = {
    "measures": [
      "VACUNADOSCovidFast.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovidFast.count": "desc"
    },
    "filters": [
      {
        "member": "VACUNADOSCovidFast.grupo_edad",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fabricante",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_vacunacion",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.provinciaEstablecimiento",
        "operator": "contains",
        "values": [

        ]
      },
      {
        "member": "VACUNADOSCovidFast.fechaVacunacion",
        "operator": "inDateRange",
        "values": [
          '2020-01-01', '2030-12-30'
        ]
      },
      {
        "member": "VACUNADOSCovidFast.urbanidad",
        "operator": "contains",
        "values": [
          
        ]
      }
    ],
    "dimensions": [
      "VACUNADOSCovidFast.distritoEstablecimiento",
      "VACUNADOSCovidFast.dosisAplicada"
    ]
  }


  query_vacunados_fuera: any = {
    "measures": [
      "VACUNADOSFueraPadronResumen.dosis_1",
      "VACUNADOSFueraPadronResumen.dosis_2"
    ],
    "timeDimensions": [],
    "order": {},
    "filters": [
      {
        "member": "VACUNADOSFueraPadronResumen.provincia",
        "operator": "contains",
        "values": [
          "CHOTA"
        ]
      },
      {
        "member": "VACUNADOSFueraPadronResumen.distrito",
        "operator": "contains",
        "values": [
          "CHOTA"
        ]
      }
    ],
    "dimensions": []
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
        "VACUNADOSCovidFast.count"
      ],
      "timeDimensions": [],
      "order": {
        "VACUNADOSCovidFast.fechaNacimiento": "asc"
      },
      "dimensions": [],
      "filters": [
        {
          "member": "VACUNADOSCovidFast.provinciaEstablecimiento",
          "operator": "contains",
          "values": [
            "CHOTA"
          ]
        },
        {
          "member": "VACUNADOSCovidFast.dosisAplicada",
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
    return this.http.get<any>(environment.url_cubo, { params }).pipe(map((data)=>{if(data.data[0]['VACUNADOSCovidFast.count']==null){

return 0
    }else {
      return data.data[0]['VACUNADOSCovidFast.count']
    }
  
  }))
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

      this.query_stack_general.dimensions[0] = 'VACUNADOSCovidFast.provinciaEstablecimiento'
      this.query_stack_general.filters[3].values = []
      this.query_vacunados_fuera.filters[0].values=[]

    } else {
      this.query_stack_general.dimensions[0] = 'VACUNADOSCovidFast.distritoEstablecimiento'
      this.query_stack_general.filters[3].values = [provincia]
      this.query_vacunados_fuera.filters[0].values=[provincia]
    }


    let params = new HttpParams().set('query', JSON.stringify(this.query_stack_general));
    return this.http.get<any>(environment.url_cubo, { params }).pipe(tap(dato=>{console.log(dato)


    
    }))
  }


  devolver_meta() {


    let params = new HttpParams().set('query', JSON.stringify(this.query_meta));
    return this.http.get<any>(environment.url_cubo, { params })
  }


  devolver_meta_cobertura() {


    let params = new HttpParams().set('query', JSON.stringify(this.query_meta_cobertura));
    return this.http.get<any>(environment.url_cubo, { params })
  }


  devolver_meta_ambitos_fil() {

    let params = new HttpParams().set('query', JSON.stringify(this.query_meta_cobertura_fil_ambito));
    return this.http.get<any>(environment.url_cubo, { params })

  }
  devolver_avances_ambitos() {
    let params = new HttpParams().set('query', JSON.stringify(this.query_avance_cobertura_por_ambito));
    return this.http.get<any>(environment.url_cubo, { params })

  }

  devolver_vacunados_fuera() {
    let params = new HttpParams().set('query', JSON.stringify(this.query_vacunados_fuera));
    return this.http.get<any>(environment.url_cubo, { params }).pipe(tap(),map(data=>{
      return data.data
    }))

  }

  devolver_urbanidades() {

    return [{name:"A2 CIUDADES INTERMEDIAS"},{name:"RURAL"},{name:"A2.1 CAPITALES PROVINCIAS"},{name:"RESTO URBANO"}]
    
  
  }

}





