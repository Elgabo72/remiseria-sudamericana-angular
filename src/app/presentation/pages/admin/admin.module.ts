import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutesModule } from './admin-routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';
import { MainNavComponent } from './components/main-nav/main-nav.component';



@NgModule({
  declarations: [
    MainNavComponent,
  ],
  imports: [
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
