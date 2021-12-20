import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-estrategia-vacunacion-selector',
  templateUrl: './estrategia-vacunacion-selector.component.html',
  styleUrls: ['./estrategia-vacunacion-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EstrategiaVacunacionSelectorComponent),
      multi: true
    }
  ]
})
export class EstrategiaVacunacionSelectorComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  onChange = (_: any) => { }
  onTouch = () => { }
  writeValue(obj: any): void {
    this.estrategia = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  estrategias: any[] = [{ NOMBRE: 'Conglomerados(Mercados,Plazas de armas,etc)' },
  { NOMBRE: 'Centro de Vacunacion-Establecimiento de salud' },
  { NOMBRE: 'Barrido(casa por casa)' }]
  estrategia: any = {}

  @Output('selecciono')
  selecciono: EventEmitter<any> = new EventEmitter();
  selecciono_estartegia(e: any) {
  
    this.estrategia = e.value
    this.selecciono.emit(e.value)
    this.onChange(e.value)
  }

  ngOnInit(): void {
  }

}
