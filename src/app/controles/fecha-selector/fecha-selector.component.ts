import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-fecha-selector',
  templateUrl: './fecha-selector.component.html',
  styleUrls: ['./fecha-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FechaSelectorComponent),
      multi: true
    }
  ]
})
export class FechaSelectorComponent implements OnInit {

  onChange = (_: any) => { }
  constructor() { }
  ngOnInit(): void {

  }
  FECHA!:Date;
  ngAfterViewInit(): void {
 


  }
  writeValue(obj: any): void {


  console.log(obj)



    this.FECHA = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {

  }

}
