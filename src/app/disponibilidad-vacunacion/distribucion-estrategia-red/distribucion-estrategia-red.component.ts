import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { DistribucionEstrategiaRedService } from 'src/app/servicios/distribucion-estrategia-red.service';

@Component({
  selector: 'app-distribucion-estrategia-red',
  templateUrl: './distribucion-estrategia-red.component.html',
  styleUrls: ['./distribucion-estrategia-red.component.scss']
})
export class DistribucionEstrategiaRedComponent implements OnInit {

  constructor(private fb: FormBuilder, private distris: DistribucionEstrategiaRedService, private confirmation: ConfirmationService) { }

  display: boolean = false
  TIPO_DOCUMENTOS: any = [{ NOMBRE: 'GUIA DE REMISION', name: 'GUIA DE REMISION' },
  { NOMBRE: 'PECOSA', name: 'PECOSA' }
  ]

  form!: FormGroup;

  @Output('creo_nuevo')
  creo_nuevo:EventEmitter<any> =new EventEmitter()

  ngOnInit(): void {

    this.form = this.fb.group({
      PROVINCIA: '',
      FABRICANTE: '',
      CANTIDAD_VIALES: '',
      CANTIDAD_DOSIS: '',
      FECHA: '',
      TIPO_DOCUMENTO: '',
      NUMERO_DOCUMENTO: ''
    })
  }

  guardar() {

    this.confirmation.confirm({
      message: 'Esta seguro de Guardar los datos?',
      accept: () => {
        this.distris.crear_nueva(this.form.value).subscribe(data => {
          this.creo_nuevo.emit()

          this.close()
        })
      }
    })
  }


  open() {
    this.display = true;
  }
  close() {
    this.display = false;
  }
}
