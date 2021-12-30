import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/infraestructure/remiseriaApi/models';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor() { }

  activeModal = false;
  activeUpdated = false;
  currentPayment: Payment = {}

  ngOnInit(): void {
  }
  closeModal(show: boolean): void {
    this.activeModal = show;
    this.activeUpdated = false;
    this.refreshList();
  }
  refreshList(): void {
    // console.log("me ejecuto");
    // this.ocultado = 'd-none';
    // this.showSpinner = true;
    // this.loadRoleList()
  }
  handlerClickRegister(): void {
    this.activeModal = !this.activeModal;
    this.currentPayment = {};
  }
}
