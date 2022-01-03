import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Payment } from 'src/app/infraestructure/remiseriaApi/models';
import { PaymentControllerService } from 'src/app/infraestructure/remiseriaApi/services';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private service:PaymentControllerService ) { }

  activeModal = false;
  activeUpdated = false;
  currentPayment: Payment = {}

  paymentList : Payment[]=[]
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
  handlerClickRegister(): void {
    this.activeModal = !this.activeModal;
    this.currentPayment = {};
  }
  loadPaymentsList(): void {
    setTimeout(() => {
      this.service.getAllUsingGET().subscribe((payments) => {
        this.paymentList = payments;
        console.log(payments);

        this.chargingTableList();
        this.ocultado = payments.length == 0 ? 'd-none' : '';
        this.showSpinner = false;
      });
    }, 2000);
  }
  chargingTableList(): void {
    this.dataSource = new MatTableDataSource<Payment>(this.paymentList);
    this.dataSource.paginator = this.paginator;
  }
}
