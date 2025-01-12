import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role, User } from 'src/app/infraestructure/remiseriaApi/models';
import { UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';
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
  @Input() driver: User = {};
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() refreshList: EventEmitter<void> = new EventEmitter();

  constructor(
    private userService: UserControllerService,
  ) { }

  // employe: User = {}
  role: Role[] = []
  ngOnInit(): void {
    this.driver.idUser = this.driver.idUser ?? 0;

  }

  createUpdateDriver(): void {
    if (!this.update) {
      this.userService.saveUsingPOST6({ ...this.driver, idRol: Roles.CHOFER ,password:""}).subscribe((res) => {
        Swal.fire(
          'Nuevo Chofer Creado',
          `Chofer ${res.firstName} ha sido registrado`,
          'success'
        );
        this.closeModalEvent.emit(!this.show);
      });
    } else {

      this.userService.updateUsingPUT6(this.driver).subscribe((drivers) => {
        Swal.fire(
          'Chofer Actualizado',
          `Chofer ${drivers.firstName} ha sido actualizado`,
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
