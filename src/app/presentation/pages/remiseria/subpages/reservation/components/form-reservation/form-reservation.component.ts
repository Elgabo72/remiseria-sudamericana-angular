import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reservation, StateReservation, Tariff, User } from 'src/app/infraestructure/remiseriaApi/models';
import { ReservationControllerService, StateReservationControllerService, TariffControllerService, UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { Roles } from 'src/app/infraestructure/shared/RoleEnum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css']
})
export class FormReservationComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() update: boolean = false;
  @Input() reservation: Reservation = {};
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() refreshList: EventEmitter<void> = new EventEmitter();

  constructor(
    private reservationService: ReservationControllerService,
    private driverService: UserControllerService,
    private passengerService: UserControllerService,
    private tariffService: TariffControllerService,
    private stateService: StateReservationControllerService,
  ) { }

  // employe: User = {}
  drivers: User[] = []
  passenger: User[] = []
  tariff: Tariff[] = []
  stateReservation: StateReservation[] = []
  typeVehicle=["AUTO","MINI-FLETE"]
  
  ngOnInit(): void {
    this.reservation.idReservation = this.reservation.idReservation ?? 0;
    this.cargarDriver();
    this.cargarStateReservation();
  }

  UpdateReservation(): void {
      this.reservationService.updateUsingPUT2(this.reservation).subscribe((reservation) => {
        Swal.fire(
          'Reserva Actualizado',
          `Reserva ${reservation.tariff?.origin} - ${reservation.tariff?.destination} ha sido actualizado`,
          'success'
        );
      });

    this.closeModal();
    this.refreshListEvent();
  }

  closeModal(): void {
    this.closeModalEvent.emit(!this.show);
  }

  refreshListEvent(): void {
    this.refreshList.emit();
  }

  cargarDriver() {
    this.driverService
    .getByIdRoleUsingGET(Roles.CHOFER)
    .subscribe((driver) => (this.drivers = driver));
  }
  cargarStateReservation() {
    this.stateService.getAllUsingGET4()
    .subscribe((state) => (this.stateReservation = state));
  }

}
