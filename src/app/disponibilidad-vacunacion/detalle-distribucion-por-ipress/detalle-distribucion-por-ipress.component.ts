import { Component, OnInit, ViewChild } from '@angular/core';
import { DistribucionIpressService } from 'src/app/servicios/distribucion-ipress.service';
import { DistribucionRedIpressComponent } from '../distribucion-red-ipress/distribucion-red-ipress.component';

@Component({
  selector: 'app-detalle-distribucion-por-ipress',
  templateUrl: './detalle-distribucion-por-ipress.component.html',
  styleUrls: ['./detalle-distribucion-por-ipress.component.scss']
})
export class DetalleDistribucionPorIpressComponent implements OnInit {

  constructor(private distribu: DistribucionIpressService) { }
  @ViewChild('nuevo_dis')
  nuevo_dis!: DistribucionRedIpressComponent



  ngOnInit(): void {
    this.cargarDistribucion()
  }

  ditribucion_ipress: any[] = []

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

}
