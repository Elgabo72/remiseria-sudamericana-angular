import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from 'src/app/infraestructure/remiseriaApi/models';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/infraestructure/auth/login.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  user: User;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private loginService: LoginService
  ) {
    this.user = this.loginService.getUser();
  }
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  loguout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
  

}
