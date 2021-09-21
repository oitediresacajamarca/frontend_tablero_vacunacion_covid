import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DistribucionRedService } from 'src/app/servicios/distribucion-red.service';
import { DistribucionAlmacenRedComponent } from '../distribucion-almacen-red/distribucion-almacen-red.component';

@Component({
  selector: 'app-detalle-distribucion-almacen-red',
  templateUrl: './detalle-distribucion-almacen-red.component.html',
  styleUrls: ['./detalle-distribucion-almacen-red.component.scss']
})
export class DetalleDistribucionAlmacenRedComponent implements OnInit {

  constructor(private distribucion_red:DistribucionRedService,private router:Router) { }
  ditribucion_red!:any[]
  @ViewChild('dis_almacen')
  dis_almacen!:DistribucionAlmacenRedComponent


  ngOnInit(): void {
 this.cargarDistribuciones()
  }

  cargarDistribuciones(){
    this.distribucion_red.listarDistribucionRed().subscribe(respuesta=>{
      console.log(respuesta)
      this.ditribucion_red=respuesta

    })
  }

  open_almacen_red(){

    this.dis_almacen.open();
  }
  Nueva_Distri(){
    console.log('hello')
    this.cargarDistribuciones()
    this.dis_almacen.close()
  }

  modificar_envios(val:any){
    console.log(val)
    this.router.navigate(['/detalle/envio-red/'+val])
  }


}
