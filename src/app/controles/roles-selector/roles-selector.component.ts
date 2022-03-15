import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-roles-selector',
  templateUrl: './roles-selector.component.html',
  styleUrls: ['./roles-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RolesSelectorComponent),
      multi: true
    }
  ]
})
export class RolesSelectorComponent implements OnInit, ControlValueAccessor {


  onChange = (_: any) => { }

  @Output('selecciono')
  selecciono: EventEmitter<any> = new EventEmitter()

  writeValue(obj: any): void {
    this.ROL = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {

  }

  constructor(private usuarios_: UsuariosService) { }
  ROLES: any[] = []

  ROL: any

  seleccionoRol(e: any) {
    this.onChange(e)
    this.selecciono.emit(e)
  }


  ngOnInit(): void {
    this.cargar_roles()
  }
  cargar_roles() {
    this.usuarios_.litar_roles().subscribe(data => {
      console.log(data)
      this.ROLES = data
      this
    })
  }

}
