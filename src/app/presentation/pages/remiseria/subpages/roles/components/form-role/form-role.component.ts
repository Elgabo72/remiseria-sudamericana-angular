import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role } from 'src/app/infraestructure/remiseriaApi/models';
import { RoleControllerService, UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-role',
  templateUrl: './form-role.component.html',
  styleUrls: ['./form-role.component.css']
})
export class FormRoleComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() update: boolean = false;
  @Input() data: Role = {};
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() refreshList: EventEmitter<void> = new EventEmitter();

  constructor(
    private roleService: RoleControllerService
  ) { }

  // employe: User = {}
  role: Role[] = []
  ngOnInit(): void {
    this.data.idRole = this.data.idRole ?? 0;
  }

  createUpdateEmploye(): void {
    //  crea el cliente, luego le redirije
    if (!this.update) {
      this.roleService.saveUsingPOST3(this.data).subscribe((res) => {
        Swal.fire(
          'Nuevo Rol Creado',
          `Rol ${res.description} ha sido registrado`,
          'success'
        );
        this.closeModalEvent.emit(!this.show);
      });
    } else {

      this.roleService.updateUsingPUT3(this.data).subscribe((employe) => {
        Swal.fire(
          'Rol Actualizado',
          `Rol ${employe.description} ha sido actualizado`,
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

  refreshListEvent(): void {
    this.refreshList.emit();
  }


}
