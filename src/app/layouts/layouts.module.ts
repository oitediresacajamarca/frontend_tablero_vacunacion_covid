import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDistribucionVacunasComponent } from './admin-distribucion-vacunas/admin-distribucion-vacunas.component';
import { AdminDistribucionVacunasSidebarComponent } from './admin-distribucion-vacunas-sidebar/admin-distribucion-vacunas-sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminDistribucionVacunasComponent,
    AdminDistribucionVacunasSidebarComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [AdminDistribucionVacunasComponent,
    AdminDistribucionVacunasSidebarComponent]
  , schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule { }
