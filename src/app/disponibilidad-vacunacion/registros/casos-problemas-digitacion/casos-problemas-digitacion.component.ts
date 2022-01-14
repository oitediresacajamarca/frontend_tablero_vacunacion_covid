import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CasosProblemasDigitacionService } from 'src/app/servicios/casos-problemas-digitacion/casos-problemas-digitacion.service';

@Component({
  selector: 'app-casos-problemas-digitacion',
  templateUrl: './casos-problemas-digitacion.component.html',
  styleUrls: ['./casos-problemas-digitacion.component.scss']
})
export class CasosProblemasDigitacionComponent implements OnInit {

  constructor(private casos_servic: CasosProblemasDigitacionService, private formb: FormBuilder) { }
  display: any = false
  DOSIS: any = [{ nombre: '1ra Dosis' }, { nombre: '2da Dosis' }, { nombre: '3ra Dosis' }]
  FG!: FormGroup

  @Output('registrado')
  registrado: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
    this.FG = this.formb.group({

      NUMERO_DOCUMENTO: ['',Validators.required],
      NOMBRES: ['',Validators.required],
      'APELLIDO_PATERNO': ['',Validators.required],
      'APELLIDO_MATERNO': '',
      'DOSIS_CON_PROBLEMAS': '',
      REGION: '',
      'DESCRIPCION_DEL_CASO': '',
      UBIGEO_REPORTA: ''



    })
  }

  hideDialog() {
    this.display = false
  }
  Guardar() {

    if(this.FG.valid){
    let login = JSON.parse(localStorage.getItem('login') || '')


    this.FG.controls['UBIGEO_REPORTA'].setValue(login.UBIGEO)
    this.casos_servic.guardar_nuevo_caso(this.FG.value).subscribe(data => {
      this.registrado.emit()
      this.display = false

    })
  }else{
    alert('es necesario ingresar todos los campos')
  }

  }

}
