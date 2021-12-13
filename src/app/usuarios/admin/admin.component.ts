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

    console.log(this.login)
  }

  cargar_lista_usuarios() {

    this.usuario_ser.litar_por_ambito(this.login.COD_AMBITO).subscribe(data => {
      console.log(data)

      this.datos = data
    })

  }

  Nuevo() {
    this.nuevo_usu.open()
  }

}
