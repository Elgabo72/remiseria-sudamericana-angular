import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../../infraestructure/auth/login.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // rol 2 admin rol 1 client
    if (this.loginService.isLogged()) {
      // if (this.loginService.getUser()?.idRol === 2) {
      //   return true;
      // } else if (this.loginService.getUser()?.idRol === 1) {
      //   this.router.navigate(['/home']);
      //   return false;
      // }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
