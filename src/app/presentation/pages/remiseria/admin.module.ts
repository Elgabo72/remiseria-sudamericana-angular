import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutesModule } from './admin-routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { EmployesComponent } from './subpages/employes/employes.component';
import { ComponentsModule } from '../../components/components.module';
import { RolesComponent } from './subpages/roles/roles.component';
import { RegistersComponent } from './subpages/registers/registers.component';



@NgModule({
  declarations: [
    MainNavComponent,
    EmployesComponent,
    RolesComponent,
    RegistersComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    AdminRoutesModule,
    ReactiveFormsModule,
    MaterialModule,
    // LayoutModule,
    // SharedModule,
    FormsModule,
  ]
})
export class AdminModule { }
