import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CuboService } from '../servicios/cubo.service';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { JeringaComponent } from '../componentes/svgs/jeringa/jeringa.component';
import * as moment from 'moment';
import { DepartamentoCajamarcaComponent } from '../componentes/svgs/departamento-cajamarca/departamento-cajamarca.component';

declare const $: any;


import Tabulator from 'tabulator-tables';
import { Dropdown } from 'primeng/dropdown';
import { MultiSelect } from 'primeng/multiselect';
interface City {
  name: string

}






@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @ViewChild('etareo_selector')
  etareo_selector!: MultiSelect

  rangeDates!: Date[];
  total_1_dosis: number = 0;
  total_2_dosis: number = 0;
  total_3_dosis: number = 0;
  total_dosis: number = 0;
  vacunados_hoy: number = 0;
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = true
  DEPARTAMENTOS_FILTRO: string[] = []
  provincias: any[] = []
  grupos_vacunacion: any[] = []
  grupos_etareos: any[] = []

  urbanidades: any[] = []
  chart: any
  donut: any


  grupo_urbanidad: any;




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
  dosis_selecionada: string = ''
  grupo_edad_seleccionado: any[] = []
  fabricante_selecionado = ''
  grupo_vacunacion_selecionado = []
  fecha_inicio = new Date(2021, 1, 1)
  fecha_fin = new Date(2025, 1, 1)
  tipo_ambito_seleccionado = 'PROVINCIA'







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
        style: {
          color: 'red'
        }
      }],
      style: { "color": "#333333", "position": "absolute" }
    },
    title: {
      text: 'DOSIS APLICADAS POR PROVINCIA',
      style: {
        color: '#17a2b8',
        fontWeight: 'bold',
        backgroundColor: 'black'
      }
    },
    xAxis: {
      categories: [],
      labels: {

        style: { "color": "blue", "fontWeight": "bold", fontSize: '12px', "background-color": "red" }
      }
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
        data: [],
        lineWidth: 4,
        color: '#ffc107'

      }, {
        name: 'SEGUNDA DOSIS',
        data: [],
        color: '#37ff08'
      },
      {
        name: 'TERCERA DOSIS',
        data: [],
        color: '#064ea6'
      }
    ]
  }






  constructor(private cubo: CuboService) {

  }
  tabledata = [

  ];

  cities!: City[];

  selectedCities!: City[];
  table!: Tabulator
  async ngOnInit(): Promise<void> {



    this.urbanidades = this.cubo.devolver_urbanidades()


    this.grupos_etareos = [
      { name: '12-19', value: '12-19' },
      { name: '20-29', value: '20-29' },
      { name: '30-39', value: '30-39' },
      { name: '40-49', value: '40-49' },
      { name: '50-59', value: '50-59' },
      { name: '60 a mas', value: '60 a mas' },


    ]

    this.cities = [

    ];

    this.table = new Tabulator("#example-table", {
      data: this.tabledata,           //load row data from array
      layout: "fitColumns",      //fit columns to width of table
      responsiveLayout: "hide",  //hide columns that dont fit on the table
      tooltips: true,            //show tool tips on cells
      addRowPos: "top",          //when adding a new row, add it to the top of the table
      history: true,
      clipboard: true,         //allow undo and redo actions on the table

      movableColumns: true,      //allow column order to be changed
      resizableRows: true,       //allow row order to be changed
      initialSort: [             //set the initial sort order of the data
        { column: "name", dir: "asc" },
      ],
      columns: [                 //define the table columns
        {
          title: "AMBITO", field: "ambito", formatter: function (cell: any, formatterParams: any) {
            var value = cell.getValue();

            return "<span style=' font-weight:bold;font-size:14px;color:blue'>" + value + "</span>";

          }
        },
        {
          title: "PRIMERA DOSIS", field: "primera_dosis", hozAlign: "center", formatter: function (cell: any, formatterParams: any) {
            var value = cell.getValue();
            if (value != undefined) {

              return "<span style=' font-weight:bold;font-size:13px;'>" + value + "</span>";
            }
            else {
              value = 0

              return "<span style=' font-weight:bold;font-size:13px;'>" + value + "</span>";

            }

          }
        },
        {
          title: "SEGUNDA DOSIS", field: "segunda_dosis", hozAlign: "center", formatter: function (cell: any, formatterParams: any) {
            var value = cell.getValue();
            if (value != undefined) {

              return "<span style=' font-weight:bold;font-size:13px;'>" + value + "</span>";
            }
            else {
              value = 0

              return "<span style=' font-weight:bold;font-size:13px;'>" + value + "</span>";

            }

          }
        },
        {
          title: "TERCERA DOSIS", field: "tercera_dosis", hozAlign: "center", formatter: function (cell: any, formatterParams: any) {
            var value = cell.getValue();
            if (value != undefined) {

              return "<span style=' font-weight:bold;font-size:13px;'>" + value + "</span>";
            }
            else {
              value = 0

              return "<span style=' font-weight:bold;font-size:13px;'>" + value + "</span>";

            }

          }
        }


      ]
    });


    this.seleciono_grupo_vacunacion()


    this.cargar_1ra_dosis()
    this.cargar_2da_dosis()
    this.cargar_3ra_dosis()
    this.cargar_dosis_total()
    this.cargar_vacunacion_hoy()
    this.cargar_provincias()
    this.cargar_grupos_vacunacion()

    await this.cargar_Datos_stacked_provincias()
    this.cargarDatosPie()
    this.cargar_linea_tiempo()
    this.cargar_cobertura()




  }

  async cargar_1ra_dosis() {
  let respuesta=await  this.cubo.devolver_total_por_dosis(['1ª dosis']).toPromise()

  this.total_1_dosis = respuesta.data[0]['VACUNADOSCovidFast.count']
  }


  async cargar_2da_dosis() {
    let respuesta=await  this.cubo.devolver_total_por_dosis(['2ª dosis']).toPromise()

    this.total_2_dosis = respuesta.data[0]['VACUNADOSCovidFast.count']
  }

  async cargar_3ra_dosis() {
    console.log(this.cubo.query_dosis)
    let respuesta=await  this.cubo.devolver_total_por_dosis(['3ª dosis']).toPromise()

    this.total_3_dosis = respuesta.data[0]['VACUNADOSCovidFast.count']
  }

  async cargar_dosis_total() {


    let respuesta=await  this.cubo.devolver_total_por_dosis(['2ª dosis', '1ª dosis', '3ª dosis']).toPromise()

    this.total_dosis = respuesta.data[0]['VACUNADOSCovidFast.count']
  }

  cargarDatosPie() {

    this.donut = new Chart(this.opciones_pie)

    this.cubo.devolver_dosis_por_grupo().subscribe(respuesta => {

      let res: any[] = respuesta.data
      this.opciones_pie.series[0].data = res.map(grupo => {
        return [grupo['VACUNADOSCovidFast.gruporiesgo'], grupo['VACUNADOSCovidFast.count']]

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

        return moment(new Date(resp['VACUNADOSCovidFast.fechaVacunacion.day'])).format('DD/MM/YYYY');

      })

      dosis_1 = dat.map(resp => {

        return resp['VACUNADOSCovidFast.dosis_1']

      })

      dosis_2 = dat.map(resp => {

        return resp['VACUNADOSCovidFast.dosis_2']

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
    let tercera_dosis: any[] = []


    await this.cubo.devolver_dosis_ambito('TODOS').subscribe(respuesta => {


      let categorias = []
      let
        datos: any[] = respuesta.data

        console.log(datos)



      this.opciones.title.text = 'DOSIS APLICADAS POR PROVINCIA'

      categorias = datos.map(data => {

        return data['VACUNADOSCovidFast.provinciaEstablecimiento']

      }).filter(
        (item, index, arr) => {
          return arr.indexOf(item) == index
        })
      this.opciones.xAxis.categories = categorias




      categorias.map(depa => {
        primeras_dosis.push(datos.filter((dos) => {

          return dos['VACUNADOSCovidFast.provinciaEstablecimiento'] == depa && dos['VACUNADOSCovidFast.dosisAplicada'] == '1ª dosis'

        }).map(fil => {
          return fil['VACUNADOSCovidFast.count']
        }))


        segunda_dosis.push(datos.filter((dos) => {

          return dos['VACUNADOSCovidFast.provinciaEstablecimiento'] == depa && dos['VACUNADOSCovidFast.dosisAplicada'] == '2ª dosis'

        }).map(fil => {
          return fil['VACUNADOSCovidFast.count']
        }))



        
        tercera_dosis.push(datos.filter((tres) => {

          return tres['VACUNADOSCovidFast.provinciaEstablecimiento'] == depa && tres['VACUNADOSCovidFast.dosisAplicada'] == '3ª dosis'

        }).map(fil => {
          return fil['VACUNADOSCovidFast.count']
        }))



      })



      this.opciones.series[1].data = segunda_dosis
      this.opciones.series[0].data = primeras_dosis
      this.opciones.series[2].data = tercera_dosis




      this.chart = new Chart(this.opciones)
      this.cargar_datos_tabla()

    })






  }


  async cargar_Datos_stacked_distritos() {
    let primeras_dosis: any[] = []
    let segunda_dosis: any[] = []
    let tercera_dosis: any[] = []

    this.opciones.title.text = 'DOSIS APLICADAS POR DISTRITO'

    await this.cubo.devolver_dosis_ambito(this.provincia_selecionada).subscribe(respuesta => {


      let categorias = []
      let
        datos: any[] = respuesta.data



      categorias = datos.map(data => {

        return data['VACUNADOSCovidFast.distritoEstablecimiento']

      }).filter(
        (item, index, arr) => {
          return arr.indexOf(item) == index
        })
      this.opciones.xAxis.categories = categorias





      categorias.map(depa => {
        primeras_dosis.push(datos.filter((dos) => {

          return dos['VACUNADOSCovidFast.distritoEstablecimiento'] == depa && dos['VACUNADOSCovidFast.dosisAplicada'] == '1ª dosis'

        }).map(fil => {
          return fil['VACUNADOSCovidFast.count']
        }))


        segunda_dosis.push(datos.filter((dos) => {

          return dos['VACUNADOSCovidFast.distritoEstablecimiento'] == depa && dos['VACUNADOSCovidFast.dosisAplicada'] == '2ª dosis'

        }).map(fil => {
          return fil['VACUNADOSCovidFast.count']
        }))

        tercera_dosis.push(datos.filter((dos) => {

          return dos['VACUNADOSCovidFast.distritoEstablecimiento'] == depa && dos['VACUNADOSCovidFast.dosisAplicada'] == '3ª dosis'

        }).map(fil => {
          return fil['VACUNADOSCovidFast.count']
        }))


      })



      this.opciones.series[1].data = segunda_dosis
      this.opciones.series[0].data = primeras_dosis
      this.opciones.series[2].data = tercera_dosis



      this.chart.destroy()
      this.chart = new Chart(this.opciones)

      this.cargar_datos_tabla()



    })






  }



  ngAfterViewInit() {


  }



  cargar_vacunacion_hoy() {
    this.cubo.devolver_vacunados_hoy().subscribe(respuesta => {
      console.log(respuesta)
      this.vacunados_hoy = respuesta
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
      this.tipo_ambito_seleccionado = 'PROVINCIA'
    } else {
      filtro = [this.provincia_selecionada]
      this.tipo_ambito_seleccionado = 'DISTRITO'
    }

    this.cubo.query_dosis.filters[0].values = filtro
    this.cargar_1ra_dosis()
    this.cargar_2da_dosis()
    this.cargar_3ra_dosis()
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
    if (this.grupo_edad_seleccionado == []) {
      filtro = []
    } else {
      filtro = this.grupo_edad_seleccionado
    }

    this.cubo.query_dosis.filters[2].values = filtro
    this.cargar_1ra_dosis()
    this.cargar_2da_dosis()
    this.cargar_3ra_dosis()
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
    this.cargar_3ra_dosis()
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
        return { name: dato['VACUNADOSCovidFast.grupo_vacunacion'] }
      })


    })

  }
  async seleciono_grupo_vacunacion() {
    console.log(this.grupo_vacunacion_selecionado)

    let filtro: any[] = []
    if (this.grupo_vacunacion_selecionado == [] || this.grupo_vacunacion_selecionado == ['']) {

      filtro = []

    } else {

      filtro = this.grupo_vacunacion_selecionado
    }



    this.cubo.query_dosis.filters[4].values = filtro
   await this.cargar_1ra_dosis()
   await this.cargar_2da_dosis()
   await this.cargar_3ra_dosis()
   await this.cargar_dosis_total()
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

      return { ambito: dato, primera_dosis: this.opciones.series[0].data[index][0], segunda_dosis: this.opciones.series[1].data[index][0],tercera_dosis:this.opciones.series[2].data[index][0] }
    })

    /* this.cubo.devolver_vacunados_fuera().subscribe((vacunados_fuera) =>{
 
       console.log(vacunados_fuera)
       this.datos_tablas.map(elemento=>{
 
         return{...elemento,otros_campos:}
       })
    
     }
 
     
     )
 */


    this.table.setData(this.datos_tablas)









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
      if (this.dosis_selecionada == '3ª dosis') {
        this.avance = this.total_2_dosis

      }
      if (this.dosis_selecionada == 'TODOS' || this.dosis_selecionada == '') {

        this.avance = this.total_2_dosis

      }
      if (this.meta != 0) {
        this.cobertura = ((this.avance) * 100 / (this.meta)).toPrecision(4)

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


  async seleciono_fechas(e: any) {
    let filtro = [e.start.format('YYYY-MM-DD'), e.end.format('YYYY-MM-DD')]

    this.cubo.query_dosis.filters[5].values = [e.start.format('YYYY-MM-DD'), e.end.format('YYYY-MM-DD')]
 await   this.cargar_1ra_dosis()
   await this.cargar_2da_dosis()
   await   this.cargar_3ra_dosis()
    this.cargar_dosis_total()


    this.cubo.query_dosis_grupo_riesgo.filters[5].values = filtro
    this.cargarDatosPie()

    this.cubo.query_stack_general.filters[4].values = filtro
    this.cargar_stacked()

    this.cargar_cobertura()

    this.cubo.query_time_line.filters[4].values = filtro

    this.cargar_linea_tiempo()


  }

  reseteoFechas() {
    let filtro: any[] = ['2021-01-01', '2024-01-01']
    this.cubo.query_dosis.filters[5].values = filtro
    this.cargar_1ra_dosis()
    this.cargar_2da_dosis()
    this.cargar_dosis_total()


    this.cubo.query_dosis_grupo_riesgo.filters[5].values = filtro
    this.cargarDatosPie()

    this.cubo.query_stack_general.filters[4].values = filtro
    this.cargar_stacked()

    this.cargar_cobertura()

    this.cubo.query_time_line.filters[4].values = filtro

    this.cargar_linea_tiempo()
  }


  seleciono_urbanidad() {


    let filtro: any[] = []


    if (this.grupo_urbanidad == []) {
      filtro = []

    } else {

      filtro = this.grupo_urbanidad
    }


    this.cubo.query_dosis.filters[6].values = filtro


    this.cargar_1ra_dosis()
    this.cargar_2da_dosis()
    this.cargar_dosis_total()

    this.cubo.query_vacunados_hoy.filters[7].values = filtro
    this.cargar_vacunacion_hoy()
    this.cubo.query_dosis_grupo_riesgo.filters[6].values = filtro
    this.cargarDatosPie()
    this.cubo.query_stack_general.filters[5].values = filtro
    this.cargar_stacked()
    /* this.cubo.query_meta.filters[3].values = filtro
     this.cargar_cobertura()*/

    this.cubo.query_time_line.filters[5].values = filtro
    this.cargar_linea_tiempo()


  }



}
