import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, EventEmitter, forwardRef, Input, Output } from '@angular/core';
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
export class FabricanteComponent implements OnInit, ControlValueAccessor,AfterViewInit {

  onChange = (_: any) => { }
  constructor() { }
  ngAfterViewInit(): void {
 
    if (this.INFL == true) {
      this.FABRICANTES = this.FABRICANTES_ADD;
    }

  }
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

  FABRICANTES: any[] = [{ NOMBRE: 'SINOPHARM' }, { NOMBRE: 'PFIZER' },
   { NOMBRE: 'PFIZER PEDIATRICA' }, { NOMBRE: 'ASTRAZENECA' },{NOMBRE: 'MODERNA'}]
  FABRICANTE: any;

  @Input('INFL')
  INFL: Boolean = false;


  ngOnInit(): void {

    if (this.INFL == true) {
      this.FABRICANTES = this.FABRICANTES_ADD;
    }


  }

  seleccionoFabricante(event: any) {

    this.onChange(this.FABRICANTE)
    this.selecciono.emit(event.value.NOMBRE)
  }
  FABRICANTES_ADD: any[] = [{ NOMBRE: 'SINOPHARM' }, { NOMBRE: 'PFIZER' }, { NOMBRE: 'PFIZER PEDIATRICA' }, { NOMBRE: 'ASTRAZENECA' },
  { NOMBRE: 'INFLUENZA ADULTO' },{ NOMBRE: 'MODERNA' }]

}
