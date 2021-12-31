import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResgistrosCentrosService } from 'src/app/servicios/resgistros-centros.service';

@Component({
  selector: 'app-modificar-registro-centro-vacunacion',
  templateUrl: './modificar-registro-centro-vacunacion.component.html',
  styleUrls: ['./modificar-registro-centro-vacunacion.component.scss']
})
export class ModificarRegistroCentroVacunacionComponent implements OnInit {

  constructor(private fb: FormBuilder, private regserv: ResgistrosCentrosService) { }
  visible: boolean = false;
  formG!: FormGroup;
  centro_vacunacion: any


  @Output('actualizo_registro')
  actualizo_registro: EventEmitter<any> = new EventEmitter();


  ngOnInit(): void {

    this.formG = this.fb.group({
      ID: '',
      FECHA: "",
      ESTRATEGIA: new FormControl('', [Validators.required,]),
      FABRICANTE: "PFYZER",
      DOSIS_DISTRIBUIDAS: 0,
      DOSIS_ADMINISTRADAS: 0,
      DOSIS_REGISTRADAS_HIS: 0,
      DOSIS_CON_PROBLEMAS_DIGITACION: 0,
      DOSIS_PENDIENTES_POR_DIGITAR: 0,
      DOSIS_PERDIDAS_FP: 0,
      MERMA_DOSIS_INCIDENTE_ADVERSO: 0,
      FACTOR_PERDIDA_CALCULADO: 0,
      STOCK_DOSIS: 0,
      CENTRO_DE_VACUNACION: '',
      IPRESS: 0,
      STOCK_INICIAL: 0,
      DOSIS_DISTRIBUIDAS_A_CENTRO_VACUNACION: 0,
      TIPO: 1
    })



  }

  calcula_pendientes_por_digitar() {


    if (this.centro_vacunacion.TIPO != 'ESTABLECIMIENTO') {
      this.formG.controls['DOSIS_PENDIENTES_POR_DIGITAR'].patchValue(this.formG.controls['DOSIS_ADMINISTRADAS'].value
        - this.formG.controls['DOSIS_REGISTRADAS_HIS'].value - this.formG.controls['DOSIS_CON_PROBLEMAS_DIGITACION'].value)

      this.formG.controls['FACTOR_PERDIDA_CALCULADO'].patchValue(this.formG.controls['DOSIS_PERDIDAS_FP'].value
        / this.formG.controls['DOSIS_ADMINISTRADAS'].value)



      this.formG.controls['STOCK_DOSIS'].patchValue(
        this.formG.controls['DOSIS_DISTRIBUIDAS'].value
        - this.formG.controls['DOSIS_ADMINISTRADAS'].value - this.formG.controls['DOSIS_PERDIDAS_FP'].value -
        this.formG.controls['MERMA_DOSIS_INCIDENTE_ADVERSO'].value)



    }

    if (this.centro_vacunacion.TIPO == 'ESTABLECIMIENTO') {
      this.formG.controls['DOSIS_PENDIENTES_POR_DIGITAR'].patchValue(this.formG.controls['DOSIS_ADMINISTRADAS'].value
        - this.formG.controls['DOSIS_REGISTRADAS_HIS'].value - this.formG.controls['DOSIS_CON_PROBLEMAS_DIGITACION'].value)

      this.formG.controls['FACTOR_PERDIDA_CALCULADO'].patchValue(this.formG.controls['DOSIS_PERDIDAS_FP'].value
        / this.formG.controls['DOSIS_ADMINISTRADAS'].value)



      this.formG.controls['STOCK_DOSIS'].patchValue(
        this.formG.controls['STOCK_INICIAL'].value
        - this.formG.controls['DOSIS_ADMINISTRADAS'].value - this.formG.controls['DOSIS_PERDIDAS_FP'].value -
        this.formG.controls['MERMA_DOSIS_INCIDENTE_ADVERSO'].value - this.formG.controls['DOSIS_DISTRIBUIDAS_A_CENTRO_VACUNACION'].value)

    }
  }

  hideDialog() {
    this.visible = false
  }

  cargarData(data: any) {

    console.log(data)
    this.formG.controls['ID'].setValue(data.ID)
    this.formG.controls['CENTRO_DE_VACUNACION'].setValue(data.CENTRO_DE_VACUNACION)
    this.formG.controls['FECHA'].setValue(new Date(data.FECHA))
    this.formG.controls['DOSIS_DISTRIBUIDAS'].setValue(data.DOSIS_DISTRIBUIDAS)
    this.formG.controls['DOSIS_ADMINISTRADAS'].setValue(data.DOSIS_ADMINISTRADAS)
    this.formG.controls['DOSIS_REGISTRADAS_HIS'].setValue(data.DOSIS_REGISTRADAS_HIS)
    this.formG.controls['DOSIS_CON_PROBLEMAS_DIGITACION'].setValue(data.DOSIS_CON_PROBLEMAS_DIGITACION)
    this.formG.controls['DOSIS_PENDIENTES_POR_DIGITAR'].setValue(data.DOSIS_PENDIENTES_POR_DIGITAR)
    this.formG.controls['DOSIS_PERDIDAS_FP'].setValue(data.DOSIS_PERDIDAS_FP)
    this.formG.controls['MERMA_DOSIS_INCIDENTE_ADVERSO'].setValue(data.MERMA_DOSIS_INCIDENTE_ADVERSO)
    this.formG.controls['FACTOR_PERDIDA_CALCULADO'].setValue(data.FACTOR_PERDIDA_CALCULADO)
    this.formG.controls['STOCK_DOSIS'].setValue(data.STOCK_DOSIS)
    this.formG.controls['ESTRATEGIA'].setValue(data.ESTRATEGIA)
    this.formG.controls['FABRICANTE'].setValue(data.FABRICANTE)
















  }

  Guardar() {

    
    if (this.formG.valid == true) {
      this.regserv.modificarRegistro(this.formG.controls['ID'].value, this.formG.value).subscribe(res => {
        console.log(res)
        this.actualizo_registro.emit(res)
      })

    }


  }

}
