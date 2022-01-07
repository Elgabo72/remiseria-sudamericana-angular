import { Component, enableProdMode, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Payment } from 'src/app/infraestructure/remiseriaApi/models';
import { PaymentControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { exportExcel } from 'src/app/infraestructure/shared/exportExcel';
import { FormFilterData } from '../../components/filter-date-form/filter-date-form.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private service: PaymentControllerService) { }

  activeModal = false;
  activeUpdated = false;
  currentPayment: Payment = {}

  paymentList: Payment[] = []
  dataSource: any = null;

  ocultado = 'd-none';
  showSpinner = true;
  displayedColumns: string[] = [
    'ID',
    'Driver',
    'Vehicle',
    'Employee',
    'PaymentDate',
    'Amount',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.loadPaymentsList();
  }
  closeModal(show: boolean): void {
    this.activeModal = show;
    this.activeUpdated = false;
    this.refreshList();
  }
  refreshList(): void {
    // console.log("me ejecuto");
    this.ocultado = 'd-none';
    this.showSpinner = true;
    this.loadPaymentsList()
  }

  downloadExcel(): void {
    // formatear la data para imprimirla correctamente en el excel
    const data = this.paymentList.map(data => {
      return {
        "#": data.idPayment,
        "Chofer": data.driver?.lastName + " " + data.driver?.firstName,
        "Vehiculo": data.vehicle?.plaque,
        "Empleado": data.employee?.lastName + " " + data.employee?.firstName,
        "Monto": data.amount?.toFixed(2),
        "Fecha de Pago": data.dateCreated,
      }
    });

    exportExcel(data, 'reporte-pagos');
  }
  filterForDate(data: FormFilterData): void {
    if (data.init && data.init != null) {
      this.loadPaymentsListFilterDate(data.init, data.end);
    }

  }
  loadPaymentsListFilterDate(init: string, end: string): void {
    console.log({
      dateEnd: `${end}T23:59:59`,
      dateInit: `${init}T00:00:00`
    });
    this.service.filterByTravelDateUsingPOST({
      dateEnd: `${end} 23:59:59`,
      dateInit: `${init} 00:00:00`
    }).subscribe((payments) => {
      this.paymentList = payments;
      console.log(payments);

      this.chargingTableList();
      this.ocultado = payments.length == 0 ? 'd-none' : '';
      this.showSpinner = false;
    });
  }
  handlerClickRegister(): void {
    this.activeModal = !this.activeModal;
    this.currentPayment = {};
  }
  loadPaymentsList(): void {
    this.service.getAllUsingGET().subscribe((payments) => {
      this.paymentList = payments;
      console.log(payments);

      this.chargingTableList();
      this.ocultado = payments.length == 0 ? 'd-none' : '';
      this.showSpinner = false;
    });
  }
  chargingTableList(): void {
    this.dataSource = new MatTableDataSource<Payment>(this.paymentList);
    this.dataSource.paginator = this.paginator;
  }
}
