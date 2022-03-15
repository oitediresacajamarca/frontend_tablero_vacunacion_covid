import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ConfirmationService } from 'primeng/api';
import { CuboService } from 'src/app/servicios/cubo.service';
import { DistribucionEstrategiaRedService } from 'src/app/servicios/distribucion-estrategia-red.service';

@Component({
  selector: 'app-distribucion-estrategia-red',
  templateUrl: './distribucion-estrategia-red.component.html',
  styleUrls: ['./distribucion-estrategia-red.component.scss']
})
export class DistribucionEstrategiaRedComponent implements OnInit {

  constructor(private fb: FormBuilder, private distris: DistribucionEstrategiaRedService, private confirmation: ConfirmationService
  ) { }

DOSIS_RECIBIDAS:number=0
DOSIS_SUMINISTRADAS:number=0

  display: boolean = false
  TIPO_DOCUMENTOS: any = [{ NOMBRE: 'GUIA DE REMISION', name: 'GUIA DE REMISION' },
  { NOMBRE: 'PECOSA', name: 'PECOSA' }
  ]

  form!: FormGroup;

  @Output('creo_nuevo')
  creo_nuevo: EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {

    this.form = this.fb.group({
      PROVINCIA: '',
      FABRICANTE: '',
      CANTIDAD_VIALES: '',
      CANTIDAD_DOSIS: '',
      FECHA: '',
   /*   TIPO_DOCUMENTO: '',
      NUMERO_DOCUMENTO: ''*/
    })
  }

  guardar() {

    console.log(this.form.value)
  
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
    this.cargar_stock()
  }
  close() {
    this.display = false;
  }

  selecciono_provincia() {


    this.distris.query_cantidad_asiganda.filters[0].values = [this.form.value.PROVINCIA.ID_PROVINCIA]
    this.cargar_dosis_asignadas()
    this.distris.query_dosis_suministradas.filters[0].values= [this.form.value.PROVINCIA.NOMBRE]
    this.cargar_dosis_suministradas()
  }

  cargar_dosis_asignadas(){
    this.DOSIS_RECIBIDAS=0;
    this.distris.dosis_asignadas_().subscribe(data=>{
  
      this.DOSIS_RECIBIDAS=data;
    })
  }

  seleciono_fabricante(){

  
    this.distris.query_cantidad_asiganda.filters[1].values = [this.form.value.FABRICANTE.NOMBRE]
    this.cargar_dosis_asignadas()
    this.distris.query_dosis_suministradas.filters[1].values= [this.form.value.FABRICANTE.NOMBRE]
    this.cargar_dosis_suministradas()

  }


  cargar_dosis_suministradas(){
    this.DOSIS_SUMINISTRADAS=0;
    this.distris.dosis_suministradas().subscribe(data=>{

   
      this.DOSIS_SUMINISTRADAS=data;
    })
  }

  cargar_stock(){
    this.cargar_dosis_asignadas()
    this.cargar_dosis_suministradas()
  }

  cancelar(){
    this.display=false;
  }

}
