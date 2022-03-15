import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlesModule } from '../controles/controles.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from '../libs/libs.module';
import { AdminComponent } from './admin/admin.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';



@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    CommonModule,
    ControlesModule,
    ReactiveFormsModule,
    LibsModule
  ]
})
export class UsuariosModule { }
