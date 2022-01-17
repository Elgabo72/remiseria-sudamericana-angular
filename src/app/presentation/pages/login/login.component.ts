import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { LoginService } from '../../../infraestructure/auth/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  username: FormControl;
  password: FormControl;


  constructor(
    private loginService: LoginService,
    private service: AuthControllerService, private router: Router
  ) {
    this.username = new FormControl('', [
      Validators.required,
      Validators.maxLength(18),
    ]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]);


    this.form = new FormGroup({
      username: this.username,
      password: this.password,
    });
  }
  logeoFallido = ""
  ngOnInit(): void {
  }

  submit(): void {
    this.service
      .createTokenUsingPOSTResponse({
        username: this.username.value,
        password: this.password.value,
      })
      .subscribe(
        (res) => {
          console.log(res)
          if (res.status == 200) {
            this.loginService.saveJWT(res.body.jwt ?? "", res.body.user ?? {});
            this.router.navigate(['/remiseria/welcome'])
          };

        },
        (err) => {
          this.logeoFallido = '<strong style="margin-top:15px">* Usuario o contraseña incorrecta</strong>';
          console.log(err);
        }
      );
  }

}
