import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role, User } from 'src/app/infraestructure/remiseriaApi/models';
import { UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { Roles } from 'src/app/infraestructure/shared/RoleEnum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-passenger',
  templateUrl: './form-passenger.component.html',
  styleUrls: ['./form-passenger.component.css']
})
export class FormPassengerComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() update: boolean = false;
  @Input() employe: User = {};
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() refreshList: EventEmitter<void> = new EventEmitter();

  constructor(
    private userService: UserControllerService,
  ) { }

  // employe: User = {}
  role: Role[] = []
  ngOnInit(): void {
    this.employe.idUser = this.employe.idUser ?? 0;
  }

  createUpdateEmploye(): void {
    //  crea el cliente, luego le redirije
    console.log(this.employe);

    if (!this.update) {
      this.userService.saveUsingPOST6({ ...this.employe, idRol: Roles.PASAJERO, password: "" }).subscribe((res) => {
        Swal.fire(
          'Nueva Pasajero Creado',
          `Pasajero ${res.firstName} ha sido registrado`,
          'success'
        );
        this.closeModalEvent.emit(!this.show);
      });
    } else {

      this.userService.updateUsingPUT6(this.employe).subscribe((employe) => {
        Swal.fire(
          'Chofer Actualizado',
          `Chofer ${employe.firstName} ha sido actualizado`,
          'success'
        );
        this.closeModalEvent.emit(!this.show);
      });

    }
  }

  closeModal(): void {
    this.closeModalEvent.emit(!this.show);
    // this.refreshList.emit();
    // this.update = false;
  }

}
