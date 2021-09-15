import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { FabricanteComponent } from 'src/app/controles/fabricante/fabricante.component';

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

  constructor(private fb: FormBuilder, private confirmationService: ConfirmationService) { }

  almacenes: any[] = []
  almacen: any
  display: boolean = false

  TIPOS_DOCUMENTOS: any[] = []


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
      almacen: '',
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


  GUARDAR() {


    this.confirmationService.confirm({
      message: 'Estaa seguro de Guardar los datos?',
      accept: () => {
        console.log(this.form.value)
      }
    });
    
 
  }

}
