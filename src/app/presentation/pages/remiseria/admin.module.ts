import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutesModule } from './admin-routes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { EmployesComponent } from './subpages/employes/employes.component';
import { ComponentsModule } from '../../components/components.module';
import { RolesComponent } from './subpages/roles/roles.component';
import { FormEmployeComponent } from './subpages/employes/components/formEmploye/formEmploye.component';
import { FormRoleComponent } from './subpages/roles/components/form-role/form-role.component';
import { DriversComponent } from './subpages/drivers/drivers.component';
import { FormDriversComponent } from './subpages/drivers/components/form-drivers/form-drivers.component';
import { VehiclesComponent } from './subpages/vehicles/vehicles.component';
import { FormVehicleComponent } from './subpages/vehicles/components/form-vehicle/form-vehicle.component';
import { PassengersComponent } from './subpages/passengers/passengers.component';
import { HeaderCustomComponent } from './components/header-custom/header-custom.component';
import { FormPassengerComponent } from './subpages/passengers/components/form-passenger/form-passenger.component';
import { TariffComponent } from './subpages/tariff/tariff.component';
import { FormTariffComponent } from './subpages/tariff/components/form-tariff/form-tariff.component';
import { ReservationComponent } from './subpages/reservation/reservation.component';
import { FormReservationComponent } from './subpages/reservation/components/form-reservation/form-reservation.component';
import { PaymentsComponent } from './subpages/payments/payments.component';
import { FormPaymentsComponent } from './subpages/payments/components/form-payments/form-payments.component';
import { FilterDateFormComponent } from './components/filter-date-form/filter-date-form.component';
import { PersonalDataComponent } from './subpages/personalData/personalData.component';



@NgModule({
  declarations: [
    HeaderCustomComponent,
    MainNavComponent,
    EmployesComponent,
    RolesComponent,
    FormEmployeComponent,
    FormRoleComponent,
    DriversComponent,
    FormDriversComponent,
    VehiclesComponent,
    FormVehicleComponent,
    PassengersComponent,
    FormPassengerComponent,
    TariffComponent,
    FormTariffComponent,
    ReservationComponent,
    FormReservationComponent,
    PaymentsComponent,
    FormPaymentsComponent,
    FilterDateFormComponent,
    PersonalDataComponent
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
