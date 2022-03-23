import { Component, OnInit, ViewChild } from '@angular/core';
import { MovimientosSismedService } from 'src/app/servicios/movimientos-sismed.service';
import { EditarDistribucionAlmacenRedSismedComponent } from '../editar-distribucion-almacen-red-sismed/editar-distribucion-almacen-red-sismed.component';

@Component({
  selector: 'app-detalle-distribucion-almacen-red-sismed',
  templateUrl: './detalle-distribucion-almacen-red-sismed.component.html',
  styleUrls: ['./detalle-distribucion-almacen-red-sismed.component.scss']
})
export class DetalleDistribucionAlmacenRedSismedComponent implements OnInit {

  @ViewChild('dialog')
  dialog!: EditarDistribucionAlmacenRedSismedComponent

  distris:any={}
  filtro:any={}

  constructor(private distribuciones_sis: MovimientosSismedService) { }

  distribuciones_listado_red!: any[]

  CODIGO_RED: string = '007S06';
  NOMBRE_RED: string = ''
  FILTRO_VACUNACION_DETALLE: any = {
    PROVINCIA: '',
    FABRICANTE: '',
    FECHA_DESDE: '',
    FECHA_HASTA: ''

  }



  ngOnInit(): void {
   // this.cargar_movimientos_sismed()
  }

  cargar_movimientos_sismed() {

    this.distribuciones_sis.cargar_movimientos_de_red(this.NOMBRE_RED).subscribe((data) => {

      this.distribuciones_listado_red = data;
    })
  }

  cargar_movimientos_filtros(filtros:any) {
    this.distribuciones_sis.cargar_movimientos_de_red_filtros(this.NOMBRE_RED,filtros).subscribe((data) => {

      this.distribuciones_listado_red = data;
    })

  }

  seleccciono_provincia(e: any) {

    this.NOMBRE_RED = e.NOMBRE
    this.cargar_movimientos_filtros({FABRICANTE:e})
   
  }

  seleccciono_fabricante(e:any){
  
    this.cargar_movimientos_filtros({FABRICANTE:e})
  }

  abrir_dialog_editar(distris:any) {

    this.dialog.distris=distris
    this.dialog.open()
  }

}
