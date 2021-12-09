import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DistritoSelectorComponent } from 'src/app/controles/distrito-selector/distrito-selector.component';
import { EstablecimientosSelectorComponent } from 'src/app/controles/establecimientos-selector/establecimientos-selector.component';
import { IpressSelectorComponent } from 'src/app/controles/ipress-selector/ipress-selector.component';
import { DitribucionMicroredIpressService } from 'src/app/servicios/ditribucion-microred-ipress.service';

@Component({
  selector: 'app-nuevo-microred-ipress',
  templateUrl: './nuevo-microred-ipress.component.html',
  styleUrls: ['./nuevo-microred-ipress.component.scss']
})
export class NuevoMicroredIpressComponent implements OnInit {

  constructor(private fb: FormBuilder, private dister: DitribucionMicroredIpressService) { }

  @Output()
  RegistroNuevo: EventEmitter<any> = new EventEmitter()

  display: boolean = false

  form!: FormGroup;

  @ViewChild('desde_distrito')
  desde_distrito!: DistritoSelectorComponent

  @ViewChild('desde_ipress')
  desde_ipress!: EstablecimientosSelectorComponent


  @ViewChild('hacia_distrito')
  hacia_distrito!: DistritoSelectorComponent


  @ViewChild('hacia_ipress')
  hacia_ipress!: EstablecimientosSelectorComponent


  @ViewChild('select_establec')
  select_establec!: EstablecimientosSelectorComponent





  MICRORED:any={}


















  ngOnInit(): void {

    this.form = this.fb.group({
      FECHA_ENVIO: '',


      CANTIDAD_VIALES: '',
      CANTIDAD_DOSIS: '',
      FECHA_VENCIMIENTO: '',
      FECHA_DESCONGELAMIENTO: ''

    })
  }

  selecciono_ipress_hacia(e:any){

  }

  GUARDAR() {
    this.dister.nuevo(this.form.value).subscribe((data) => {


     

    })

    this.RegistroNuevo.emit();


    this.display = false


  }
  cancelar() {
    this.display = false
  }

  ABRIR() {
    this.display = true

    this.select_establec.CODIGO_MICRORED=this.MICRORED.ID_MICRORED

    this.select_establec.cargar_establecimientos_por_microred()

    console.log(this.MICRORED)
  }

  selecciono_provincia_desde(e: any) {

    this.desde_distrito.cod_provincia = e.ID_PROVINCIA
    this.desde_distrito.cargar_distritos()



  }

  selecciono_distrito_desde(e: any) {


    this.desde_ipress.UBIGEO = e

    this.desde_ipress.cargar_establecimientos()

  }
  selecciono_provincia_hacia(e: any) {
    this.hacia_distrito.cod_provincia = e.ID_PROVINCIA
    this.hacia_distrito.cargar_distritos()
  }

  selecciono_distrito_hacia(e: any) {


    this.hacia_ipress.UBIGEO = e

    this.hacia_ipress.cargar_establecimientos()
  }


}
