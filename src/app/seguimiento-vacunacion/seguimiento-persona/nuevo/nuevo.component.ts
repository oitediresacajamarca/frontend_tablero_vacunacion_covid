import { Component, OnInit } from '@angular/core';
import { SeguimientoServiceService } from 'src/app/servicios/seguimiento-vacunacion/seguimiento-service.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  constructor(private seguimientoserv: SeguimientoServiceService) { }

  visible: boolean = false;
  FECHA_SEGUIMIENTO!: Date;
  MOTIVO_SEGUIMIENTO!: string;
  TIPO_SEGUIMIENTO!: string;



  ngOnInit(): void {
  }

  open() {
    this.visible = true;
  }
  TIPOS_SEGUIMIENTO = [{ name: 'llamada telefonica' }, { name: 'visita domiciliaria' }]
  Guardar() {

    this.seguimientoserv.nuevo_seguimiento({
      FECHA_SEGUIMIENTO: this.FECHA_SEGUIMIENTO,
      MOTIVO_SEGUIMIENTO: this.MOTIVO_SEGUIMIENTO, TIPO_SEGUIMIENTO: this.TIPO_SEGUIMIENTO
    }).subscribe(respuesta => { })
  }

}
