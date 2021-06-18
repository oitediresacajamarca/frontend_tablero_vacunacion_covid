
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CuboService } from '../servicios/cubo.service';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-coberturas',
  templateUrl: './coberturas.component.html',
  styleUrls: ['./coberturas.component.scss']
})
export class CoberturasComponent implements OnInit {

  total_1_dosis: number = 0;
  total_2_dosis: number = 0;
  total_dosis: number = 0
  vacunados_hoy: number = 0;
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = true
  DEPARTAMENTOS_FILTRO: string[] = []
  provincias: any[] = []
  grupos_vacunacion: any[] = []
  chart: any
  donut: any

  meta: number = 0
  avance: number = 0
  cobertura: string='0'


  datos_tablas: any[] = []

  //filtros
  provincia_selecionada: string = ''
  dosis_selecionada: string = ''
  grupo_edad_seleccionado = ''
  fabricante_selecionado = ''
  grupo_vacunacion_selecionado = ''



  //eventos

  @Output() seleciono_provincia = new EventEmitter<string>()

  update() {

  }

  linea_tiempo: any

  opciones_pie: any = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    title: {
      style: {
        display: 'none'
      }
    },

    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45
      }
    },
    series: [{
      name: 'Grupo de Riesgo',
      data: [
        ['Bananas', 8],
        ['Kiwi', 3],
        ['Mixed nuts', 1],
        ['Oranges', 6],
        ['Apples', 8],
        ['Pears', 4],
        ['Clementines', 4],
        ['Reddish (bag)', 1],
        ['Grapes (bunch)', 1]
      ]
    }]
  }

  opciones_linea_tiempo: any = {
    chart: {
      type: 'spline',
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1
      }
    },
    title: {
      text: 'Vacunacion Diaria',
      align: 'left'
    },
    subtitle: {
      text: '13th & 14th of February, 2018 at two locations in Vik i Sogn, Norway',
      align: 'left'
    },
    xAxis: {
      type: 'datetime',
      labels: {
        overflow: 'justify'
      }
    },
    yAxis: {
      title: {
        text: 'Dosis Aplicadas por dia'
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
      plotBands: [{ // Light air
        from: 0.3,
        to: 1.5,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {

          style: {
            color: '#606060'
          }
        }
      }, { // Light breeze
        from: 1.5,
        to: 3.3,
        color: 'rgba(0, 0, 0, 0)',
        label: {

          style: {
            color: '#606060'
          }
        }
      }, { // Gentle breeze
        from: 3.3,
        to: 5.5,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {

          style: {
            color: '#606060'
          }
        }
      }, { // Moderate breeze
        from: 5.5,
        to: 8,
        color: 'rgba(0, 0, 0, 0)',
        label: {

          style: {
            color: '#606060'
          }
        }
      }, { // Fresh breeze
        from: 8,
        to: 11,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {

          style: {
            color: '#606060'
          }
        }
      }, { // Strong breeze
        from: 11,
        to: 14,
        color: 'rgba(0, 0, 0, 0)',
        label: {

          style: {
            color: '#606060'
          }
        }
      }, { // High wind
        from: 14,
        to: 15,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {

          style: {
            color: '#606060'
          }
        }
      }]
    },
    tooltip: {
      valueSuffix: ' dosis/dia'
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        pointInterval: 3600000 * 24, // one hour
        pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
      }
    },
    series: [{
      name: '1ra Dosis',
      data: [
        3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
        6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
        9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
        10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
        10.1
      ]

    }, {
      name: '2da Dosis',
      data: [
        0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
        0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
        0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
        0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
        1.5
      ]
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  }




  opciones: any = {
    chart: {
      type: 'bar'
    },
    labels: {
      items: [{
        html: undefined,
        style: undefined
      }],
      style: { "color": "#333333", "position": "absolute" }
    },
    title: {
      text: 'DOSIS APLICADAS POR PROVINCIA'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total de dosis aplicadas'
      }
    },
    legend: {
      reversed: false
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [
      {
        name: 'PRIMERA DOSIS',
        data: [5, 3, 4, 7, 2, 9]
      }, {
        name: 'SEGUNDA DOSIS',
        data: [2, 2, 3, 2, 1, 15]
      }
    ]
  }






  constructor(private cubo: CuboService) { }

  async ngOnInit(): Promise<void> {



    this.cargar_1ra_dosis()
    this.cargar_2da_dosis()
    this.cargar_dosis_total()
    this.cargar_vacunacion_hoy()
    this.cargar_provincias()
    this.cargar_grupos_vacunacion()

    await this.cargar_Datos_stacked_provincias()
    this.cargarDatosPie()
    this.cargar_linea_tiempo()
    this.cargar_cobertura()




  }

  cargar_1ra_dosis() {
    this.cubo.devolver_total_por_dosis(['1ª dosis']).subscribe(respuesta => {

      this.total_1_dosis = respuesta.data[0]['VACUNADOSCovid.count']

    })
  }


  cargar_2da_dosis() {
    this.cubo.devolver_total_por_dosis(['2ª dosis']).subscribe(respuesta => {

      this.total_2_dosis = respuesta.data[0]['VACUNADOSCovid.count']

    })
  }

  cargar_dosis_total() {
    this.cubo.devolver_total_por_dosis(['2ª dosis', '1ª dosis']).subscribe(respuesta => {

      this.total_dosis = respuesta.data[0]['VACUNADOSCovid.count']

    })
  }

  cargarDatosPie() {

    this.donut = new Chart(this.opciones_pie)

    this.cubo.devolver_dosis_por_grupo().subscribe(respuesta => {

      let res: any[] = respuesta.data
      this.opciones_pie.series[0].data = res.map(grupo => {
        return [grupo['VACUNADOSCovid.gruporiesgo'], grupo['VACUNADOSCovid.count']]

      })


      this.donut = new Chart(this.opciones_pie)

    
    })



  }


  cargar_linea_tiempo() {
    let datos: any[] = []
    let dosis_1:any[]=[]
    let dosis_2:any[]=[]

    
    this.cubo.devolver_linea_tiempo().subscribe(respuesta => {
      datos = respuesta.data
      dosis_1=   datos.filter(dato=>{
return dato['VACUNADOSCovid.dosisAplicada']=='1ª dosis'

      }).map(dato=>{

     return   dato['VACUNADOSCovid.count']
      })

      dosis_2=   datos.filter(dato=>{
        return dato['VACUNADOSCovid.dosisAplicada']=='2ª dosis'
        
              }).map(dato=>{
        
             return   dato['VACUNADOSCovid.count']
              })

console.log(dosis_1)

      this.opciones_linea_tiempo.series[0].data=dosis_1
      this.opciones_linea_tiempo.series[1].data=dosis_2


      this.linea_tiempo = new Chart(this.opciones_linea_tiempo)      
      console.log(this.opciones_linea_tiempo)
    })


  }

  async cargar_Datos_stacked_provincias() {
    let primeras_dosis: any[] = []
    let segunda_dosis: any[] = []


    await this.cubo.devolver_dosis_ambito('TODOS').subscribe(respuesta => {

      console.log(respuesta)
      let categorias = []
      let
        datos: any[] = respuesta.data



      categorias = datos.map(data => {

        return data['VACUNADOSCovid.provinciaEstablecimiento']

      }).filter(
        (item, index, arr) => {
          return arr.indexOf(item) == index
        })
      this.opciones.xAxis.categories = categorias





      categorias.map(depa => {
        primeras_dosis.push(datos.filter((dos) => {

          return dos['VACUNADOSCovid.provinciaEstablecimiento'] == depa && dos['VACUNADOSCovid.dosisAplicada'] == '1ª dosis'

        }).map(fil => {
          return fil['VACUNADOSCovid.count']
        }))


        segunda_dosis.push(datos.filter((dos) => {

          return dos['VACUNADOSCovid.provinciaEstablecimiento'] == depa && dos['VACUNADOSCovid.dosisAplicada'] == '2ª dosis'

        }).map(fil => {
          return fil['VACUNADOSCovid.count']
        }))


      })



      this.opciones.series[1].data = segunda_dosis
      this.opciones.series[0].data = primeras_dosis




      this.chart = new Chart(this.opciones)
      this.cargar_datos_tabla()

    })






  }


  async cargar_Datos_stacked_distritos() {
    let primeras_dosis: any[] = []
    let segunda_dosis: any[] = []


    await this.cubo.devolver_dosis_ambito(this.provincia_selecionada).subscribe(respuesta => {


      let categorias = []
      let
        datos: any[] = respuesta.data



      categorias = datos.map(data => {

        return data['VACUNADOSCovid.distritoEstablecimiento']

      }).filter(
        (item, index, arr) => {
          return arr.indexOf(item) == index
        })
      this.opciones.xAxis.categories = categorias





      categorias.map(depa => {
        primeras_dosis.push(datos.filter((dos) => {

          return dos['VACUNADOSCovid.distritoEstablecimiento'] == depa && dos['VACUNADOSCovid.dosisAplicada'] == '1ª dosis'

        }).map(fil => {
          return fil['VACUNADOSCovid.count']
        }))


        segunda_dosis.push(datos.filter((dos) => {

          return dos['VACUNADOSCovid.distritoEstablecimiento'] == depa && dos['VACUNADOSCovid.dosisAplicada'] == '2ª dosis'

        }).map(fil => {
          return fil['VACUNADOSCovid.count']
        }))


      })



      this.opciones.series[1].data = segunda_dosis
      this.opciones.series[0].data = primeras_dosis



      this.chart.destroy()
      this.chart = new Chart(this.opciones)

      this.cargar_datos_tabla()


    })






  }






  cargar_vacunacion_hoy() {
    this.cubo.devolver_vacunados_hoy().subscribe(respuesta => {
      this.vacunados_hoy = respuesta.data[0]['VACUNADOSCovid.count']
    })
  }

  cargar_provincias() {
    this.cubo.devolver_maestro_provincias().subscribe(respuesta => {

      let prov: any[] = respuesta.data
      this.provincias = prov.map(p => {
        return p['DISTRIBUCIONGeografica.provincia']
      })

    })
  }


  selecciono_provincia() {
    let filtro: any[] = []
    if (this.provincia_selecionada != 'TODOS') {
      filtro = [this.provincia_selecionada]

    }
    this.cubo.query_dosis.filters[0].values = filtro
    this.cargar_1ra_dosis()
    this.cargar_2da_dosis()
    this.cargar_dosis_total()
    this.cubo.query_vacunados_hoy.filters[0].values = filtro
    this.cargar_vacunacion_hoy()
    this.cubo.query_dosis_grupo_riesgo.filters[0].values = filtro
    this.cargarDatosPie()
    this.cargar_stacked()
    this.cubo.query_meta.filters[2].values=filtro
    this.cargar_cobertura()

    this.cargar_linea_tiempo()
  

  }

  selecciono_dosis() {
    let filtro: any[] = []
    if (this.dosis_selecionada != 'TODOS') {
      filtro = [this.dosis_selecionada]

    } else {
      filtro = []
    }





    this.cubo.query_vacunados_hoy.filters[2].values = filtro
    this.cargar_vacunacion_hoy()
    this.cubo.query_dosis_grupo_riesgo.filters[1].values = filtro


    this.cargarDatosPie()
    this.cargar_cobertura()



  }


  selecciono_edad() {


    let filtro: any[] = []
    if (this.grupo_edad_seleccionado != 'TODOS') {
      filtro = [this.grupo_edad_seleccionado]

    } else {
      filtro = []
    }


    this.cubo.query_dosis.filters[2].values = filtro
    this.cargar_1ra_dosis()
    this.cargar_2da_dosis()
    this.cargar_dosis_total()
    this.cubo.query_vacunados_hoy.filters[3].values = filtro
    this.cargar_vacunacion_hoy()
    this.cubo.query_dosis_grupo_riesgo.filters[2].values = filtro
    this.cargarDatosPie()

    this.cubo.query_stack_general.filters[0].values = filtro
    this.cargar_stacked()
    this.cubo.query_meta.filters[1].values=filtro
    this.cargar_cobertura()


  }


  seleciono_fabricante() {

    let filtro: any[] = []
    if (this.fabricante_selecionado != 'TODOS') {
      filtro = [this.fabricante_selecionado]


    } else {
      filtro = []
    }



    this.cubo.query_dosis.filters[3].values = filtro
    this.cargar_1ra_dosis()
    this.cargar_2da_dosis()
    this.cargar_dosis_total()
    this.cubo.query_vacunados_hoy.filters[4].values = filtro
    this.cargar_vacunacion_hoy()
    this.cubo.query_dosis_grupo_riesgo.filters[3].values = filtro
    this.cargarDatosPie()

    this.cubo.query_stack_general.filters[1].values = filtro
    this.cargar_stacked()



  }


  cargar_grupos_vacunacion() {

    let datos: any[]

    this.cubo.devolver_maestro_grupos_vacunacion().subscribe(respuesta => {
      datos = respuesta.data
      this.grupos_vacunacion = datos.map(dato => {
        return dato['VACUNADOSCovid.grupo_vacunacion']
      })
    })

  }
  seleciono_grupo_vacunacion() {

    let filtro: any[] = []
    if (this.grupo_vacunacion_selecionado != 'TODOS') {
      filtro = [this.grupo_vacunacion_selecionado]


    } else {
      filtro = []
    }



    this.cubo.query_dosis.filters[4].values = filtro
    this.cargar_1ra_dosis()
    this.cargar_2da_dosis()
    this.cargar_dosis_total()
    this.cubo.query_vacunados_hoy.filters[4].values = filtro
    this.cargar_vacunacion_hoy()
    this.cubo.query_dosis_grupo_riesgo.filters[5].values = filtro
    this.cargarDatosPie()

    this.cubo.query_stack_general.filters[2].values = filtro
    this.cargar_stacked()


  }

  async cargar_stacked() {
    if (this.provincia_selecionada != 'TODOS' && this.provincia_selecionada != '') {
      await this.cargar_Datos_stacked_distritos().then(() => { this.cargar_datos_tabla() })

    } else {
      await this.cargar_Datos_stacked_provincias().then(() => { this.cargar_datos_tabla() })
    }




  }


  async cargar_datos_tabla() {

    let data: any[] = this.opciones.xAxis.categories
    this.datos_tablas = data.map((dato, index) => {

      return { ambito: dato, primera_dosis: this.opciones.series[0].data[index][0], segunda_dosis: this.opciones.series[1].data[index][0] }
    })



    return 1

  }


  cargar_cobertura() {
    this.cubo.devolver_meta().subscribe(respuesta => {

      console.log(respuesta)
      this.meta = respuesta.data[0]['DISTRIBUCIONGeograficaMeta.meta']
      if (this.dosis_selecionada == 'TODOS') {
        this.meta = this.meta * 2

      }


      if (this.dosis_selecionada == '1ª dosis') {
        this.avance = this.total_1_dosis

      }

      if (this.dosis_selecionada == '2ª dosis') {
        this.avance = this.total_2_dosis

      }
      if (this.dosis_selecionada == 'TODOS' || this.dosis_selecionada == '') {
        this.avance = this.total_2_dosis + this.total_1_dosis

      }

      console.log ( this.avance )
      console.log ( this.meta )

console.log(  ( this.avance )/ (this.meta))
      this.cobertura =  (( this.avance )*100/ (this.meta)).toPrecision(3)





    })

  }




}
