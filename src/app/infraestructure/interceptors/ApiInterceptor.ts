import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { Router } from '@angular/router';
import { LoginService } from '../auth/login.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private jwtOperations: LoginService, private router: Router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenJWT = this.jwtOperations.getJWT();
    // Si existe el token lo aplico a las peticiones
    if (tokenJWT) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenJWT}`,
        },
      });
    }
    // req = req.clone({});
    // this.router.navigate(['/login']);

    // configuracion global de los errores
    return next.handle(req).pipe(
      tap(
        (x) => x,
        (err) => {
          // cuando ocurre un 403 borro el token y redirijo al login
          console.error(
            `Su sesion a expirado vuelva a loguearse ${err.status}`
          );

          if (err.status === 403) {
            this.jwtOperations.logout();
            this.router.navigate(['/login']);
          }
        }
      )
    );
  }
}
