import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { AnexosService } from 'src/app/servicios/anexos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recepcion-anexos',
  templateUrl: './recepcion-anexos.component.html',
  styleUrls: ['./recepcion-anexos.component.scss']
})
export class RecepcionAnexosComponent implements OnInit {

  @Output('nuevo_registro')
  nuevo_registro: EventEmitter<any> = new EventEmitter()


  constructor(private fb: FormBuilder, private confirmation: ConfirmationService,
    private anexos: AnexosService) { }

  form!: FormGroup;
  VISIBLE: boolean = false;
  TIPOS_DOCUMENTOS: any = [
    { NOMBRE: 'PECOSA' },
    { NOMBRE: 'GUIA DE REMISION' }
  ]

  url_cargar!: string;

  ngOnInit(): void {
    this.url_cargar = environment.url__backend
    this.form = this.fb.group({
      PROVINCIA: '',
      TIPO_DOCUMENTO: '',
      NUMERO_DOCUMENTO: '',
      TEMPERATUR_MAXIMA: '',
      TEMPERATURA_MINIMA: '',
      ANEXO_1: '',
      ANEXO_2: '',
      ANEXO_3: '',

      OBSERVACIONES: ''
    })
  }

  anexo1(event: any) {

    this.form.value.ANEXO_1 = event.originalEvent.body.filename

  }

  anexo2(event: any) {

    this.form.value.ANEXO_2 = event.originalEvent.body.filename

  }

  anexo3(event: any) {

    this.form.value.ANEXO_3 = event.originalEvent.body.filename

  }
  close() {
    this.VISIBLE = false
  }

  guardar() {
    this.confirmation.confirm({
      message: 'Esta seguro de Guardar los datos?',
      accept: () => {


        this.anexos.nuevo(this.form.value).subscribe(data => {
          this.nuevo_registro.emit()

          this.close()
        })
        console.log(this.form.value)

      }
    })
  }


}
