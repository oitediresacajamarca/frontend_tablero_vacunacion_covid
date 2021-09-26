import { Component, EventEmitter, forwardRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Calendar } from 'primeng/calendar';
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

  disabled_fec_desc:boolean=false;
  constructor(private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private distribucions: DistribucionIpressService) { }

  almacenes: any[] = []
  almacen: any
  display: boolean = false

  TIPOS_DOCUMENTOS: any[] = []


  @Output('agrego_distribucion')
  agrego_distribucion: EventEmitter<any> = new EventEmitter()

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

  selecciono_provincia() {
    console.log('kkkkloll')
  }

  hizo_click() {

    this.establecimientos_selector.UBIGEO_PROVINCIA = this.form.value.provincia.ID_PROVINCIA

    this.establecimientos_selector.cargar_establecimientos_por_provincia()

  }

  selecciono_fabricante() {
    console.log(this.form.value)
    if (this.form.value.fabricante.NOMBRE =='PFIZER') {
this.disabled_fec_desc=true
    }
    else{
      this.disabled_fec_desc=false
    }
  }





}
