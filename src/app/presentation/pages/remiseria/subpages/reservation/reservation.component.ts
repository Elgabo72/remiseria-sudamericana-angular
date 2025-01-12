import { Component, OnInit } from '@angular/core';
import { Reservation, StateReservation, Tariff } from 'src/app/infraestructure/remiseriaApi/models';
import { ReservationControllerService, StateReservationControllerService, TariffControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { exportExcel } from 'src/app/infraestructure/shared/exportExcel';
import { FormFilterData } from '../../components/filter-date-form/filter-date-form.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor
    (private service: ReservationControllerService,
      private tariffService: TariffControllerService,
      private stateService: StateReservationControllerService
    ) { }

  activeModal = false;
  activeUpdated = false;
  currentReservation: Reservation = {}
  cod: any = 0
  ffencendido : boolean = false

  tariff: Tariff[] = []
  stateReservation: StateReservation[] = [];
  reservationList: Reservation[] = [];
  dataSource: any = null;

  ocultado = 'd-none';
  showSpinner = true;

  init : string = ""
  end : string = ""

  ngOnInit(): void {
    this.cargarStatusReservation()
  }

  ngAfterViewInit(): void {
    this.loadData();
  }

  filterForDate(data: FormFilterData): void {
    if (data.init && data.init != null) {
      this.loadPaymentsListFilterDate(data.init, data.end);
      this.ffencendido=true
      
    }

  }
   // Método para restablecer el filtro de fecha cuando el botón X es presionado
   resetDateFilter(): void {
    this.init = '';  // Limpiar el valor de fecha de inicio
    this.end = '';   // Limpiar el valor de fecha de fin
    this.ffencendido = false;  // Desactivar el filtro por fecha
    this.loadData();  // Cargar la lista de reservas sin filtros de fecha
  }
  handlerClickRegister(): void {
    this.activeModal = true;
    this.currentReservation = { };
  }

  loadPaymentsListFilterDate(init: string, end: string): void {
    console.log({
      dateEnd: `${end}T23:59:59`,
      dateInit: `${init}T00:00:00`
    });
    this.service.filterByTravelDateUsingPOST1({
      dateEnd: `${end} 23:59:59`,
      dateInit: `${init} 00:00:00`
    }).subscribe((reservation) => {
      this.reservationList = reservation.reverse()
      // console.log(reservation);

      this.cargarDriver()
      this.ocultado = reservation.length == 0 ? 'd-none' : '';
      this.showSpinner = false;
    });
  }
  downloadExcel(): void {
    // formatear la data para imprimirla correctamente en el excel
    const data = this.reservationList.map(reservation => {
      return {
        "#": reservation.idReservation,
        "Fecha de Viaje": reservation.travelDate,
        "Descripcion": reservation.description,
        "Precio": reservation.tariff?.amount,
        "Estado": reservation.stateReservation?.description,
        "Pasajero": reservation.passenger?.firstName + " " + reservation.passenger?.lastName,
        "Chofer": reservation.passenger?.firstName + " " + reservation.passenger?.lastName,

      }
    });
    exportExcel(data, 'reporte-reservaciones');

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
  refreshListFilter(cod: any): void {
    // console.log("me ejecuto");
    this.ocultado = 'd-none';
    this.showSpinner = true;
    this.filterForState(cod)
  }

  editReservationInModal(reservation: Reservation) {
    this.currentReservation = reservation;
    this.activeModal = true;
    this.activeUpdated = true;
    // console.log(reservation)

  }

  loadData(): void {
    this.service.getAllUsingGET2().subscribe((reservation) => {
      this.reservationList = reservation.reverse()
      // console.log(reservation);
      // console.log(this.cod)
      
      this.ListFor5seg()
      this.cargarDriver()
      this.ocultado = reservation.length == 0 ? 'd-none' : '';
      this.showSpinner = false;
    });
  }
  cargarDriver() {
    this.tariffService
      .getAllUsingGET5()
      .subscribe((Tariff) => (this.tariff = Tariff));
  }
  cargarStatusReservation() {
    this.stateService.getAllUsingGET4().subscribe((stateReserva) => {
      this.stateReservation = stateReserva
    });
  }

  ListFor5seg(){
    setTimeout(() => {
      if(this.ffencendido==true){
        this.filterForDate
        this.ListFor5seg()
        // console.log("se activo filtro por fecha")
      }else if(this.ffencendido==false){
        this.filterForState(this.cod)
        // console.log("se activo el filtro por estados")
        this.ListFor5seg()
        
      }
    }, 5000);
  }
  filterForState(cod: any) {
    if (cod != 0) {
      this.service.getByIdStateReservationUsingGET(cod).subscribe((reservation) => {
        this.reservationList = reservation.reverse()
        this.ffencendido=false
        this.cargarDriver()
        this.ocultado = reservation.length == 0 ? 'd-none' : '';
        this.showSpinner = false;
        this.cod = cod
        
      });
    } else {
      this.service.getAllUsingGET2().subscribe((reservation) => {
        this.reservationList = reservation.reverse()

        this.cargarDriver()
        this.ocultado = reservation.length == 0 ? 'd-none' : '';
        this.showSpinner = false;
        this.cod = 0
      });
    }

  }

  getColor(state: any) {
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
      default: return '#2f3946'
    }
  }


}
