import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { UsuariosModule } from 'src/app/usuarios/usuarios.module';

@Component({
  selector: 'app-admin-distribucion-vacunas-sidebar',
  templateUrl: './admin-distribucion-vacunas-sidebar.component.html',
  styleUrls: ['./admin-distribucion-vacunas-sidebar.component.scss']
})
export class AdminDistribucionVacunasSidebarComponent implements OnInit {

  constructor() { }

login:any={}

  modulos = [{
    GESTION_INF: true, RECEPCION_ALMACEN: true, DISTRI_ETRATEGIA_ALMACEN: true,
    DISTRI_ALMACEN_RED: true, DISTRI_RED_IPRES: true, DISTRI_MICRORED_IPRESS: true, ANEXOS_CADENA_FRIO: true,
    REPORTES_: true
  }]

  ngOnInit(): void {   
    this.login=JSON.parse( localStorage.getItem('login')||'')
    console.log(this.login)
  }

}
