import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { ConteoRapidoService } from '../servicios/conteo-rapido.service';
import { DistribucionIpressService } from '../servicios/distribucion-ipress.service';

@Component({
  selector: 'app-conteo-rapido',
  templateUrl: './conteo-rapido.component.html',
  styleUrls: ['./conteo-rapido.component.scss']
})
export class ConteoRapidoComponent implements OnInit {

  CODIGO_UNICO!: string

  CODIGO_PROVINCIA!: string;
  FABRICANTE!: string
  UBIGEO!: string;
  constructor(private fb: FormBuilder, private confirmationService: ConfirmationService,
    private config: PrimeNGConfig, private translateService: TranslateService, private distribucion_ipress: DistribucionIpressService,
    private conteo_rapido:ConteoRapidoService) { }
  es_ES: any
  conteos!:any[]


  ngOnInit(): void {
  }



  formGroup = this.fb.group({
    PROVINCIA:'',
    DISTRITO:'',
    FABRICANTE:'',
    CANTIDAD: '',
    FECHA: '',

  })


  NUM_VIALES_CANTIDAD: any


  selecionoProvincia(event: any) {


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
  cargarDetalle(){
    this.conteo_rapido.cargarDetalle(this.formGroup.controls['DISTRITO'].value).subscribe(data=>{
      this.conteos=data

      console.log(data)
    })
  }


  GUARGAR() {
    console.log(this.formGroup.value)


    this.confirmationService.confirm({
      message: 'Estaa seguro de Guardar los datos?',
      accept: () => {
        this.conteo_rapido.nuevoConteo(this.formGroup.value).subscribe(respuesta => {
this.conteos=respuesta


          console.log(respuesta)
        })
      }
    });
  }

}
