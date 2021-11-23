import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { EmployesComponent } from './subpages/employes/employes.component';
import { DashboardComponent } from './subpages/dashboard/dashboard.component';
import { RolesComponent } from './subpages/roles/roles.component';
import { RegistersComponent } from './subpages/employes/components/formEmploye/formEmploye.component';

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
                path: 'registers',
                component: RegistersComponent
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
