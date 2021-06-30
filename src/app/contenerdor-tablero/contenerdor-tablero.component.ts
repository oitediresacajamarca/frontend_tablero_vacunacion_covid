import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenerdor-tablero',
  templateUrl: './contenerdor-tablero.component.html',
  styleUrls: ['./contenerdor-tablero.component.scss']
})
export class ContenerdorTableroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active:string[]=['active','']

}
