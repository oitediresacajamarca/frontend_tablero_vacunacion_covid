import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AmbitoService } from 'src/app/servicios/ambito.service';


@Component({
  selector: 'app-ambito-selector',
  templateUrl: './ambito-selector.component.html',
  styleUrls: ['./ambito-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AmbitoSelectorComponent),
      multi: true
    }
  ]
})
export class AmbitoSelectorComponent implements OnInit, ControlValueAccessor {

  constructor(private ambito_service: AmbitoService) { }
  ambito: any = {}
  isDisabled: boolean = false;
  TIPO_AMBITO:any;
  @Output('selecciono')
  selecciono:EventEmitter<any>= new EventEmitter();
  UBIGEO:any;


  onChange = (_: any) => { }
  onTouch = () => { }
  writeValue(obj: any): void {
    this.ambito = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  Nivel: string = 'RED';
  Ambito_Raiz: string = '2'
  ambitos: any[] = []


  ngOnInit(): void {
    this.cargar_ambito_segun_nivel()
  }

  cargar_ambito_segun_nivel() {
    this.ambito_service.cargar_ambito(this.Nivel, this.Ambito_Raiz).subscribe(data => {
      this.ambitos = data.LISTADO_AMBITOS;
      this.TIPO_AMBITO=data.TIPO_AMBITO
      console.log(this.ambitos)
    })
  }

  cargar_ambito_segun_ubigeo() {
    this.ambito_service.cargar_ambito_segun_ubigeo(this.Nivel, this.UBIGEO).subscribe(data => {
      this.ambitos = data.LISTADO_AMBITOS;
      this.TIPO_AMBITO=data.TIPO_AMBITO
   
    })
  }

  selecciono_ambito(e: any) {
  
    
    this.ambito = e.value.NOMBRE;
    this.onChange(  this.ambito)
    this.selecciono.emit(e.value)
 

  }

}
