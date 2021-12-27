import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CentroVacunacionService } from 'src/app/servicios/centro-vacunacion.service';
import { ResgistrosCentrosService } from 'src/app/servicios/resgistros-centros.service';
import { ModificarRegistroCentroVacunacionComponent } from '../centro-vacunacion/modificar-registro-centro-vacunacion/modificar-registro-centro-vacunacion.component';
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

  @ViewChild('modificar_dialog')
  modificar_dialog!:ModificarRegistroCentroVacunacionComponent

  tipo_centro!: string;
  formGroupFiltroCentro!: FormGroup;

  ID_CENTRO_FILTRAR!: string

  ngOnInit(): void {
    this.cols = [
      { field: 'FECHA', header: 'FECHA', format: "'dd/MM/YY'", isdate: true },
      { field: 'FABRICANTE', header: 'FABRICANTE', format: '' },
      { field: 'DOSIS_ADMINISTRADAS', header: 'DOSIS ADMINISTRADAS', format: '' },
      { field: 'DOSIS_REGISTRADAS_HIS', header: 'DOSIS REGISTRADAS HIS', format: '' },
      { field: 'STOCK_DOSIS', header: 'STOCK DOSIS', format: '' },

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



    this.cargar_resgistros_por_centro()


  }
  cargar_resgistros_por_centro() {

    if (this.ID_CENTRO_FILTRAR == undefined) { alert('DEBE DE SELECCIONAR UN ESTABLECIMIENTO O CENTRO DE VACUNACION') }
    else {
      this.detalle_regis.cargarResgistrosPorCentros(this.ID_CENTRO_FILTRAR).subscribe(data => {
        this.registros_centro = data
      })
    }

  }

  openNew() {

    if (this.ID_CENTRO_FILTRAR == undefined) { alert('DEBE DE SELECCIONAR UN ESTABLECIMIENTO O CENTRO DE VACUNACION') }
    else { this.dialog.open() }

  }

  seleciono_centro(e: any) {


    this.ID_CENTRO_FILTRAR = e.value.ID


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


  eliminar(id: any) {

    this.detalle_regis.eliminarRegistro(id).subscribe(data => {
      this.cargar_resgistros_por_centro()
    })
  }
  modificar(dist: any) {
   
    this.centros_service.devolver_centro_por_id(dist.CENTRO_DE_VACUNACION).subscribe(data=>{
  
      this.modificar_dialog.centro_vacunacion=data
      this.modificar_dialog.visible=true

      this.modificar_dialog.cargarData(dist)
    })


 
  }
}



