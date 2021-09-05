import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-establecimientos-selector',
  templateUrl: './establecimientos-selector.component.html',
  styleUrls: ['./establecimientos-selector.component.scss']
})
export class EstablecimientosSelectorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input('UBIGEO')
  UBIGEO!: string;

  establecimientos: any[] = []

  @Output('selecciono')
  selecciono = new EventEmitter();


  ngOnInit(): void {
  }

  cargar_establecimientos() {

    this.http.get<any[]>(environment.url__backend + 'establecimiento_ubigeo/' + this.UBIGEO).subscribe(data => {
      this.establecimientos = data;



    })
  }

  seleccionoIpress(event: any) {
    this.selecciono.emit(event)

  }


}
