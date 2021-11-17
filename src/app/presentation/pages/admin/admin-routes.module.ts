import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PanelAdminComponent } from './subpages/panel-admin/panel-admin.component';

const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: PanelAdminComponent
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
