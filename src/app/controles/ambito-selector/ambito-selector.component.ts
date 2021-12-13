import { Component, OnInit } from '@angular/core';
import { AmbitoService } from 'src/app/servicios/ambito.service';

@Component({
  selector: 'app-ambito-selector',
  templateUrl: './ambito-selector.component.html',
  styleUrls: ['./ambito-selector.component.scss']
})
export class AmbitoSelectorComponent implements OnInit {

  constructor(private ambito_service: AmbitoService) { }
  Nivel: string = 'RED';
  Ambito_Raiz: string = '2'
  ambitos: any[] = []
  ambito: any

  ngOnInit(): void {
    this.cargar_ambito_segun_nivel()
  }

  cargar_ambito_segun_nivel() {
    this.ambito_service.cargar_ambito(this.Nivel, this.Ambito_Raiz).subscribe(data => {
      this.ambitos = data;
    })
  }

  selecciono_ambito(e: any) {
    console.log(e)
  }

}
