import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovimientosComplService } from 'src/app/servicios/movimientos-compl.service';

@Component({
  selector: 'app-editar-distribucion-almacen-red-sismed',
  templateUrl: './editar-distribucion-almacen-red-sismed.component.html',
  styleUrls: ['./editar-distribucion-almacen-red-sismed.component.scss']
})
export class EditarDistribucionAlmacenRedSismedComponent implements OnInit {

  constructor(private fb: FormBuilder,private movcom:MovimientosComplService) { }

  distris: any = {}
  display: boolean = false;
  formGr!: FormGroup;
  open() {
    this.display = true;

    this.formGr = this.fb.group(

      {
        NUMERO_MOVIMIENTO_SIMED: '',
        FECHA_VENCIMIENTO: '',
        FECHA_DESCONGELAMIENTO: ''
      }
    )
  }
  close() {
    this.display = false;
  }

  ngOnInit(): void {
  }
  asignar() {

    this.formGr.controls['NUMERO_MOVIMIENTO_SIMED'].setValue(this.distris.MOVNUMERO)
    this.movcom.asignar(this.formGr.value).subscribe(data=>{
      this.close()
    })



  }
}
