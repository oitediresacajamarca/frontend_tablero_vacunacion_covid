import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName } from '@angular/forms';
import { AmbitoSelectorComponent } from 'src/app/controles/ambito-selector/ambito-selector.component';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private fb: FormBuilder, private usuario_s: UsuariosService) { }
  visible: Boolean = false;
  login: any = {}
  fg!: FormGroup

  @ViewChild('ambito_select')
  ambito_select!: AmbitoSelectorComponent

  ngOnInit(): void {
    this.login = JSON.parse(localStorage.getItem('login') || '')
    this.fg = this.fb.group({
      NUMERO_DOCUMENTO: '',
      NOMBRES: '',
      APELLIDO_PATERNO: '',
      APELLIDO_MATERNO: '',
      COD_AMBITO: '',
      EMAIL: '',
      AMBITO: '',
      ROL: ''
    })
  }

  CANCELAR() {
    this.visible = false;
  }

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  selecciono_roles(e: any) {

    this.ambito_select.Ambito_Raiz = this.login.COD_AMBITO

    if (e.value.NOMBRE_ROL == 'COORDINADOR DE GESTION DE LA INFORMACION DE RED') {
      this.ambito_select.Nivel = 'RED'

    }
    if (e.value.NOMBRE_ROL == 'COORDINADOR DE GESTION DE LA INFORMACION DE CENTRO DE VACUNACION') {
      this.ambito_select.Nivel = 'CENTRO_VACUNACION'

    }
    this.ambito_select.cargar_ambito_segun_nivel()

  }

  GUARDAR() {
    this.usuario_s.nuevo_usuario(this.fg.value).subscribe(data => {

      this.close()
    })
  }
}
