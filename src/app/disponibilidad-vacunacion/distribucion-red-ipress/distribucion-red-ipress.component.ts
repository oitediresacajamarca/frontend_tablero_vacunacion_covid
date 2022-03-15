import { Component, EventEmitter, forwardRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Calendar } from 'primeng/calendar';
import { DistritoSelectorComponent } from 'src/app/controles/distrito-selector/distrito-selector.component';
import { EstablecimientosSelectorComponent } from 'src/app/controles/establecimientos-selector/establecimientos-selector.component';
import { FabricanteComponent } from 'src/app/controles/fabricante/fabricante.component';
import { DistribucionIpressService } from 'src/app/servicios/distribucion-ipress.service';


@Component({
  selector: 'app-distribucion-red-ipress',
  templateUrl: './distribucion-red-ipress.component.html',
  styleUrls: ['./distribucion-red-ipress.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FabricanteComponent),
      multi: true
    }
  ]
})
export class DistribucionRedIpressComponent implements OnInit {
  form!: FormGroup;

  disabled_fec_desc: boolean = false;
  constructor(private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private distribucions: DistribucionIpressService) { }

  almacenes: any[] = []
  almacen: any
  display: boolean = false

  TIPOS_DOCUMENTOS: any[] = []

  dosis_aplicadas: number = 0;
  dosis_recibidas:number=0;


  @Output('agrego_distribucion')
  agrego_distribucion: EventEmitter<any> = new EventEmitter()

  @ViewChild('selector_distrito')
  selector_distrito!: DistritoSelectorComponent

  @ViewChild('establecimientos_selector')
  establecimientos_selector!: EstablecimientosSelectorComponent

  @ViewChild('FECHA_DESCONGE')
  FECHA_DESCONGE!: Calendar

  ngOnInit(): void {

    this.almacenes = [
      { name: 'ALMACEN ESPECIEALISADO JAEN', code: 'ALMACEN ESPECIEALISADO JAEN' },
      { name: 'ALMACEN ESPECIEALISADO CAJAMARCA', code: 'ALMACEN ESPECIEALISADO CAJAMARCA' },
    ];

    this.TIPOS_DOCUMENTOS = [
      { name: 'PECOSA', code: 'PECOSA' },
      { name: 'GUIA DE REMISION', code: 'GUIA DE REMISION' },
    ];


    this.form = this.fb.group({

      provincia: '',
      IPRESS: '',
      fabricante: '',
      FECHA_DISTRIBUCION: '',
      CANTIDAD_DOSIS: '',
      CANTIDAD_VIALES: '',
      FECHA_VENCIMIENTO: '',
      FECHA_DESCONGELAMIENTO: '',
      TIPO_DOCUMENTO: '',
      NUMERO_DOCUMENTO: ''

    })

  }
  open() {

    this.display = true
  }

  close() {
    this.display = false
  }


  GUARDAR() {


    this.confirmationService.confirm({
      message: 'Esta seguro de Guardar los datos?',
      accept: () => {
        console.log(this.form.value)

        this.distribucions.registroDisponibilidad(this.form.value).subscribe(data => {
          this.agrego_distribucion.emit('emitio')
          this.close()

        })
      }
    });


  }

  selecciono_provincia(event: any) {
    this.selector_distrito.cod_provincia = event.ID_PROVINCIA
    this.selector_distrito.cargar_distritos()

  }

  hizo_click() {


    this.establecimientos_selector.UBIGEO_PROVINCIA = this.form.value.provincia.ID_PROVINCIA

    this.establecimientos_selector.cargar_establecimientos_por_provincia()

  }

  selecciono_fabricante(event: any) {

    if (this.form.value.fabricante.NOMBRE == 'PFIZER') {
      this.disabled_fec_desc = false
    }
    else {
      this.disabled_fec_desc = true
    }

    this.distribucions.query_avances.filters[1].values = [this.form.value.fabricante.NOMBRE]
    this.cargar_dosis_aplicadas()

    this.distribucions.query_cantidad_asiganda.filters[1].values = [this.form.value.fabricante.NOMBRE]
    this.cargar_dosis_recibidas()


  }

  selecciono_establecimiento(event: any) {
  

    console.log(event.value.Codigo_Unico)
    this.distribucions.query_avances.filters[0].values = [parseInt(event.value.Codigo_Unico).toString()]
    this.cargar_dosis_aplicadas()
    this.distribucions.query_cantidad_asiganda.filters[0].values = [event.value.Codigo_Unico]
    this.cargar_dosis_recibidas()

  }

  cargar_dosis_aplicadas() {

    this.distribucions.cargarDosisAplicadas().subscribe(data => {
      this.dosis_aplicadas = data


    })
  }

  selecciono_distrito(event: any) {

    this.establecimientos_selector.UBIGEO = event
    this.establecimientos_selector.cargar_establecimientos()


  }

  cargar_dosis_recibidas() {
    this.distribucions.cargarDosisRecibidas().subscribe(data => {

      this.dosis_recibidas=data
    })
  }





}
