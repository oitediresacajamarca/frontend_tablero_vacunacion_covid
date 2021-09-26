import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-establecimientos-selector',
  templateUrl: './establecimientos-selector.component.html',
  styleUrls: ['./establecimientos-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EstablecimientosSelectorComponent),
      multi: true
    }
  ]
})
export class EstablecimientosSelectorComponent implements OnInit, ControlValueAccessor {

  constructor(private http: HttpClient) { }


  establecimiento: any

  onChange = (_: any) => { }
  writeValue(obj: any): void {
    this.establecimiento = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {

  }

  @Input('UBIGEO')
  UBIGEO!: string;

  @Input('UBIGEO_PROVINCIA')
  UBIGEO_PROVINCIA!: string;

  establecimientos: any[] = []

  @Output('selecciono')
  selecciono = new EventEmitter();

  @Output('click')
  click = new EventEmitter();


  ngOnInit(): void {
  }

  cargar_establecimientos() {

    this.http.get<any[]>(environment.url__backend + 'establecimiento_ubigeo/' + this.UBIGEO).subscribe(data => {
      this.establecimientos = data;



    })
  }

  cargar_establecimientos_por_provincia() {

    this.http.get<any[]>(environment.url__backend + 'establecimiento/ubigeo_provincia/' + this.UBIGEO_PROVINCIA).subscribe(data => {
      this.establecimientos = data;
    })
  }

  seleccionoIpress(event: any) {
    this.onChange(event.value)
    this.selecciono.emit(event)

  }

  click_() {
    this.click.emit('click')
  }



}
