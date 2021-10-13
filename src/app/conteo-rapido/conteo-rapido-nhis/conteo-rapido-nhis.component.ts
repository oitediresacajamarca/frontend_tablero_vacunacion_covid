import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { ConteoRapidoService } from 'src/app/servicios/conteo-rapido.service';
import { DistribucionIpressService } from 'src/app/servicios/distribucion-ipress.service';

@Component({
  selector: 'app-conteo-rapido-nhis',
  templateUrl: './conteo-rapido-nhis.component.html',
  styleUrls: ['./conteo-rapido-nhis.component.scss']
})
export class ConteoRapidoNhisComponent implements OnInit {
  CODIGO_UNICO!: string

  CODIGO_PROVINCIA!: string;
  FABRICANTE!: string
  UBIGEO!: string;
  constructor(private fb: FormBuilder, private confirmationService: ConfirmationService,
    private config: PrimeNGConfig, private translateService: TranslateService, private distribucion_ipress: DistribucionIpressService,
    private conteo_rapido: ConteoRapidoService) { }
  es_ES: any
  conteos!: any[]
  
DOSIS:any[]=[];

  ngOnInit(): void {
    this.DOSIS = [
      {name: '1ª dosis', code: 'NY'},
      {name: '2ª dosis', code: 'RM'},     
  ];
  }



  formGroup = this.fb.group({
    PROVINCIA: ['', Validators.required],
    DISTRITO: ['', Validators.required],
    FABRICANTE: ['',],
    DOSIS_APLICADA: ['',],
    CANTIDAD: ['', Validators.required],
    FECHA: ['', Validators.required],
  })


  NUM_VIALES_CANTIDAD: any


  selecionoProvincia(event: any) {

console.log(event)
    this.CODIGO_PROVINCIA = event.ID_PROVINCIA

  }

  selecionoDistrito(event: any) {

    this.UBIGEO = event
    this.cargarDetalle()

  }

  selecionoFabricante(event: any) {

    this.FABRICANTE = event




  }
  seleccionoIpress(event: any) {

    this.CODIGO_UNICO = event.value.Codigo_Unico



  }
  cargarDetalle() {
    this.conteo_rapido.cargarDetalle(this.formGroup.controls['DISTRITO'].value).subscribe(data => {
      this.conteos = data

      console.log(data)
    })
  }


  GUARGAR() {
    console.log(this.formGroup.valid)

    if (this.formGroup.valid) {

      this.confirmationService.confirm({
        message: 'Estaa seguro de Guardar los datos?',
        accept: () => {
          this.conteo_rapido.nuevoConteo(this.formGroup.value).subscribe(respuesta => {
            this.conteos = respuesta


            console.log(respuesta)
          })
        }
      });
    }
  }

  ELIMINAR(id: any) {

    console.log(id)
    this.conteo_rapido.eliminarDetalle(id).subscribe(respuesta => {

      console.log(respuesta)
      this.cargarDetalle()

    })
  }

}
