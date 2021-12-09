import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EstablecimientosSelectorComponent } from 'src/app/controles/establecimientos-selector/establecimientos-selector.component';
import { IpressSelectorComponent } from 'src/app/controles/ipress-selector/ipress-selector.component';
import { MicroredSelectorComponent } from 'src/app/controles/microred-selector/microred-selector.component';
import { DistribucionRedService } from 'src/app/servicios/distribucion-red.service';
import { DistribucionAlmacenRedComponent } from '../distribucion-almacen-red/distribucion-almacen-red.component';

@Component({
  selector: 'app-detalle-distribucion-almacen-red',
  templateUrl: './detalle-distribucion-almacen-red.component.html',
  styleUrls: ['./detalle-distribucion-almacen-red.component.scss']
})
export class DetalleDistribucionAlmacenRedComponent implements OnInit {

  constructor(private distribucion_red: DistribucionRedService, private router: Router,private form :FormBuilder) { }
  ditribucion_red!: any[]
  @ViewChild('dis_almacen')
  dis_almacen!: DistribucionAlmacenRedComponent
  formGroup!:FormGroup;
  @ViewChild('MICRORED_SELECTOR')
  MICRORED_SELECTOR!:MicroredSelectorComponent
  @ViewChild('IPRESS_SELECTOR')
  IPRESS_SELECTOR!:IpressSelectorComponent



  ngOnInit(): void {
    this.cargarDistribuciones()
    this.formGroup=this.form.group({
      RED:'',
      MICRORED:'',
      IPRESS:''

    })
    
  }

  cargarDistribuciones() {
    this.distribucion_red.listarDistribucionRed().subscribe(respuesta => {
      console.log(respuesta)
      this.ditribucion_red = respuesta

    })
  }

  open_almacen_red() {

    this.dis_almacen.open();
  }
  Nueva_Distri() {

    this.cargarDistribuciones()
    this.dis_almacen.close()
  }

  modificar_envios(val: any) {

    this.router.navigate(['/detalle/envio-red/' + val])
  }


  eliminar_distribucion(val: any) {

    this.distribucion_red.eliminarDistribucion(val).subscribe(data => {
      this.cargarDistribuciones()
    })
  }

  selecciono_red(){

    this.MICRORED_SELECTOR.ID_RED=this.formGroup.value.RED.ID_RED
    this.MICRORED_SELECTOR.cargarMicroredes()
  }

  selecciono_microred(){
    
    

    this.IPRESS_SELECTOR.ID_MICRORED=this.formGroup.value.MICRORED.ID_MICRORED
    this.IPRESS_SELECTOR.cargar_establecimeintos_por_id_microred()
  }
  selecciono_ipress(){

  }
}
