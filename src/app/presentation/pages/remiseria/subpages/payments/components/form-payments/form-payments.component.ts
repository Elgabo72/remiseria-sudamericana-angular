import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/infraestructure/auth/login.service';
import { Payment, User, Vehicle } from 'src/app/infraestructure/remiseriaApi/models';
import { PaymentControllerService, UserControllerService, VehicleControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { Roles } from 'src/app/infraestructure/shared/RoleEnum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-payments',
  templateUrl: './form-payments.component.html',
  styleUrls: ['./form-payments.component.css']
})
export class FormPaymentsComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() update: boolean = false;
  @Input() data: Payment = {};
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() refreshList: EventEmitter<void> = new EventEmitter();

  constructor(
    private paymentService: PaymentControllerService,
    private driverService: UserControllerService,
    private vehicleService: VehicleControllerService,
    private loginService: LoginService
  ) {this.employee = this.loginService.getUser() }

  // employe: User = {}
  employee: User
  payment: Payment[] = []
  drivers: User[] = []
  vehicles: Vehicle[] = []
  ngOnInit(): void {
    this.data.idPayment = this.data.idPayment ?? 0;
    this.cargarDriver()
    this.cargarVehicle()
  }

  createUpdatePayment(): void {
      this.data.idEmployee = this.employee.idUser;
      this.paymentService.saveUsingPOST(this.data).subscribe((res) => {
        Swal.fire(
          'Pago registrado',
          `Pago ha sido registrado con éxito`,
          'success'
        );
        this.closeModalEvent.emit(!this.show);
      });
  }

  closeModal(): void {
    this.closeModalEvent.emit(!this.show);
    // this.refreshList.emit();
    // this.update = false;
  }

  refreshListEvent(): void {
    this.refreshList.emit();
  }


  cargarDriver() {
    this.driverService
    .getByIdRoleUsingGET(Roles.CHOFER)
    .subscribe((driver) => (this.drivers = driver));
  }
  cargarVehicle() {
    this.vehicleService.getAllUsingGET7()
    .subscribe((vehicle) => (this.vehicles = vehicle));
  }
}
