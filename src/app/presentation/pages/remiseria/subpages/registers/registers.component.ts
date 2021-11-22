import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Role, User } from 'src/app/infraestructure/remiseriaApi/models';
import { RoleControllerService, UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {
  constructor(
    private userService: UserControllerService,
    private roleService: RoleControllerService
    ) { }

  employe: User = {}
  role: Role[]=[]
  ngOnInit(): void {
    this.cargarRole();
  }
  @Output() refreshList=new EventEmitter();
  
  create(): void {
    //  crea el cliente, luego le redirije
    this.userService.saveUsingPOST6(this.employe).subscribe((res) => {

      Swal.fire(
        'Nueva Empleado Creado',
        `Empleado ${res.firstName} ha sido registrado`,
        'success'
      );
      
    });
  }
  update(): void {
    //  crea el cliente, luego le redirije

    this.userService.updateUsingPUT6(this.employe).subscribe((employe) => {
      Swal.fire(
        'Empleado Actualizado',
        `Empleado ${employe.firstName} ha sido actualizado`,
        'success'
      );
    });
  }

  cargarRole(){
    this.roleService
      .getAllUsingGET3()
      .subscribe((role) => (this.role = role));
  }
  
}
