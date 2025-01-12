import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/infraestructure/remiseriaApi/models';
import { UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { exportExcel } from 'src/app/infraestructure/shared/exportExcel';
import { Roles } from 'src/app/infraestructure/shared/RoleEnum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

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

  downloadExcel(): void {
    // formatear la data para imprimirla correctamente en el excel
    const data = this.employeList.map(employee => {
      return {
        "#": employee.idUser,
        "Nombre Completo": employee.firstName + " " + employee.lastName,
        "Status": employee.active ? "Activo" : "Inactivo",
        "Email": employee.email,
        "Telefono":employee.phone,
        "Direccion":employee.address
      }
    });

    exportExcel(data, 'reporte-choferes');
  }

  //methods modal

  closeModal(show: boolean): void {
    this.activeModal = false;
    this.activeUpdated = false;
    this.refreshList();
  }
  refreshList(): void {
    // console.log("me ejecuto");
    this.ocultado = 'd-none';
    this.showSpinner = true;
    this.loadClientList()
  }
  handlerClickRegister(): void {
    this.activeModal = true;
    this.currentUser = {};
  }

  editEmployeInModal(employe: User) {
    this.currentUser = employe;
    this.activeModal = true;
    this.activeUpdated = true;

  }
  deleteEmploye(employe: User) {
    this.service.deleteUsingDELETE6(employe.idUser ?? 0).subscribe((res) => {
      Swal.fire(
        'Chofer Desabilitado',
        `Chofer ${employe.firstName} ha sido desabilitado`,
        'success'
      );
      this.refreshList()
    });
    // this.currentUser = employe;
    // this.activeModal = !this.activeModal;
    this.activeUpdated = true;

  }

  // methods with API
  loadClientList(): void {
    this.service.getByIdRoleUsingGET(Roles.CHOFER).subscribe((employes) => {
      this.employeList = employes;
      console.log(employes);

      this.chargingTableList();
      this.ocultado = employes.length == 0 ? 'd-none' : '';
      this.showSpinner = false;
    });
  }

  chargingTableList(): void {
    this.dataSource = new MatTableDataSource<User>(this.employeList);
    this.dataSource.paginator = this.paginator;
  }
}
