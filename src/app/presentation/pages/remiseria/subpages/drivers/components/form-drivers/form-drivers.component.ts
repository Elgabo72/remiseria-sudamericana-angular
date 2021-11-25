import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role, User } from 'src/app/infraestructure/remiseriaApi/models';
import { RoleControllerService, UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { Roles } from 'src/app/infraestructure/shared/RoleEnum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-drivers',
  templateUrl: './form-drivers.component.html',
  styleUrls: ['./form-drivers.component.css']
})
export class FormDriversComponent implements OnInit {

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
      this.userService.saveUsingPOST6({ ...this.employe, idRol: Roles.CHOFER }).subscribe((res) => {
        Swal.fire(
          'Nueva Chofer Creado',
          `Chofer ${res.firstName} ha sido registrado`,
          'success'
        );

      });
    } else {

      this.userService.updateUsingPUT6(this.employe).subscribe((employe) => {
        Swal.fire(
          'Chofer Actualizado',
          `Chofer ${employe.firstName} ha sido actualizado`,
          'success'
        );
      });

    }
    this.closeModal();
    this.refreshListEvent();
  }

  closeModal(): void {
    this.closeModalEvent.emit(!this.show);
    this.refreshList.emit();
    this.update = false;
  }

  refreshListEvent(): void {
    this.refreshList.emit();
  }



}
