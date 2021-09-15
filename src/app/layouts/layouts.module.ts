import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDistribucionVacunasComponent } from './admin-distribucion-vacunas/admin-distribucion-vacunas.component';
import { AdminDistribucionVacunasSidebarComponent } from './admin-distribucion-vacunas-sidebar/admin-distribucion-vacunas-sidebar.component';



@NgModule({
  declarations: [
    AdminDistribucionVacunasComponent,
    AdminDistribucionVacunasSidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AdminDistribucionVacunasComponent,
    AdminDistribucionVacunasSidebarComponent]
  , schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule { }
