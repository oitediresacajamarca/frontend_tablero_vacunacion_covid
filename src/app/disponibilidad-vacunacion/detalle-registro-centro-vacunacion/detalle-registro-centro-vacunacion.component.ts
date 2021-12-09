import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CentroVacunacionService } from 'src/app/servicios/centro-vacunacion.service';
import { ResgistrosCentrosService } from 'src/app/servicios/resgistros-centros.service';
import { RegistroCentroVacunacionComponent } from '../registro-centro-vacunacion/registro-centro-vacunacion.component';

@Component({
  selector: 'app-detalle-registro-centro-vacunacion',
  templateUrl: './detalle-registro-centro-vacunacion.component.html',
  styleUrls: ['./detalle-registro-centro-vacunacion.component.scss']
})
export class DetalleRegistroCentroVacunacionComponent implements OnInit {

  constructor(private centros_service: CentroVacunacionService, private detalle_regis: ResgistrosCentrosService
    , private fb: FormBuilder) { }
  cols!: any[];

  @ViewChild('dialog')
  dialog!: RegistroCentroVacunacionComponent

  tipo_centro!: string;
  formGroupFiltroCentro!: FormGroup;

  ngOnInit(): void {
    this.cols = [
      { field: 'FECHA', header: 'FECHA' },
      { field: 'DOSIS_SUMINISTRADAS', header: 'DOSIS SUMINISTRADAS' },
      { field: 'DOSIS_REGISTRADAS', header: 'DOSIS REGISTRADAS' },
      { field: 'DOSIS_CON_PROBLEMAS_REGISTRO', header: 'DOSIS CON PROBLEMAS DE REGISTRO' },

    ];
    this.formGroupFiltroCentro = this.fb.group({
      tipo_centro: '',
      centro: ''

    })



    this.cargar_centros()
  }
  centros: any[] = []
  centro: any = {}
  login: any = {}

  cargar_centros() {
    this.login = JSON.parse(localStorage.getItem('login') || '')

    this.centros_service.cargar_centros_por_ubigeo_tipo_centro(this.login?.UBIGEO, this.formGroupFiltroCentro.value.tipo_centro).subscribe(data => {
      this.centros = data;
    })
  }

  BUSCAR() {

    console.log(this.formGroupFiltroCentro)

    this.cargar_resgistros_por_centro()

  }
  cargar_resgistros_por_centro() {
    this.detalle_regis.cargarResgistrosPorCentros(this.login.ID).subscribe(data => {
      this.registros_centro = data

    })
  }

  openNew() {
    this.dialog.open()


  }

  seleciono_centro(e: any) {


    this.dialog.centro_vacunacion = e.value;
  }

  registro_data() {
    this.cargar_resgistros_por_centro()
    this.dialog.hideDialog()
  }


  selecciono_tipo_centro(e: any) {
    this.cargar_centros()
  }

  registros_centro: any[] = []

}


