import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ProvinciaSelectorComponent } from '../provincia-selector/provincia-selector.component';

@Component({
  selector: 'app-distrito-selector',
  templateUrl: './distrito-selector.component.html',
  styleUrls: ['./distrito-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DistritoSelectorComponent),
      multi: true
    }
  ]
})
export class DistritoSelectorComponent implements OnInit,ControlValueAccessor {


  distrito:any
  isDisabled: boolean = false;
  onChange = (_: any) => { }

  constructor(private http: HttpClient) { }
  writeValue(obj: any): void {
  this.distrito=obj
  }
  registerOnChange(fn: any): void {
    this.onChange=fn
  }
  registerOnTouched(fn: any): void {

  }

  distritos!: any[]
 
  @Input('cod_provincia')
  cod_provincia: string = '0601'

  @Output('selecciono_distrito')
  selecciono_distrito=new EventEmitter();

  ngOnInit(): void {
    this.cargar_distritos()
  }

  cargar_distritos() {

    this.http.get<any[]>(environment.url__backend + 'distrito/listar-por-provincia/' + this.cod_provincia).subscribe(data => {

      this.distritos = data

    })
  }

  seleccionoDistrito(event: any) {
    this.onChange(event.value.ID_DISTRITO)

   
this.selecciono_distrito.emit(event.value.ID_DISTRITO)

  }
  cli() {
    this.cargar_distritos()
  }

}
