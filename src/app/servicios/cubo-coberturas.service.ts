import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
var moment = require('moment'); // require


@Injectable({
  providedIn: 'root'
})
export class CuboCoberturasService {

  constructor( private http:HttpClient) { }

  query_pie_avance:any
  =
  {
    "measures": [
      "VACUNADOSCovidFast.count"
    ],
    "timeDimensions": [],
    "order": {
      "VACUNADOSCovidFast.count": "desc"
    },
    "filters": [
      {
        "member": "VACUNADOSCovidFast.fabricante",
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
      }
    ],
    "dimensions": [
      "VACUNADOSCovidFast.grupo_vacunacion"
    ]
  }
  query_time_line_avance:any={
    "measures": [
      "VACUNADOSCovidFast.dosis_1",
      "VACUNADOSCovidFast.dosis_2"
    ],
    "timeDimensions": [
      {
        "dimension": "VACUNADOSCovidFast.fechaVacunacion",
        "granularity": "day"
      }
    ],
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
        "member": "VACUNADOSCovidFast.fabricante",
        "operator": "contains",
        "values": [
          "PFIZER"
        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_edad",
        "operator": "contains",
        "values": [
          "70-79"
        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_vacunacion",
        "operator": "contains",
        "values": [
          "Adulto Mayor"
        ]
      }
    ]
  }
 query_avance_dosis_1:any= {
    "measures": [
      "VACUNADOSCovidFast.dosis_1",
      "VACUNADOSCovidFast.dosis_2",
      "VACUNADOSCovidFast.dosis_3",
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
        "member": "VACUNADOSCovidFast.fabricante",
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
        "member": "VACUNADOSCovidFast.grupo_vacunacion",
        "operator": "contains",
        "values": [
      
        ]
      }
    ]
  }

  query_avance_hoy:any= {
    "measures": [
      "VACUNADOSCovidFast.dosis_1",
      "VACUNADOSCovidFast.dosis_2",
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
        "member": "VACUNADOSCovidFast.fabricante",
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
        "member": "VACUNADOSCovidFast.grupo_vacunacion",
        "operator": "contains",
        "values": [
      
        ]
      },
      {
        "member": "VACUNADOSCovidFast.fechaVacunacion",
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
      "VACUNADOSCovidFast.dosis_1",
      "VACUNADOSCovidFast.dosis_2",
      "VACUNADOSCovidFast.dosis_3"
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
        "member": "VACUNADOSCovidFast.fabricante",
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
        "member": "VACUNADOSCovidFast.grupo_edad",
        "operator": "contains",
        "values": [
     
        ]
      },
      {
        "member": "VACUNADOSCovidFast.grupo_vacunacion",
        "operator": "contains",
        "values": [
        
        ]
      }
    ]
  }

  devolver_total_dosis_1(){


    let params = new HttpParams().set('query', JSON.stringify(this.query_avance_dosis_1));
    return this.http.get<any>(environment.url_cubo, { params })
  }

  devolver_meta_dosis(){
    
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


  



