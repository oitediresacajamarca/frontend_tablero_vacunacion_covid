import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Console } from 'console';
import { SSL_OP_LEGACY_SERVER_CONNECT } from 'constants';
import { ConfirmationService } from 'primeng/api';
import { DistribucionRedService } from 'src/app/servicios/distribucion-red.service';


@Component({
  selector: 'app-distribucion-almacen-red',
  templateUrl: './distribucion-almacen-red.component.html',
  styleUrls: ['./distribucion-almacen-red.component.scss']
})
export class DistribucionAlmacenRedComponent implements OnInit {

  constructor(private fb: FormBuilder, private confirmation: ConfirmationService, private distribucion: DistribucionRedService) { }
  almacenes: any[] = []
  almacen: any

  TIPOS_DOCUMENTOS: any[] = []
  display: boolean = false

  form!: FormGroup;

  @Output('registro_distribucion')
  registro_distribucion: EventEmitter<any[]> = new EventEmitter()

  ngOnInit(): void {



    this.almacenes = [
      { name: 'ALMACEN ESPECIALIZADO JAEN', code: 'ALMACEN ESPECIALIZADO JAEN',almcod:'007A01' },
      { name: 'ALMACEN ESPECIALIZADO CAJAMARCA', code: 'ALMACEN ESPECIALIZADO CAJAMARCA',almcod:'016A01' },
    ];

    this.TIPOS_DOCUMENTOS = [
      { name: 'PECOSA', code: 'PECOSA' },
      { name: 'GUIA DE REMISION', code: 'GUIA DE REMISION' },
    ];

    this.form = this.fb.group({
      almacen: '',
      provincia: '',
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

    this.display = true;
  }
  close() {

    this.display = false;
  }

  guardar() {

    this.confirmation.confirm({
      message: 'Esta seguro de Guardar los datos?',
      accept: () => {
        this.distribucion.nuevoDistribucionRed(this.form.value).subscribe(data => {

        

          this.registro_distribucion.emit(data)
          


        })
      }
    });


  }

}
