import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnviosRedService } from 'src/app/servicios/envios-red.service';

@Component({
  selector: 'app-nuevo-envio-red',
  templateUrl: './nuevo-envio-red.component.html',
  styleUrls: ['./nuevo-envio-red.component.scss']
})
export class NuevoEnvioRedComponent implements OnInit {

  constructor(private fb: FormBuilder,private envios_red:EnviosRedService) { }
  display: boolean = false;
  form!: FormGroup
  @Input('ID_DISTRIBUCION')
  ID_DISTRIBUCION!:number;

  @Output('creo_nuevo')
  creo_nuevo:EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.form = this.fb.group({

      ID_DISTRIBUCION: '',
      FECHA_ENVIO: '',
      CANTIDAD_VIALES: '',
      CANTIDAD_DOSIS: '',
      FECHA_VENCIMIENTO: '',
      FECHA_DESCONGELAMIENTO: ''




    })

  }

  open() {
    this.display = true;
  
  }

  close() {
    this.display = false;
  }

  GUARDAR() {

    this.form.controls['ID_DISTRIBUCION'].setValue(this.ID_DISTRIBUCION)

    this.envios_red.nuevo_envio(this.form.value).subscribe(data=>{

      this.creo_nuevo.emit('nuevo')

      this.close();
    })

  }

}
