import { EventEmitter, forwardRef, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FabricanteComponent),
      multi: true
    }
  ]
})
export class FabricanteComponent implements OnInit, ControlValueAccessor {

  onChange = (_: any) => { }
  constructor() { }
  writeValue(obj: any): void {


    let re = this.FABRICANTES.find(fab => { return fab.NOMBRE == obj })



    this.FABRICANTE = re
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {

  }

  @Output('selecciono')

  selecciono = new EventEmitter()

  FABRICANTES: any[] = [{ NOMBRE: 'SINOPHARM' }, { NOMBRE: 'PFIZER' }, { NOMBRE: 'ASTRAZENECA' }]
  FABRICANTE: any;

  ngOnInit(): void {
  }
  seleccionoFabricante(event: any) {

    this.onChange(this.FABRICANTE)
    this.selecciono.emit(event.value.NOMBRE)
  }

}
