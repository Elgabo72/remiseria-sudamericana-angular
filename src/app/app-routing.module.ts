import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './presentation/guards/admin.guard';
import { LoginGuard } from './presentation/guards/login.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./presentation/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'remiseria',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./presentation/pages/remiseria/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', redirectTo: '/login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
