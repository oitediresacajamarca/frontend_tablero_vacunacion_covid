import { Component, OnInit, ViewChild } from '@angular/core';
import { CasosProblemasDigitacionService } from 'src/app/servicios/casos-problemas-digitacion/casos-problemas-digitacion.service';
import { CasosProblemasDigitacionComponent } from '../casos-problemas-digitacion/casos-problemas-digitacion.component';

@Component({
  selector: 'app-detalle-casos-problemas-digitacion',
  templateUrl: './detalle-casos-problemas-digitacion.component.html',
  styleUrls: ['./detalle-casos-problemas-digitacion.component.scss']
})
export class DetalleCasosProblemasDigitacionComponent implements OnInit {

  constructor(private casos_ser: CasosProblemasDigitacionService) { }
  @ViewChild('nuevo_caso')
  nuevo_caso!: CasosProblemasDigitacionComponent

  listado: any[] = []

  ngOnInit(): void {
    this.cargar_registrados_por_ubigeo()
  }

  cargar_registrados_por_ubigeo() {

    const login: any = JSON.parse(localStorage.getItem('login') || '')

    this.casos_ser.cargar_registrados_por_ubigeo(login.UBIGEO).subscribe((respuesta) => {


      this.listado = respuesta
    })

  }

  abrir_dialogo() {

    this.nuevo_caso.display = true;

  }
  NuevoRegistro() {
    this.cargar_registrados_por_ubigeo()
  }
}
