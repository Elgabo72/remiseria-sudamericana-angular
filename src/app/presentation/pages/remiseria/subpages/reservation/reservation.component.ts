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

  activeModal = false;
  activeUpdated = false;
  currentReservation: Reservation = {}

  cod:any=0

  tariff : Tariff[] = []
  stateReservation: StateReservation[] = [];
  reservationList: Reservation[] = [];
  dataSource: any = null;

  ocultado = 'd-none';
  showSpinner = true;

  ngOnInit(): void {
    this.cargarStatusReservation()
  }
  
  ngAfterViewInit(): void {
    this.loadData();
  }

  closeModal(show: boolean): void {
    this.activeModal = false;
    this.activeUpdated = false;
    this.refreshList();
  }
  refreshList(): void {
    // console.log("me ejecuto");
    this.ocultado = 'd-none';
    this.showSpinner = true;
    this.filterForState(this.cod)
  }
  refreshListFilter(cod:any): void {
    // console.log("me ejecuto");
    this.ocultado = 'd-none';
    this.showSpinner = true;
    this.filterForState(cod)
  }

  editReservationInModal(reservation: Reservation) {
    this.currentReservation = reservation;
    this.activeModal = true;
    this.activeUpdated = true;
    console.log(reservation)

  }

  loadData(): void {
    setTimeout(() => {
      this.service.getAllUsingGET2().subscribe((reservation) =>{
        this.reservationList = reservation.reverse()
        console.log(reservation);
        
        this.cargarDriver()
        this.ocultado = reservation.length == 0 ? 'd-none' : '';
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

  filterForState(cod:any){
    if(cod!=0){
      setTimeout(() => {
        this.service.getByIdStateReservationUsingGET(cod).subscribe((reservation) =>{
          this.reservationList = reservation.reverse()
    
          this.cargarDriver()
          this.ocultado = reservation.length == 0 ? 'd-none' : '';
          this.showSpinner = false;
          this.cod=cod
        });
      }, 1000);
    }else{
      setTimeout(() => {
        this.service.getAllUsingGET2().subscribe((reservation) =>{
          this.reservationList = reservation.reverse()
          
          this.cargarDriver()
          this.ocultado = reservation.length == 0 ? 'd-none' : '';
          this.showSpinner = false;
          cod=cod
        });
      }, 2000);
    }
    
  }

  getColor(state:any) {
    switch (state) {
      case 'PENDIENTE':
        return 'rgb(169, 52, 52)';
      case 'ACEPTADO/EN CAMINO':
        return '#39d15f';
      case 'ACEPTADO/EN ESPERA':
        return '#2a6f3b';
      case 'EN VIAJE':
        return '#d3aa04';
      case 'VIAJE REALIZADO':
        return '#1d1b6a';
      case 'CANCELADO':
        return 'black';
        default:return '#2f3946'  
    }
  }

  
}
