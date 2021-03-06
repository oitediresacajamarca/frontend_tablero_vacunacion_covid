import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MicroRedService } from 'src/app/servicios/micro-red.service';

@Component({
  selector: 'app-microred-selector',
  templateUrl: './microred-selector.component.html',
  styleUrls: ['./microred-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MicroredSelectorComponent),
    multi: true
  }]
})
export class MicroredSelectorComponent implements OnInit, ControlValueAccessor {

  microred: any = {}
  microredes: any[] = []
  constructor(private micrredes_ser: MicroRedService) { }

  ngOnInit(): void {
    this.cargarMicroredes()
  }


  seleccionoMicrored(e: any) {
  this.onChange(this.microred)
    this.selecciono.emit(this.microred);
  

  }

  @Output('selecciono')
  selecciono: EventEmitter<any> = new EventEmitter();
  @Input('ID_RED')
  ID_RED: string = '2'

  cargarMicroredes() {
    this.micrredes_ser.cargar_microred_por_id_red(this.ID_RED).subscribe(data => {
      this.microredes = data
    })
  }



  writeValue(obj: any): void {
    this.microred = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }



  isDisabled: boolean = false;
  onChange = (_: any) => { }
  onTouch = () => { }


}
