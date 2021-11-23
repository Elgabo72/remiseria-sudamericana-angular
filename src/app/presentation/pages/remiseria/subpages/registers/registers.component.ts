import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role, User } from 'src/app/infraestructure/remiseriaApi/models';
import { RoleControllerService, UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() update: boolean = false;
  @Input() employe: User = {};
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private userService: UserControllerService,
    private roleService: RoleControllerService
  ) { }

  // employe: User = {}
  role: Role[] = []
  ngOnInit(): void {
    this.cargarRole();
  }
  @Output() refreshList = new EventEmitter();

  createUpdateEmploye(): void {
    //  crea el cliente, luego le redirije
    console.log(this.employe);

    // if (!this.update) {
    //   this.userService.saveUsingPOST6(this.employe).subscribe((res) => {
    //     Swal.fire(
    //       'Nueva Empleado Creado',
    //       `Empleado ${res.firstName} ha sido registrado`,
    //       'success'
    //     );

    //   });
    // } else {

    //   this.userService.updateUsingPUT6(this.employe).subscribe((employe) => {
    //     Swal.fire(
    //       'Empleado Actualizado',
    //       `Empleado ${employe.firstName} ha sido actualizado`,
    //       'success'
    //     );
    //   });

    // }

  }

  closeModal(): void {
    this.closeModalEvent.emit(!this.show);
  }


  cargarRole() {
    this.roleService
      .getAllUsingGET3()
      .subscribe((role) => (this.role = role));
  }
}
