import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { timeStamp } from 'console';
import { DistribucionIpressService } from 'src/app/servicios/distribucion-ipress.service';
import { MovimientosSismedService } from 'src/app/servicios/movimientos-sismed.service';
import { DistribucionRedIpressComponent } from '../distribucion-red-ipress/distribucion-red-ipress.component';
import { EditarDistribucionAlmacenRedSismedComponent } from '../editar-distribucion-almacen-red-sismed/editar-distribucion-almacen-red-sismed.component';

@Component({
  selector: 'app-detalle-distribucion-por-ipress',
  templateUrl: './detalle-distribucion-por-ipress.component.html',
  styleUrls: ['./detalle-distribucion-por-ipress.component.scss']
})
export class DetalleDistribucionPorIpressComponent implements OnInit {

  constructor(private distribu: DistribucionIpressService, private movimientos_vac: MovimientosSismedService) { }
  @ViewChild('nuevo_dis')
  nuevo_dis!: EditarDistribucionAlmacenRedSismedComponent
  red: string = ''


  filtro: any = {}


  ngOnInit(): void {
    this.cargarDistribucion()
  }

  ditribucion_ipress: any[] = []
  salidas_sismed: any[] = []

  cargarDistribucion() {
    this.distribu.cargarDetalleTotal().subscribe((dat) => {

      console.log(dat)
      this.ditribucion_ipress = dat
    })

  }

  open_red_ipress() {
    this.nuevo_dis.open();
  }
  agrego_dis() {
    this.cargarDistribucion()
  }

  deleteDistri(id: any) {


    this.distribu.eliminarDistribucion(id).subscribe(data => {
      this.cargarDistribucion()
      return data;
    })

  }

  selecciono_red(e: any) {

    this.red = e.ID_PROVINCIA
    this.cargar_movimientos_red_filtro()

  }

  seleccciono_fabricante(e: any) {
    console.log(e)
    this.filtro.fabricante = e
    this.cargar_movimientos_red_filtro()
  }

  cargar_movimientos_red() {
    this.movimientos_vac.cargar_movimientos_distribuciones_de_red(this.red).subscribe(data => {

      this.salidas_sismed = data

    })
  }
  cargar_movimientos_red_filtro() {

    this.movimientos_vac.cargar_movimientos_distribuciones_de_red_ipres_filtro(this.red, {}).subscribe(data => {

      this.salidas_sismed = data

    })

  }


  MODIFICAR(distris: any) {

    this.nuevo_dis.distris = distris;
    this.nuevo_dis.open()

  }

}
