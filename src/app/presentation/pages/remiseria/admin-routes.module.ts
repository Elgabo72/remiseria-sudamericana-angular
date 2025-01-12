import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { EmployesComponent } from './subpages/employes/employes.component';
import { DashboardComponent } from './subpages/dashboard/dashboard.component';
import { RolesComponent } from './subpages/roles/roles.component';
import { DriversComponent } from './subpages/drivers/drivers.component';
import { VehiclesComponent } from './subpages/vehicles/vehicles.component';
import { PassengersComponent } from './subpages/passengers/passengers.component';
import { TariffComponent } from './subpages/tariff/tariff.component';
import { ReservationComponent } from './subpages/reservation/reservation.component';
import { PaymentsComponent } from './subpages/payments/payments.component';
import {accessReception} from '../../guards/accessReception.guard'
import {accessPayment} from '../../guards/accessPayment.guard'
import {accessAdmin} from '../../guards/accessAdmin.guard'
import { WelcomeComponent } from './subpages/welcome/welcome.component';
import { AccessDeniedComponent } from './subpages/access-denied/access-denied.component';
import { PersonalDataComponent } from './subpages/personalData/personalData.component';

const routes: Routes = [
    {
        path: '',
        component: MainNavComponent,
        children: [
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'employes',
                component: EmployesComponent, canActivate:[accessAdmin]
            },
            {
                path: 'roles',
                component: RolesComponent, canActivate:[accessAdmin]
            },
            {
                path: 'drivers',
                component: DriversComponent, canActivate:[accessReception]
            },
            {
                path: 'vehicles',
                component: VehiclesComponent, canActivate:[accessReception]
            },
            {
                path: 'passengers',
                component: PassengersComponent, canActivate:[accessAdmin]
            },
            {
                path: 'tariff',
                component: TariffComponent, canActivate:[accessAdmin]
            },
            {
                path: 'reservation',
                component: ReservationComponent, canActivate:[accessReception]
            },
            {
                path: 'payments',
                component: PaymentsComponent, canActivate:[accessPayment]
            },
            {
                path: 'personalData',
                component: PersonalDataComponent
            },
            {
                path: 'welcome',
                component: WelcomeComponent
            },
            {
                path: 'accessDenied',
                component: AccessDeniedComponent
            },
            // {
            //     path: 'vendors',
            //     component: VendorListComponent,
            // },
            // {
            //     path: 'vendors/form',
            //     component: VendorDetailComponent,
            // },
            // {
            //     path: 'vendors/form/:id',
            //     component: VendorDetailComponent,
            // },
        ],
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutesModule { }
