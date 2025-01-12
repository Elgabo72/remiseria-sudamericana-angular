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
export class MyAccountGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.loginService.getJWT()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
