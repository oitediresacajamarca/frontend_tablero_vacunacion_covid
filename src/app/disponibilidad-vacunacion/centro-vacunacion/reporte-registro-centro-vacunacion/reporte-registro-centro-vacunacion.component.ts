import { Component, OnInit, ViewChild } from '@angular/core';

import { DistritoSelectorComponent } from 'src/app/controles/distrito-selector/distrito-selector.component';
import { ResgistrosCentrosService } from 'src/app/servicios/resgistros-centros.service';
import Tabulator from 'tabulator-tables';

@Component({
  selector: 'app-reporte-registro-centro-vacunacion',
  templateUrl: './reporte-registro-centro-vacunacion.component.html',
  styleUrls: ['./reporte-registro-centro-vacunacion.component.scss']
})
export class ReporteRegistroCentroVacunacionComponent implements OnInit {

  table!: Tabulator
  tabledata: any[] = [


  ];

  ubigeo: any
  fecha: any
  constructor(private regis: ResgistrosCentrosService) { }
  @ViewChild('distrito_select')
  distrito_select!: DistritoSelectorComponent

  ngOnInit(): void {
    this.table = new Tabulator('#table-reporte', {
      data: this.tabledata,           //load row data from array
      layout: "fitColumns",
         //fit columns to width of table
      responsiveLayout: "hide",  //hide columns that dont fit on the table
      tooltips: true,            //show tool tips on cells
      addRowPos: "top",          //when adding a new row, add it to the top of the table
      history: true,             //allow undo and redo actions on the table
      pagination: "local",       //paginate the data
      paginationSize: 7,         //allow 7 rows per page of data
      movableColumns: true,      //allow column order to be changed
      resizableRows: true,       //allow row order to be changed
      initialSort: [             //set the initial sort order of the data
        { column: "name", dir: "asc" },
      ],
      columns: [                 //define the table columns
        { title: "CENTRO_VACUNACION", field: "CENTRO_VACUNACION", hozAlign: "center" },
        { title: "TIPO", field: "TIPO", hozAlign: "center" },
        { title: "ESTRATEGIA", field: "ESTRATEGIA", hozAlign: "center" },
        { title: "FABRICANTE", field: "FABRICANTE", hozAlign: "center" },
        { title: "DOSIS_DISTRIBUIDAS", field: "DOSIS_DISTRIBUIDAS", hozAlign: "center" },
        { title: "DOSIS_ADMINISTRADAS", field: "DOSIS_ADMINISTRADAS", hozAlign: "center" },
        { title: "DOSIS REGISTRADAS EN HIS", field: "DOSIS_REGISTRADAS_HIS", hozAlign: "center" },  
        { title: "DOSIS CON PROBLEMAS DIGITACION", field: "DOSIS_CON_PROBLEMAS_DIGITACION"},
        { title: "DOSIS PENDIENTES POR DIGITAR", field: "DOSIS_PENDIENTES_POR_DIGITAR"},
        { title: "DOSIS PERDIDAS FACTOR PERDIDA", field: "DOSIS_PERDIDAS_FP"},
        { title: "FECHA", field: " FECHA"},             
        { title: "STOCK_DOSIS", field: "STOCK_DOSIS", width: 90, hozAlign: "center" },
        { title: "ESTADO", field: "ESTADO", width: 90, hozAlign: "center", formatter: "tickCross", sorter: "boolean", editor: true },
      ],
    })
  }
  selecciono_provincia(e: any) {

    this.distrito_select.cod_provincia = e.ID_PROVINCIA
    this.distrito_select.cargar_distritos()
    this.ubigeo = e.ID_PROVINCIA
    this.cargar_data_registrada_centro_vacunacion()

  }
  selecciono_distrito(e: any) {

    this.ubigeo = e
    this.cargar_data_registrada_centro_vacunacion()

  }
  selecciono_fecha(e: any) {
   
    this.fecha = e
    this.cargar_data_registrada_centro_vacunacion()

  }
  cargar_data_registrada_centro_vacunacion() {
    this.regis.cargarRegistrosPorUbigeoyFecha(this.ubigeo, this.fecha).subscribe(datos => {

      this.tabledata = datos

      this.table.setData( this.tabledata)
    })
  }

  DESCARGAR(){
    this.table.download("xlsx", "data.xlsx", {});
  }

}
