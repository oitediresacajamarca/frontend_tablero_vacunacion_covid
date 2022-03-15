import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IpressService } from 'src/app/servicios/ipress.service';

@Component({
  selector: 'app-ipress-selector',
  templateUrl: './ipress-selector.component.html',
  styleUrls: ['./ipress-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IpressSelectorComponent),
    multi: true
  }]
})
export class IpressSelectorComponent implements OnInit, ControlValueAccessor {

  constructor(private ipressserv: IpressService) { }


  ngOnInit(): void {
  }

  ID_MICRORED!: string;
  IPRESS: any
  ESTABLECIMIENTOS!: any[]

  writeValue(obj: any): void {
    this.IPRESS = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  cargar_establecimeintos_por_id_microred() {
    this.ipressserv.cargar_ipress_por_cod_microred(this.ID_MICRORED).subscribe((data) => {

      console.log(data)

      this.ESTABLECIMIENTOS = data
    })
  }

  seleccionoiPRESS(e: any) {

  }



  isDisabled: boolean = false;
  onChange = (_: any) => { }
  onTouch = () => { }

}
