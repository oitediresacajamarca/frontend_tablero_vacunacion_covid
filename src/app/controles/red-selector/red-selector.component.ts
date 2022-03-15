import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-red-selector',
  templateUrl: './red-selector.component.html',
  styleUrls: ['./red-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RedSelectorComponent),
    multi: true
  }]
})
export class RedSelectorComponent implements OnInit, ControlValueAccessor {

  red: any = {}
  redes: any[] = []
  constructor(private redes_service: RedService) { }

  @Output('selecciono')
  selecciono: EventEmitter<any> = new EventEmitter();



  writeValue(obj: any): void {
    this.red = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }


  ngOnInit(): void {
 
    this.cargar_redes()

  }



  isDisabled: boolean = false;
  onChange = (_: any) => { }
  onTouch = () => { }



  cargar_redes() {
    this.redes_service.cargar_redes().subscribe(datos => {
      this.redes = datos
 
    })
  }

  seleccionoRed(e: any) {
    this.onChange(e.value)
    this.selecciono.emit(e.value)



   
  }

}
