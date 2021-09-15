import { Component, OnInit, ViewChild } from '@angular/core';
import { DistribucionAlmacenRedComponent } from '../distribucion-almacen-red/distribucion-almacen-red.component';
import { DistribucionRedIpressComponent } from '../distribucion-red-ipress/distribucion-red-ipress.component';

@Component({
  selector: 'app-distribucion-vacunas',
  templateUrl: './distribucion-vacunas.component.html',
  styleUrls: ['./distribucion-vacunas.component.scss']
})
export class DistribucionVacunasComponent implements OnInit {

  constructor() { }
  display:boolean = true;
  @ViewChild('dis_ipress')
  dis_ipress!:DistribucionRedIpressComponent

  @ViewChild('dis_almacen')
  dis_almacen!:DistribucionAlmacenRedComponent

  


  open_almacen_red(){

    this.dis_almacen.display=true
  }
  open_red_ipress(){

    this.dis_ipress.display=true
  }

  ngOnInit(): void {
  }

}
