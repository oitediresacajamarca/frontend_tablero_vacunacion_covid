import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
var moment = require('moment'); // require


@Injectable({
  providedIn: 'root'
})
export class CuboCoberturasService {

  constructor( private http:HttpClient) { }

  query_pie_avance:any={
    "measures": [
      "VACUNADOSCovid.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovid.count": "desc"
    },
    "filters": [
      {
        "member": "VACUNADOSCovid.fabricante",
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
      "VACUNADOSCovid.grupo_vacunacion"
    ]
  }
  query_time_line_avance:any={
    "measures": [
      "VACUNADOSCovid.dosis_1",
      "VACUNADOSCovid.dosis_2"
    ],
    "timeDimensions": [
      {
        "dimension": "VACUNADOSCovid.fechaVacunacion",
        "granularity": "day"
      }
    ],
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
        "member": "VACUNADOSCovid.fabricante",
        "operator": "contains",
        "values": [
          "PFIZER"
        ]
      },
      {
        "member": "VACUNADOSCovid.grupo_edad",
        "operator": "contains",
        "values": [
          "70-79"
        ]
      },
      {
        "member": "VACUNADOSCovid.grupo_vacunacion",
        "operator": "contains",
        "values": [
          "Adulto Mayor"
        ]
      }
    ]
  }
 query_avance_dosis_1:any= {
    "measures": [
      "VACUNADOSCovid.dosis_1",
      "VACUNADOSCovid.dosis_2",
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
        "member": "VACUNADOSCovid.fabricante",
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
        "member": "VACUNADOSCovid.grupo_vacunacion",
        "operator": "contains",
        "values": [
      
        ]
      }
    ]
  }

  query_avance_hoy:any= {
    "measures": [
      "VACUNADOSCovid.dosis_1",
      "VACUNADOSCovid.dosis_2",
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
        "member": "VACUNADOSCovid.fabricante",
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
        "member": "VACUNADOSCovid.grupo_vacunacion",
        "operator": "contains",
        "values": [
      
        ]
      },
      {
        "member": "VACUNADOSCovid.fechaVacunacion",
        "operator": "equals",
        "values": [
          moment(new Date()).format('yyyy-MM-DD')
        ]
      }
    ]
  }
  query_meta_dosis:any={
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
        "member": "DISTRIBUCIONGeograficaMeta.distrito",
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
      }
    ]
  }

  query_meta_dosis_ambito:any={
    "dimensions": [
      "DISTRIBUCIONGeograficaMeta.provincia"
    ],
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
        "member": "DISTRIBUCIONGeograficaMeta.distrito",
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
      }
    ]
  }

  query_avance_stack:any={
    "measures": [
      "VACUNADOSCovid.dosis_1",
      "VACUNADOSCovid.dosis_2"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovid.dosis_1": "desc"
    },
    "dimensions": [
      "VACUNADOSCovid.provinciaEstablecimiento"
    ],
    "filters": [
      {
        "member": "VACUNADOSCovid.fabricante",
        "operator": "contains",
        "values": [
  
        ]
      },
      {
        "member": "VACUNADOSCovid.provinciaEstablecimiento",
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
        "member": "VACUNADOSCovid.grupo_vacunacion",
        "operator": "contains",
        "values": [
        
        ]
      }
    ]
  }

  devolver_total_dosis_1(){

console.log(this.query_avance_dosis_1)
    let params = new HttpParams().set('query', JSON.stringify(this.query_avance_dosis_1));
    return this.http.get<any>(environment.url_cubo, { params })
  }

  devolver_meta_dosis(){
    console.log(this.query_meta_dosis)
    let params = new HttpParams().set('query', JSON.stringify(this.query_meta_dosis));
    return this.http.get<any>(environment.url_cubo, { params })
  }

  devolver_dosis_hoy(){
    let params = new HttpParams().set('query', JSON.stringify(this.query_avance_hoy));
    return this.http.get<any>(environment.url_cubo, { params })
  }

  devolver_dosis_por_aambito(){
    let params = new HttpParams().set('query', JSON.stringify(this.query_avance_stack));
    return this.http.get<any>(environment.url_cubo, { params })
  }

  devolver_meta_dosis_filtro(filtro:any){
    let params = new HttpParams().set('query', JSON.stringify(filtro));
    return this.http.get<any>(environment.url_cubo, { params })
  }
  devolver_linea_tiempo_avance(){
    let params = new HttpParams().set('query', JSON.stringify(this.query_time_line_avance));
    return this.http.get<any>(environment.url_cubo, { params })
  }

  devolver_pie(){
    let params = new HttpParams().set('query', JSON.stringify(this.query_pie_avance));
    return this.http.get<any>(environment.url_cubo, { params })
  }
  devolver_meta_ambitos(){
    let params = new HttpParams().set('query', JSON.stringify(this.query_meta_dosis_ambito));
    return this.http.get<any>(environment.url_cubo, { params })
  }




  }


  



