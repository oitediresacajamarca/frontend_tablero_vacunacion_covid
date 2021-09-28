import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovimientosSismedService } from 'src/app/servicios/movimientos-sismed.service';
import { MovimientoSismed } from '../interfaces/movimiento-sismed';

@Component({
  selector: 'app-recepcion-almacen-especial',
  templateUrl: './recepcion-almacen-especial.component.html',
  styleUrls: ['./recepcion-almacen-especial.component.scss']
})
export class RecepcionAlmacenEspecialComponent implements OnInit {

  constructor(private movimientos: MovimientosSismedService,
    private fb: FormBuilder) { }

  almacenes: any[] = [];
  movimientos_sismed: MovimientoSismed[] = [];
  form!: FormGroup;

  ngOnInit(): void {

    this.form = this.fb.group({
      almacen: '',
      desde: '',
      hasta: ''

    })
    this.almacenes = [
      { name: 'ALMACEN ESPECIALIZADO JAEN', code: '060801' },
      { name: 'ALMACEN ESPECIALIZADO CAJAMARCA', code: '060101' },
    ];
    this.cargar_movimientos()
  }


  cargar_movimientos() {
    this.movimientos.cargar_todos_movimientos().subscribe(data => {

      this.movimientos_sismed = data
     
    })

    // this.movimientos_sismed=[{DOCDESTINO:'hekk'}]

  }


  buscar() {

    console.log(this.form.value)

    this.movimientos.cargar_filtrados_movimientos(this.form.value).subscribe(

      data => {
  
        console.log(data)
      this.movimientos_sismed = data

      }

    )
  }

}