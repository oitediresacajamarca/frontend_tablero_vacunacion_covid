import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CuboService } from '../servicios/cubo.service';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { JeringaComponent } from '../componentes/svgs/jeringa/jeringa.component';
import * as moment from 'moment';
import { DepartamentoCajamarcaComponent } from '../componentes/svgs/departamento-cajamarca/departamento-cajamarca.component';
import Litepicker from 'litepicker';
declare const $: any;
import tinyDatePicker from 'tiny-date-picker';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  rangeDates!: Date[];
  total_1_dosis: number = 0;
  total_2_dosis: number = 0;
  total_dosis: number = 0;
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
  cobertura: string = '0'

  @ViewChild('jeringa')
  jeringa: JeringaComponent = new JeringaComponent();
  @ViewChild('mapa_cajamarca')
  mapa_cajamarca!: DepartamentoCajamarcaComponent;


  datos_tablas: any[] = []

  //filtros
  provincia_selecionada: string = ''
  dosis_selecionada: string = '1ª dosis'
  grupo_edad_seleccionado = '1ª dosis'
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
      type: 'line'
    },
    title: {
      text: ''
    }
    ,
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Cantidad de Dosis'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false

      },
      lineWidth: 6
    },
    series: [{
      name: '1 dosis',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      lineWidth: 4,
      color: '#FF0000'
    }, {
      name: '2 dosis',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
      color: '#0000ff',
      lineWidth: 4,

    }]
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
        data: [5, 3, 4, 7, 2, 9],
        lineWidth: 4,
        color: '#ffc107'

      }, {
        name: 'SEGUNDA DOSIS',
        data: [2, 2, 3, 2, 1, 15],
        color: '#37ff08'
      }
    ]
  }






  constructor(private cubo: CuboService) {

  }

  async ngOnInit(): Promise<void> {

    this.grupo_edad_seleccionado = '1ª dosis'
    this.seleciono_grupo_vacunacion()


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
    let dosis_1: any[] = []
    let dosis_2: any[] = []
    let axis: any[] = []


    this.cubo.devolver_linea_tiempo().subscribe(respuesta => {

      let dat: any[] = respuesta.data


      axis = dat.map(resp => {

        return moment(new Date(resp['VACUNADOSCovid.fechaVacunacion.day'])).format('DD/MM/YYYY');

      })

      dosis_1 = dat.map(resp => {

        return resp['VACUNADOSCovid.dosis_1']

      })

      dosis_2 = dat.map(resp => {

        return resp['VACUNADOSCovid.dosis_2']

      })

      this.opciones_linea_tiempo.xAxis.categories = axis
      this.opciones_linea_tiempo.series[0].data = dosis_1
      this.opciones_linea_tiempo.series[1].data = dosis_2

      this.linea_tiempo = new Chart(this.opciones_linea_tiempo)


    })


  }

  async cargar_Datos_stacked_provincias() {
    let primeras_dosis: any[] = []
    let segunda_dosis: any[] = []


    await this.cubo.devolver_dosis_ambito('TODOS').subscribe(respuesta => {


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



  ngAfterViewInit() {


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
    this.mapa_cajamarca.seleccionar_provincia(this.provincia_selecionada)

    let filtro: any[] = []
    if (this.provincia_selecionada == 'TODOS' || this.provincia_selecionada == '') {
      filtro = []
    } else {
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
    this.cubo.query_meta.filters[2].values = filtro
    this.cargar_cobertura()

    this.cubo.query_time_line.filters[0].values = filtro

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
    if (this.grupo_edad_seleccionado == 'TODOS' || this.grupo_edad_seleccionado == '') {
      filtro = []

    } else {

      filtro = [this.grupo_edad_seleccionado]
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
    this.cubo.query_meta.filters[1].values = filtro
    this.cargar_cobertura()
    this.cubo.query_time_line.filters[1].values = filtro
    this.cargar_linea_tiempo()


  }


  seleciono_fabricante() {

    let filtro: any[] = []
    if (this.fabricante_selecionado == 'TODOS' || this.fabricante_selecionado == '') {

      filtro = []
    } else {

      filtro = [this.fabricante_selecionado]

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

    this.cargar_cobertura()
    this.cubo.query_time_line.filters[2].values = filtro
    this.cargar_linea_tiempo()



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
    if (this.grupo_vacunacion_selecionado == 'TODOS' || this.grupo_vacunacion_selecionado == '') {

      filtro = []

    } else {

      filtro = [this.grupo_vacunacion_selecionado]
    }



    this.cubo.query_dosis.filters[4].values = filtro
    this.cargar_1ra_dosis()
    this.cargar_2da_dosis()
    this.cargar_dosis_total()
    this.cubo.query_vacunados_hoy.filters[5].values = filtro
    this.cargar_vacunacion_hoy()
    this.cubo.query_dosis_grupo_riesgo.filters[4].values = filtro
    this.cargarDatosPie()

    this.cubo.query_stack_general.filters[2].values = filtro
    this.cargar_stacked()
    this.cubo.query_meta.filters[0].values = filtro

    this.cargar_cobertura()
    this.cubo.query_time_line.filters[3].values = filtro
    this.cargar_linea_tiempo()


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

      this.meta = respuesta.data[0]['DISTRIBUCIONGeograficaMeta.meta']
      if (this.dosis_selecionada == 'TODOS' || this.dosis_selecionada == '') {
    //    this.meta = this.meta * 2

      }


      if (this.dosis_selecionada == '1ª dosis') {
        this.avance = this.total_1_dosis

      }

      if (this.dosis_selecionada == '2ª dosis') {
        this.avance = this.total_2_dosis

      }
      if (this.dosis_selecionada == 'TODOS' || this.dosis_selecionada == '') {
        console.log(this.dosis_selecionada)
        this.avance = this.total_2_dosis

      }
      if (this.meta != 0) {
        this.cobertura = ((this.avance) * 100 / (this.meta)).toPrecision(3)

        this.jeringa.setCobertura(parseFloat(this.cobertura))
      }
      else {
        this.cobertura = '0'
        this.jeringa.setCobertura(parseFloat('0'))
      }


    })

  }


  mapa_seleciono(event: string) {

    this.provincia_selecionada = event;
    this.selecciono_provincia()

  }


  seleciono_fechas(e:any) {


    console.log(e.start.toDate())
console.log(this.rangeDates)
  }



}
