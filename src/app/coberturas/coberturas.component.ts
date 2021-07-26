
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CuboService } from '../servicios/cubo.service';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { CuboCoberturasService } from '../servicios/cubo-coberturas.service';
import * as moment from 'moment';
import { DepartamentoCajamarcaComponent } from '../componentes/svgs/departamento-cajamarca/departamento-cajamarca.component';
import { ActivatedRoute } from '@angular/router';
import { pseudoRandomBytes } from 'crypto';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { JeringaComponent } from '../componentes/svgs/jeringa/jeringa.component';


@Component({
  selector: 'app-coberturas',
  templateUrl: './coberturas.component.html',
  styleUrls: ['./coberturas.component.scss']
})
export class CoberturasComponent implements OnInit {

  @ViewChild('mapa_cajamarca')
  mapa_cajamarca!: DepartamentoCajamarcaComponent;

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

  avance_1: number = 0
  avance_2: number = 0
  avance_hoy_1: number = 0
  avance_hoy_2: number = 0

  meta: number = 0
  avance: number = 0
  cobertura: string = '0'


  datos_tablas: any[] = []

  //filtros
  provincia_selecionada: string = ''
  dosis_selecionada: string = ''
  grupo_edad_seleccionado = ''
  fabricante_selecionado = ''
  grupo_vacunacion_selecionado = ''

  //componentes

  @ViewChild('jeringa') jeringa!: JeringaComponent

  //eventos

  @Output() seleciono_provincia = new EventEmitter<string>()
  mapa_seleciono(event: string) {


    this.provincia_selecionada = event;
    this.selecciono_provincia()

  }

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
      
      ]
    }]
  }

  opciones_linea_tiempo: any = {
    chart: {
      type: 'line'
    },

    title: {
      text: '',
      align: 'left'
    },

    xAxis: {

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
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false

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
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],

    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total de dosis aplicadas'
      },

    },
    legend: {
      reversed: false
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }


    },
    series: [
      {
        name: 'SEGUNDA DOSIS',
        data: [5, 3, 4, 7, 2, 9],
        color: '#00FF00'
       

      }, {
        name: 'PRIMERA DOSIS',
        data: [2, 2, 3, 2, 1, 15],
        color: '#ffc107'
      },
      {
        name: 'SIN VACUNAS',
        data: [2, 2, 3, 2, 1, 15],
        color: '#FF0000'
      }

    ]
  }






  constructor(private cubo: CuboCoberturasService, private cubo_mae: CuboService, private route: ActivatedRoute) {

  }


  async ngOnInit(): Promise<void> {



    this.cargar_dosis()
    this.cargar_vacunacion_hoy()



    this.cargar_provincias()
    this.cargar_grupos_vacunacion()

    await this.selecciono_provincia()


    this.cargarDatosPie()
    this.cargar_linea_tiempo()
    //  this.cargar_cobertura()




  }

  cargar_dosis() {


    this.cubo.devolver_total_dosis_1().subscribe(
      respuesta => {


        let dimension: string = 'VACUNADOSCovid.provinciaEstablecimiento'
        if (this.provincia_selecionada == 'TODOS' || this.provincia_selecionada == '') {
          this.filtro = []
          this.dimension = 'VACUNADOSCovid.provinciaEstablecimiento'

        } else {
          this.filtro = [this.provincia_selecionada]
          this.dimension = 'VACUNADOSCovid.distritoEstablecimiento'
        }

        let avance_1 = respuesta.data[0]['VACUNADOSCovid.dosis_1']
        let avance_2 = respuesta.data[0]['VACUNADOSCovid.dosis_2']
        let tot = respuesta.data[0]['VACUNADOSCovid.count']
        this.avance_1 = avance_1;
        this.avance_2 = avance_2

        this.cubo.query_meta_dosis.filters[0].values = this.filtro


        this.cubo.devolver_meta_dosis().subscribe(respuesta_meta => {


          let meta = respuesta_meta.data[0]['DISTRIBUCIONGeograficaMeta.meta']


          this.total_1_dosis = avance_1 / meta;
          this.total_2_dosis = avance_2 / meta;
          this.total_dosis = tot / (meta * 2);
          this.meta = meta
     
          this.jeringa.setCobertura(this.total_dosis*100)


        })





      }
    )

  }



  cargar_2da_dosis() {

  }

  cargar_dosis_total() {

  }

  cargar_vacunacion_hoy() {
    this.cubo.devolver_dosis_hoy().subscribe(respuesta => {
      console.log(respuesta)
      this.avance_hoy_1 = respuesta.data[0]['VACUNADOSCovid.dosis_1']
      this.avance_hoy_2 = respuesta.data[0]['VACUNADOSCovid.dosis_2']
      this.cubo.devolver_meta_dosis().subscribe(met => {
        let meta = met.data[0]['DISTRIBUCIONGeograficaMeta.meta']

      })


    })

  }


  async cargar_Datos_stacked_provincias() {
    let primeras_dosis: any[] = []
    let segunda_dosis: any[] = []
    let categ: any[] = []
    let ambitos: any[]


    let respuesta = await this.cubo.devolver_dosis_por_aambito().toPromise()

    let datos: any[] = respuesta.data


    categ = datos.map(dato => {

      return dato['VACUNADOSCovid.provinciaEstablecimiento']



    })


    primeras_dosis = await Promise.all(datos.map(async dato => {
      let filtro: any = {}
      Object.assign(filtro, this.cubo.query_meta_dosis)


      filtro.filters[0].values = [dato['VACUNADOSCovid.provinciaEstablecimiento']]

      let ambito = await this.cubo.devolver_meta_dosis_filtro(filtro).toPromise()


      return dato['VACUNADOSCovid.dosis_1'] * 100 / ambito.data[0]['DISTRIBUCIONGeograficaMeta.meta']




    }))

    segunda_dosis = await Promise.all(datos.map(async dato => {
      let filtro: any = {}
      Object.assign(filtro, this.cubo.query_meta_dosis)

      filtro.filters[0].values = [dato['VACUNADOSCovid.provinciaEstablecimiento']]

      let ambito = await this.cubo.devolver_meta_dosis_filtro(filtro).toPromise()

      return dato['VACUNADOSCovid.dosis_2'] * 100 / ambito.data[0]['DISTRIBUCIONGeograficaMeta.meta']




    }))

    this.opciones.xAxis.categories = categ
    this.opciones.series[0].data = primeras_dosis
    this.opciones.series[1].data = segunda_dosis

    this.chart = new Chart(this.opciones)

    await this.cargar_datos_tabla()













  }

  async cargar_Datos_stacked_ambito(ambito_param: string, filtro: any) {
    let primeras_dosis: any[] = []
    let segunda_dosis: any[] = []
    let no_vacunados: any[] = []
    let categ: any[] = []
    let fabri: any[] = []
    let grupo_edad: any[] = []

    if (this.fabricante_selecionado == 'TODOS' || this.fabricante_selecionado == '') {
      fabri = []
    }
    else {
      fabri = [this.fabricante_selecionado]
    }

    if (this.grupo_edad_seleccionado == 'TODOS' || this.grupo_edad_seleccionado == '') {
      grupo_edad = []
    }
    else {
      grupo_edad = [this.grupo_edad_seleccionado]
    }


    this.cubo.query_avance_stack.filters[0].values = fabri
    this.cubo.query_avance_stack.filters[2].values = grupo_edad

    let respuesta = await this.cubo.devolver_dosis_por_aambito().toPromise()

    let datos: any[] = respuesta.data



    categ = datos.map(dato => {

      return dato[ambito_param]


    })

    let dimesion_meta = 'DISTRIBUCIONGeograficaMeta.provincia'

    if (ambito_param == 'VACUNADOSCovid.distritoEstablecimiento') {
      dimesion_meta = 'DISTRIBUCIONGeograficaMeta.distrito'
    } else {

    }


    this.cubo.query_meta_dosis_ambito.dimensions[0] = dimesion_meta
    this.cubo.query_meta_dosis_ambito.filters[0].values = filtro


    this.cubo.query_meta_dosis_ambito.filters[2].values = grupo_edad



    let respuesta_ambitos = await this.cubo.devolver_meta_ambitos().toPromise()
    let metas_ambitos: any[] = respuesta_ambitos.data


    primeras_dosis = datos.map(dato => {


      let fill = metas_ambitos.filter(meta => {


        return meta[dimesion_meta] == dato[ambito_param] && meta[dimesion_meta] != undefined
      })

      if (fill[0] != undefined) {
        return Number.parseFloat(((dato['VACUNADOSCovid.dosis_1'] - dato['VACUNADOSCovid.dosis_2']) * 100 / fill[0]['DISTRIBUCIONGeograficaMeta.meta']).toFixed(2))
      }
      else {
        return 0

      }




    })





    segunda_dosis = datos.map(dato => {


      let fill = metas_ambitos.filter(meta => {


        return meta[dimesion_meta] == dato[ambito_param] && meta[dimesion_meta] != undefined
      })

      if (fill[0] != undefined) {
        return Number.parseFloat(((dato['VACUNADOSCovid.dosis_2']) * 100 / fill[0]['DISTRIBUCIONGeograficaMeta.meta']).toFixed(2))
      }
      else {
        return 0

      }




    })


    no_vacunados = datos.map(dato => {


      let fill = metas_ambitos.filter(meta => {


        return meta[dimesion_meta] == dato[ambito_param] && meta[dimesion_meta] != undefined
      })

      if (fill[0] != undefined) {
        return Number.parseFloat(((fill[0]['DISTRIBUCIONGeograficaMeta.meta'] - dato['VACUNADOSCovid.dosis_1']) * 100 / fill[0]['DISTRIBUCIONGeograficaMeta.meta']).toFixed(2))
      }
      else {
        return 0

      }




    })





    this.opciones.xAxis.categories = categ
    this.opciones.series[0].data = segunda_dosis
    this.opciones.series[1].data =  primeras_dosis
    this.opciones.series[2].data = no_vacunados

    console.log(this.opciones.xAxis.categories)
    console.log(this.opciones.series[0])
    console.log(this.opciones.series[1])
    console.log(this.opciones.series[2])

    this.chart = new Chart(this.opciones)

    await this.cargar_datos_tabla()


  }


  async cargarDatosPie() {

    let respuesta_avance = await this.cubo.devolver_pie().toPromise()
    let datos: any[] = respuesta_avance.data

    let serie = datos.map(data => {


      return [data['VACUNADOSCovid.grupo_vacunacion'], data['VACUNADOSCovid.count']]

    })
    this.opciones_pie.series[0].data = serie

    this.donut = new Chart(this.opciones_pie)


  }


  async cargar_linea_tiempo() {
    let datos: any[] = []
    let dosis_1: any[] = []
    let dosis_2: any[] = []
    let linea = await this.cubo.devolver_linea_tiempo_avance().toPromise()
    let avances: any[] = linea.data

    let resp = await this.cubo.devolver_meta_dosis().toPromise()
    let meta = resp.data[0]['DISTRIBUCIONGeograficaMeta.meta']

    let categorias = avances.map(avance => {



      return moment(avance['VACUNADOSCovid.fechaVacunacion.day']).format('DD MM YYYY');
    })



    let cobertura_1 = avances.map(avance => {

      return Number.parseFloat((avance['VACUNADOSCovid.dosis_1'] * 100 / meta).toFixed(2))
    })

    let cobertura_2 = avances.map(avance => {
      return Number.parseFloat((avance['VACUNADOSCovid.dosis_2'] * 100 / meta).toFixed(2))
    })

    this.opciones_linea_tiempo.xAxis.categories = categorias
    this.opciones_linea_tiempo.series[0].data = cobertura_1
    this.opciones_linea_tiempo.series[1].data = cobertura_2


    this.linea_tiempo = new Chart(this.opciones_linea_tiempo)

  }




  async cargar_Datos_stacked_distritos() {
    let primeras_dosis: any[] = []
    let segunda_dosis: any[] = []










  }








  cargar_provincias() {
    this.cubo_mae.devolver_maestro_provincias().subscribe(respuesta => {

      let prov: any[] = respuesta.data
      this.provincias = prov.map(p => {
        return p['DISTRIBUCIONGeografica.provincia']
      })

    })

  }


  dimension: string = 'VACUNADOSCovid.provinciaEstablecimiento'
  filtro: any = []

  selecciono_provincia() {

    if (this.mapa_cajamarca != undefined) {
      this.mapa_cajamarca.seleccionar_provincia(this.provincia_selecionada)
    }
    let dimension: string = 'VACUNADOSCovid.provinciaEstablecimiento'
    if (this.provincia_selecionada == 'TODOS' || this.provincia_selecionada == '') {
      this.filtro = []
      this.dimension = 'VACUNADOSCovid.provinciaEstablecimiento'

    } else {
      this.filtro = [this.provincia_selecionada]
      this.dimension = 'VACUNADOSCovid.distritoEstablecimiento'
    }
    this.cubo.query_avance_dosis_1.filters[0].values = this.filtro
    this.cubo.query_meta_dosis_ambito.filters[0].values = this.filtro
    this.cubo.query_meta_dosis.filters[0].values = this.filtro

    this.cargar_dosis()

    this.cubo.query_pie_avance.filters[4].values = this.filtro


    this.cargarDatosPie()
    this.cubo.query_avance_hoy.filters[0].values = this.filtro

    this.cargar_vacunacion_hoy()


    this.cubo.query_avance_stack.dimensions[0] = this.dimension
    this.cubo.query_avance_stack.filters[1].values = this.filtro





    this.cargar_stacked(this.dimension, this.filtro)

    // this.cargar_cobertura()



    this.cargar_linea_tiempo()


  }

  selecciono_dosis() {
    let filtro: any[] = []
    if (this.dosis_selecionada != 'TODOS') {
      filtro = [this.dosis_selecionada]

    } else {
      filtro = []
    }






    this.cargar_vacunacion_hoy()



    this.cargarDatosPie()
    this.cargar_cobertura()



  }


  selecciono_edad() {

    let filtro_provinica: any
    let filtro: any[] = []
    if (this.grupo_edad_seleccionado == 'TODOS' || this.grupo_edad_seleccionado == '') {
      filtro = []

    } else {

      filtro = [this.grupo_edad_seleccionado]
    }

    this.cubo.query_avance_dosis_1.filters[2].values = filtro
    this.cubo.query_meta_dosis.filters[2].values = filtro



    if (this.provincia_selecionada == 'TODOS' || this.provincia_selecionada == '') {
      filtro_provinica = []
    } else {

      filtro_provinica = [this.fabricante_selecionado]
    }

    this.cubo.query_meta_dosis.filters[0].values = filtro_provinica


    this.cargar_dosis()
    this.cubo.query_avance_hoy.filters[2].values = filtro


    this.cargar_vacunacion_hoy()
    this.cargar_Datos_stacked_ambito(this.dimension, this.filtro)
  }


  seleciono_fabricante() {

    let filtro: any[] = []
    let filtro_provinica: any[] = []
    if (this.fabricante_selecionado == 'TODOS' || this.fabricante_selecionado == '') {
      filtro = []
    } else {

      filtro = [this.fabricante_selecionado]
    }

    this.cubo.query_avance_dosis_1.filters[1].values = filtro

    if (this.provincia_selecionada == 'TODOS' || this.provincia_selecionada == '') {
      filtro_provinica = []
    } else {

      filtro_provinica = [this.fabricante_selecionado]
    }

    this.cubo.query_meta_dosis.filters[0].values = filtro_provinica
    this.cargar_dosis()

    this.cubo.query_avance_hoy.filters[1].values = filtro


    this.cargar_vacunacion_hoy()





    this.cargar_stacked(this.dimension, this.filtro)



  }


  cargar_grupos_vacunacion() {

    let datos: any[]

    this.cubo_mae.devolver_maestro_grupos_vacunacion().subscribe(respuesta => {
      datos = respuesta.data
      this.grupos_vacunacion = datos.map(dato => {
        return dato['VACUNADOSCovid.grupo_vacunacion']
      })
    })

  }
  seleciono_grupo_vacunacion() {

    let filtro: any[] = []
    let filtro_provinica: any[] = []
    if (this.grupo_vacunacion_selecionado == 'TODOS' || this.grupo_vacunacion_selecionado == '') {

      filtro = []

    } else {

      filtro = [this.grupo_vacunacion_selecionado]
    }


    this.cubo.query_avance_dosis_1.filters[3].values = filtro


    if (this.provincia_selecionada == 'TODOS' || this.provincia_selecionada == '') {
      filtro_provinica = []
    } else {

      filtro_provinica = [this.fabricante_selecionado]
    }

    this.cubo.query_meta_dosis.filters[0].values = filtro_provinica
    this.cubo.query_meta_dosis.filters[3].values = filtro


    this.cargar_dosis()

    this.cubo.query_avance_hoy.filters[3].values = filtro

    this.cargar_vacunacion_hoy()


    this.cubo.query_avance_stack.filters[3].values = filtro
    this.cubo.query_meta_dosis_ambito.filters[3].values = filtro

    this.cargar_stacked(this.dimension, this.filtro)

    /*
 
    
        this.cargarDatosPie()
    
    
        this.cargar_stacked(this.dimension, this.filtro)*/


  }

  async cargar_stacked(dimension: string, filtro: any) {


    this.cargar_Datos_stacked_ambito(dimension, filtro)




  }


  async cargar_datos_tabla() {

    let data: any[] = this.opciones.xAxis.categories


    this.datos_tablas = data.map((dato, index) => {

      return { ambito: dato, primera_dosis: this.opciones.series[1].data[index]+this.opciones.series[0].data[index], segunda_dosis: this.opciones.series[0].data[index] }
    })



    return 1

  }


  cargar_cobertura() {
    this.cubo_mae.devolver_meta().subscribe(respuesta => {


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



      this.cobertura = ((this.avance) * 100 / (this.meta)).toPrecision(3)





    })

  }




}
