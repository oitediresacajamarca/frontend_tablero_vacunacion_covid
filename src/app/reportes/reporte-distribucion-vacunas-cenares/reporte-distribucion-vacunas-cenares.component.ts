import { Component, OnInit } from '@angular/core';
import { MovimientosSismedService } from 'src/app/servicios/movimientos-sismed.service';

@Component({
  selector: 'app-reporte-distribucion-vacunas-cenares',
  templateUrl: './reporte-distribucion-vacunas-cenares.component.html',
  styleUrls: ['./reporte-distribucion-vacunas-cenares.component.scss']
})
export class ReporteDistribucionVacunasCenaresComponent implements OnInit {

  constructor(private movser:MovimientosSismedService) { }

  datos_reporte:any[]=[]

  ngOnInit(): void {
    this.cargar_reporte_cenares()

  }
  cargar_reporte_cenares(){
    this.movser.cargar_movimientos_cenares().subscribe((data) =>{
      this.datos_reporte=data

       console.log(data)
    } )
  }

}
