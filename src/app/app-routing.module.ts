import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PanelAdminComponent } from './componentes/panel-admin/panel-admin.component';

const routes: Routes = [
  { path: "", redirectTo: "Login", pathMatch: "full" },
  { path: "Login", component: LoginComponent },
  {path:"PanelAdministrador", component:PanelAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
