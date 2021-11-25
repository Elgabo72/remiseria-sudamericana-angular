import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/infraestructure/remiseriaApi/models';
import { UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  constructor(private service: UserControllerService) { }

  // properties for Modal
  activeModal = false;
  activeUpdated = false;
  currentUser: User = {}

  employeList: User[] = [];
  dataSource: any = null;
  displayedColumns: string[] = [
    'ID',
    'FirstName',
    'LastName',
    'Status',
    'Email',
    'Actions',
  ];
  ocultado = 'd-none';
  showSpinner = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    this.loadClientList();
  }

  //methods modal

  closeModal(show: boolean): void {
    this.activeModal = show;
  }
  refreshList(): void {
    // console.log("me ejecuto");
    this.ocultado = 'd-none';
    this.showSpinner = true;
    this.loadClientList()
  }
  handlerClickRegister(): void {
    this.activeModal = !this.activeModal;
    this.currentUser = {};
  }

  editEmployeInModal(employe: User) {
    this.currentUser = employe;
    this.activeModal = !this.activeModal;
    this.activeUpdated = true;

  }
  deleteEmploye(employe: User) {
    this.service.deleteUsingDELETE6(employe.idUser ?? 0).subscribe((res) => {
      Swal.fire(
        'Empleado Desabilitado',
        `Empleado ${employe.firstName} ha sido desabilitado`,
        'success'
      );
    });
    this.refreshList()
    // this.currentUser = employe;
    // this.activeModal = !this.activeModal;
    this.activeUpdated = true;

  }

  // methods with API
  loadClientList(): void {
    setTimeout(() => {
      this.service.getAllEmployesUsingGET().subscribe((employes) => {
        this.employeList = employes;
        console.log(employes);

        this.chargingTableList();
        this.ocultado = employes.length == 0 ? 'd-none' : '';
        this.showSpinner = false;
      });
    }, 2000);
  }
  
  chargingTableList(): void {
    this.dataSource = new MatTableDataSource<User>(this.employeList);
    this.dataSource.paginator = this.paginator;
  }
}
