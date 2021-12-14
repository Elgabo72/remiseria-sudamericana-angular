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

const routes: Routes = [
    {
        path: '',
        component: MainNavComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'employes',
                component: EmployesComponent
            },
            {
                path: 'roles',
                component: RolesComponent
            },
            {
                path: 'drivers',
                component: DriversComponent
            },
            {
                path: 'vehicles',
                component: VehiclesComponent
            },
            {
                path: 'passengers',
                component: PassengersComponent
            },
            {
                path: 'tariff',
                component: TariffComponent
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
