import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PadronesServiceService } from 'src/app/servicios/padrones/padrones-service.service';
import { PadronInterface } from '../padron-interface';
import * as FileSaver from 'file-saver'
import { Table } from 'primeng/table';


@Component({
  selector: 'app-detalle-padron',
  templateUrl: './detalle-padron.component.html',
  styleUrls: ['./detalle-padron.component.scss']
})
export class DetallePadronComponent implements OnInit {

  @Output('iniciar_nuevo')
  iniciar_nuevo: EventEmitter<any> = new EventEmitter()

  @ViewChild('dt')
  dt!:Table

  filtro:any={hoy:true,dosis_seleccionadas:[],incluye_rezagados:2}
 

  constructor(private padronserv: PadronesServiceService) { }
  cols!: any[];
  ngOnInit(): void {
    this.cols = [
      { field: 'Tipo_Doc', header: 'Tipo_Doc', customExportHeader: 'Product Code' },
      { field: 'Documento', header: 'Documento' },
      { field: 'Numero_Doc', header: 'Numero Documento' },

      { field: 'Nombres', header: 'Nombres' },
      { field: 'Apellido_Paterno', header: 'Apellido_Paterno' },
      { field: 'Apellido_Materno', header: 'Apellido_Materno' },
      { field: 'Edad', header: 'Edad' },
      { field: 'Celular', header: 'Celular' },
      {field:'Direccion',header:'Direccion'},
      { field: 'Dosis_1', header: 'Dosis_1' },
      { field: 'Fabricante_1', header: 'Fabricante_1' },
      { field: 'Fecha_Dosis_1', header: 'Fecha_Dosis_1' },

      { field: 'Dosis_2', header: 'Dosis_2' },
      { field: 'Fabricante_2', header: 'Fabricante_2' },
      { field: 'Fecha_Dosis_2', header: 'Fecha_Dosis_2' },
      { field: 'Dosis_3', header: 'Dosis_3' },
      { field: 'Fabricante_3', header: 'Fabricante_3' },
      { field: 'Fecha_Dosis_3', header: 'Fecha_Dosis_3' },
      { field: 'Dosis_4', header: 'Dosis_4' },
      { field: 'Fabricante_4', header: 'Fabricante_4' },
      { field: 'Fecha_Dosis_1', header: 'Fecha_Dosis_1' }

    ];
  }

  RENIPRESS!: string;
  data: PadronInterface[] = []
  cargar_detalle_padron() {
    this.data = []
    this.padronserv.cargar_padron(this.RENIPRESS).subscribe((data) => {
    
      this.data = data
    })
  }

  cargar_detalle_padron_vacunar_hoy() {
    this.data = []
    this.padronserv.cargar_padron_hoy(this.RENIPRESS).subscribe((data) => {
   
      this.data = data
    })
  }

  cargar_detalle_padron_vacunar_filtro() {
    this.data = []

    if(this.RENIPRESS ==undefined){alert('DEBE DE SELECIONAR PRIMERO UN ESTABLECIMIENTO')}
    else{
      this.padronserv.cargar_padron_filtro(this.RENIPRESS,this.filtro).subscribe((data) => {
   
        this.data = data
      })
    }
   
  }
  exportPdf() {
    /*  import("jspdf").then(jsPDF => {
          import("jspdf-autotable").then(x => {
              const doc = new jsPDF.default(0,0);
              doc.autoTable(this.exportColumns, this.data);
              doc.save('products.pdf');
          })
      })*/
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.data);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "products");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  abrir_seguimientos(e: any) {
    this.iniciar_nuevo.emit(e)
  }
}

