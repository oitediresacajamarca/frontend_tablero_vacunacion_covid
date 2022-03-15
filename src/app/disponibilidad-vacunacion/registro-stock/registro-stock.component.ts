import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { DistribucionIpressService } from 'src/app/servicios/distribucion-ipress.service';
import { StockIpressService } from 'src/app/servicios/stock-ipress.service';

@Component({
  selector: 'app-registro-stock',
  templateUrl: './registro-stock.component.html',
  styleUrls: ['./registro-stock.component.scss']
})
export class RegistroStockComponent implements OnInit {


  CODIGO_UNICO!: string

  CODIGO_PROVINCIA!: string;
  FABRICANTE!: string
  UBIGEO!: string;

  constructor(private fb: FormBuilder, private confirmationService: ConfirmationService,
    private config: PrimeNGConfig, private translateService: TranslateService, private distribucion_ipress: DistribucionIpressService,
    private stock_ipress: StockIpressService) { }

  es_ES: any
  distribuciones!: any[]

  ngOnInit(): void {


    this.translateService.use('es_ES');
    this.translateService.get('primeng').subscribe(res => {
      this.config.setTranslation(res)


    })

      ;


  }
  formGroup = this.fb.group({
    FABRICANTE: '',
    CODIGO_UNICO: '',
    NUM_VIALES_CANTIDAD: '',
    STOCK_ACTUAL_VIALES: '',
    STOCK_ACTUAL_DOSIS: '',
    FECHA: '',
    FECHA_DESCONGELAMIENTO: '',
    FECHA_VENCIMIENTO: '',
    RESPONSABLE: '',
    OBSERVACION: ''

  })


  NUM_VIALES_CANTIDAD: any


  selecionoProvincia(event: any) {


    this.CODIGO_PROVINCIA = event.ID_PROVINCIA

  }

  selecionoDistrito(event: any) {

    this.UBIGEO = event


  }

  selecionoFabricante(event: any) {

    this.FABRICANTE = event




  }
  seleccionoIpress(event: any) {

    this.CODIGO_UNICO = event.value.Codigo_Unico

    this.cargarDetalle()

  }
  cargarDetalle() {
    this.stock_ipress.cargarDetalleStock(this.CODIGO_UNICO).subscribe(data => {
      this.distribuciones = data

   

      console.log(data)
    })
  }


  GUARGAR() {
   


    this.confirmationService.confirm({
      message: 'Esta seguro de Guardar los datos?',
      accept: () => {


        this.stock_ipress.nuevoStock(this.formGroup.value).subscribe(respuesta => {

          this.distribuciones = respuesta

          this.cargarDetalle()

          console.log(respuesta)
        })
      }
    });
  }

}
