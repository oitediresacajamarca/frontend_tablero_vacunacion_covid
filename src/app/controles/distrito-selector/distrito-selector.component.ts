import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-distrito-selector',
  templateUrl: './distrito-selector.component.html',
  styleUrls: ['./distrito-selector.component.scss']
})
export class DistritoSelectorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  distritos!: any[]
  distrito: any
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

   
this.selecciono_distrito.emit(event.value.ID_DISTRITO)

  }
  cli() {
    this.cargar_distritos()
  }

}
