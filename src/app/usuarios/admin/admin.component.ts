import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { NuevoUsuarioComponent } from '../nuevo-usuario/nuevo-usuario.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild('nuevo_usu')
  nuevo_usu!: NuevoUsuarioComponent

  constructor(private usuario_ser: UsuariosService) { }
  login: any = {}
  datos: any[] = []

  ngOnInit(): void {
    this.login = JSON.parse(localStorage.getItem('login') || '')

    this.cargar_lista_usuarios_por_ubigeo()
  }

  cargar_lista_usuarios() {

    this.usuario_ser.litar_por_ambito(this.login.COD_AMBITO).subscribe(data => {


      this.datos = data
    })

  }


  cargar_lista_usuarios_por_ubigeo() {


    this.usuario_ser.litar_por_ubigeo(this.login.UBIGEO).subscribe(data => {

   
      this.datos = data
    })

  }

  Nuevo() {
    this.nuevo_usu.open()
  }

  registro_nuevo() {
    this.cargar_lista_usuarios_por_ubigeo()
  }

  eliminar(ID: any) {


    this.usuario_ser.eliminar(ID).subscribe(data => {
      this.cargar_lista_usuarios_por_ubigeo()
    });
  }

}
