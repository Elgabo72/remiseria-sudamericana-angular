import { Component, OnInit } from '@angular/core';
import { Reservation, StateReservation, Tariff } from 'src/app/infraestructure/remiseriaApi/models';
import { ReservationControllerService, StateReservationControllerService, TariffControllerService } from 'src/app/infraestructure/remiseriaApi/services';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor
  (private service: ReservationControllerService,
    private tariffService:TariffControllerService,
    private stateService: StateReservationControllerService 
  ) { }
  currentReservation: Reservation = {}

  tariff : Tariff[] = []
  stateReservation: StateReservation[] = [];
  reservationList: Reservation[] = [];
  dataSource: any = null;

  ocultado = 'd-none';
  showSpinner = true;

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.loadData();
  }
  loadData(): void {
    setTimeout(() => {
      this.service.getAllUsingGET2().subscribe((reservation) => {
        this.reservationList = reservation;
        console.log(reservation);

        this.cargarDriver()
        this.cargarStatusReservation()
        this.showSpinner = false;
      });
    }, 2000);
  }
  cargarDriver() {
    this.tariffService
    .getAllUsingGET5()
    .subscribe((Tariff) => (this.tariff = Tariff));
  }
  cargarStatusReservation() {
    this.stateService.getAllUsingGET4().subscribe((stateReserva) => {
      this.stateReservation = stateReserva});
  }

  
}
