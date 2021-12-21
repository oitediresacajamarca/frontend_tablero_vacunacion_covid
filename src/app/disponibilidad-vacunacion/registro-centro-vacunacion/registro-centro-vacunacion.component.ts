import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResgistrosCentrosService } from 'src/app/servicios/resgistros-centros.service';

@Component({
  selector: 'app-registro-centro-vacunacion',
  templateUrl: './registro-centro-vacunacion.component.html',
  styleUrls: ['./registro-centro-vacunacion.component.scss']
})
export class RegistroCentroVacunacionComponent implements OnInit {

  constructor(private registross: ResgistrosCentrosService, private fb: FormBuilder) { }
  visible: boolean = false;

  centro_vacunacion: any = {}
  formG!: FormGroup

  @Output('registro_data')
  registro_data: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {


    this.formG = this.fb.group({
      "ID": '',
      "FECHA": "",
      ESTRATEGIA: '',
      "FABRICANTE": "PFYZER",
      "DOSIS_DISTRIBUIDAS": 0,
      "DOSIS_ADMINISTRADAS": 0,
      "DOSIS_REGISTRADAS_HIS": 0,
      "DOSIS_CON_PROBLEMAS_DIGITACION": 0,
      "DOSIS_PENDIENTES_POR_DIGITAR": 0,
      "DOSIS_PERDIDAS_FP": 0,
      "MERMA_DOSIS_INCIDENTE_ADVERSO": 0,
      "FACTOR_PERDIDA_CALCULADO": 0,
      "STOCK_DOSIS": 0,
      "CENTRO_DE_VACUNACION": '',
      "IPRESS": 0,
      "STOCK_INICIAL": 0,
      "DOSIS_DISTRIBUIDAS_A_CENTRO_VACUNACION": 0,
      "TIPO": 1

    })
  }

  open() {
    this.visible = true
    /*  
      this.formG.valueChanges.subscribe(data=>{
  
       this.calcula_pendientes_por_digitar()
      })*/
  }

  hideDialog() {
    this.visible = false;
  }

  Guardar() {
    console.log(this.formG.value)
    if(this.formG.controls['STOCK_DOSIS'].value>=0){

    this.registross.nuevoResgistrosPorCentros(this.centro_vacunacion.ID, this.formG.value).subscribe((data) => {
      this.registro_data.emit(data)

    })
  } else{
    alert('EL STOCK DE DOSIS NO PUEDE SER UNA CANTIDAD NEGATIVA')
  }
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


  semaforo: string = 'success'
}
