import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepcion-almacen-especial',
  templateUrl: './recepcion-almacen-especial.component.html',
  styleUrls: ['./recepcion-almacen-especial.component.scss']
})
export class RecepcionAlmacenEspecialComponent implements OnInit {

  constructor() { }

  almacenes: any[] = []

  ngOnInit(): void {
    this.almacenes = [
      { name: 'ALMACEN ESPECIEALISADO JAEN', code: 'ALMACEN ESPECIEALISADO JAEN' },
      { name: 'ALMACEN ESPECIEALISADO CAJAMARCA', code: 'ALMACEN ESPECIEALISADO CAJAMARCA' },
    ];
  }

}
