import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formb: FormBuilder, private usuarios_s: UsuariosService, private router: Router) { }
  formg!: FormGroup;

  ngOnInit(): void {
    this.formg = this.formb.group({
      login: '',
      clave: ''

    })
  }

  iniciar_sesion() {


    this.usuarios_s.login(this.formg.value).subscribe(resp => {
     
      if (resp.mensaje == 'usuario logueado') {

     

          localStorage.setItem('login',JSON.stringify(resp))

         this.router.navigate(['/admin-distribucion/centro-vacunacion'])




      }


    })


  }


}
