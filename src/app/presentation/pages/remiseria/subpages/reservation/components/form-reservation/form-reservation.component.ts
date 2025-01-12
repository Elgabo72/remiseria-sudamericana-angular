import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reservation, StateReservation, Tariff, User } from 'src/app/infraestructure/remiseriaApi/models';
import { ReservationControllerService, StateReservationControllerService, TariffControllerService, UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { Roles } from 'src/app/infraestructure/shared/RoleEnum';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css'],
  providers : [DatePipe]
})
export class FormReservationComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() update: boolean = false;
  @Input() reservation: Reservation = {};
  @Input() isNewReservation: boolean = false; 
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() refreshList: EventEmitter<void> = new EventEmitter();

  constructor(
    private reservationService: ReservationControllerService,
    private driverService: UserControllerService,
    private passengerService: UserControllerService,
    private tariffService: TariffControllerService,
    private stateService: StateReservationControllerService,
    public datePipe : DatePipe
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
    this.cargarTariff();
    // Si la fecha de viaje ya está definida, la formateamos
  if (this.reservation.travelDate) {
    this.reservation.travelDate = this.formatDate(this.reservation.travelDate);
  }
  }

  UpdateReservation(): void {
    if(!this.update){
      this.reservation.idPassenger = 3;  // Asignar el driver con ID 3
      // Verificar si travelDate tiene un valor antes de enviarlo (en caso de que no lo haya proporcionado el usuario)
    if (!this.reservation.travelDate) {
      // Si no se proporciona travelDate, puedes establecerlo en un valor por defecto o mostrar un error
      Swal.fire('Error', 'La fecha y hora del viaje son requeridas', 'error');
      return;  // Salir del método si no se proporciona travelDate
    }

      this.reservationService.saveUsingPOST2(this.reservation).subscribe((reservation) => {
        Swal.fire(
          'Reserva Creada',
          `Reserva ${reservation.tariff?.origin} - ${reservation.tariff?.destination} ha sido creada`,
          'success'
        );
      });
    
    }else{
      this.reservationService.updateUsingPUT2(this.reservation).subscribe((reservation) => {
        Swal.fire(
          'Reserva Actualizado',
          `Reserva ${reservation.tariff?.origin} - ${reservation.tariff?.destination} ha sido actualizado`,
          'success'
        );
      });
    }

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
  cargarTariff(){
    this.tariffService.getAllUsingGET5().subscribe((tarifario) => (this.tariff=tarifario));
  }
  cargarStateReservation() {
    this.stateService.getAllUsingGET4()
    .subscribe((state) => (this.stateReservation = state));
  }

  // Método para determinar si el campo debe ser visible
  getVisibility(field: string): boolean {
    if (!this.update) {
      // Si estamos en "Nueva Reserva" (update = false), ocultamos "Código de Viaje" y "Pasajero"
      if (field === 'ocultarInputs') {
        return false;  // No mostrar "Código de Viaje" y "Pasajero"
      }
    }
    return true;  // Mostrar el campo si estamos editando (update = true)
  }

  // Función para formatear la fecha en el formato 'yyyy-MM-dd HH:mm'
formatDate(date: string): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = ('0' + (d.getMonth() + 1)).slice(-2);  // Mes con dos dígitos
  const day = ('0' + d.getDate()).slice(-2);  // Día con dos dígitos
  const hours = ('0' + d.getHours()).slice(-2);  // Horas con dos dígitos
  const minutes = ('0' + d.getMinutes()).slice(-2);  // Minutos con dos dígitos
  return `${year}-${month}-${day} ${hours}:${minutes}`;  // Formato 'yyyy-MM-dd HH:mm'
}
}
