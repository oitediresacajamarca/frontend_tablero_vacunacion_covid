import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { timeStamp } from 'console';
import { DistribucionIpressService } from 'src/app/servicios/distribucion-ipress.service';
import { MovimientosSismedService } from 'src/app/servicios/movimientos-sismed.service';
import { DistribucionRedIpressComponent } from '../distribucion-red-ipress/distribucion-red-ipress.component';

@Component({
  selector: 'app-detalle-distribucion-por-ipress',
  templateUrl: './detalle-distribucion-por-ipress.component.html',
  styleUrls: ['./detalle-distribucion-por-ipress.component.scss']
})
export class DetalleDistribucionPorIpressComponent implements OnInit {

  constructor(private distribu: DistribucionIpressService, private movimientos_vac: MovimientosSismedService) { }
  @ViewChild('nuevo_dis')
  nuevo_dis!: DistribucionRedIpressComponent
  red: string = ''



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
    console.log(e)
    this.red = e.ID_PROVINCIA
    this.cargar_movimientos_red()

  }

  cargar_movimientos_red() {
    this.movimientos_vac.cargar_movimientos_distribuciones_de_red(this.red).subscribe(data => {

      this.salidas_sismed = data
      console.log(data)
    })
  }

  MODIFICAR(ID_MOV: any) {
    

    console.log(ID_MOV)
  }

}
