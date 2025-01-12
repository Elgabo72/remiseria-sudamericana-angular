import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Role, User } from 'src/app/infraestructure/remiseriaApi/models';
import { RoleControllerService, UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formEmploye',
  templateUrl: './formEmploye.component.html',
  styleUrls: ['./formEmploye.component.css']
})
export class FormEmployeComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() update: boolean = false;
  @Input() employe: User = {};
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() refreshList: EventEmitter<void> = new EventEmitter();

  constructor(
    private userService: UserControllerService,
    private roleService: RoleControllerService
  ) { }

  showPassword: boolean = false;
  // employe: User = {}
  role: Role[] = []
  ngOnInit(): void {
    this.employe.idUser = this.employe.idUser ?? 0;
    this.cargarRole();
  }

  createUpdateEmploye(): void {
    //  crea el cliente, luego le redirije
    console.log(this.employe);
    
    if (!this.update) {
      this.userService.saveUsingPOST6(this.employe).subscribe((res) => {
        Swal.fire(
          'Nueva Empleado Creado',
          `Empleado ${res.firstName} ha sido registrado`,
          'success'
        );
        this.closeModalEvent.emit(!this.show);
      });
    } else {

      this.userService.updateUsingPUT6(this.employe).subscribe((employe) => {
        Swal.fire(
          'Empleado Actualizado',
          `Empleado ${employe.firstName} ha sido actualizado`,
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


  cargarRole() {
    this.roleService
      .getAllUsingGET3()
      .subscribe((role) => (this.role = role));
  }

    // Método para determinar si el campo debe ser visible
    getVisibility(field: string): boolean {
      if (this.update) {
        // Si estamos en "Nueva Reserva" (update = false), ocultamos "Código de Viaje" y "Pasajero"
        if (field === 'ocultarInputs') {
          return false;  // No mostrar "Código de Viaje" y "Pasajero"
        }
      }
      return true;  // Mostrar el campo si estamos editando (update = true)
    }
}
