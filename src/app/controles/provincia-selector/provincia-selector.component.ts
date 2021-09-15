import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-provincia-selector',
  templateUrl: './provincia-selector.component.html',
  styleUrls: ['./provincia-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProvinciaSelectorComponent),
      multi: true
    }
  ]
})
export class ProvinciaSelectorComponent implements OnInit, ControlValueAccessor {

  isDisabled: boolean = false;
  onChange = (_: any) => { }
  onTouch = () => { }
  @Output('seleciono')
  seleciono = new EventEmitter();

  constructor(private http: HttpClient) { }

  writeValue(obj: any): void {
    console.log(obj)
    this.provincia = obj;
  }
  registerOnChange(fn: any): void {

    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
    this.devolverProvincia()
  }

  provincias!: any[]
  provincia: any
  devolverProvincia() {
    this.http.get<any[]>(environment.url__backend + 'provincias').subscribe(respuesta => {



      this.provincias = respuesta;


    })
  }

  seleccionoProvincia() {

    this.onChange(this.provincia)
    this.seleciono.emit(this.provincia)
  }



}
