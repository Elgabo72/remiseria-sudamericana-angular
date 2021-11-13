import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthControllerService } from 'src/app/core/api/services/auth-controller.service';

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
    private service: AuthControllerService,
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
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
