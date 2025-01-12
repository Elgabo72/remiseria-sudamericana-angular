import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User, Vehicle } from 'src/app/infraestructure/remiseriaApi/models';
import { UserControllerService, VehicleControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { exportExcel } from 'src/app/infraestructure/shared/exportExcel';
import { Roles } from 'src/app/infraestructure/shared/RoleEnum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor(
    private service: VehicleControllerService,
    private driverService: UserControllerService) { }

  // properties for Modal
  activeModal = false;
  activeUpdated = false;
  currentVehicle: Vehicle = {}

  drivers: User[] = []
  vehicleList: Vehicle[] = [];
  dataSource: any = null;
  displayedColumns: string[] = [
    'ID',
    'Description',
    'IdDriver',
    'Mark',
    'Model',
    'Plaque',
    'Type',
    'Status',
    'Actions',
  ];
  ocultado = 'd-none';
  showSpinner = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    this.loadData();
  }

  downloadExcel(): void {
    // formatear la data para imprimirla correctamente en el excel
    const data = this.vehicleList.map(vehicle => {
      return {
        "#": vehicle.idVehicle,
        "Descripcion": vehicle.description,
        "Marca": vehicle.mark,
        "Modelo": vehicle.model,
        "Placa": vehicle.plaque,
        "Tipo": vehicle.type,
        "Chofer": vehicle.user?.lastName + ' ' + vehicle.user?.firstName,
        "Estado": vehicle.active ? "Activo" : "Inactivo",
      }
    });

    exportExcel(data, 'reporte-vehiculos');
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
    this.loadData()
  }
  handlerClickRegister(): void {
    this.activeModal = true;
    this.currentVehicle = {};
  }

  editEmployeInModal(vehicle: Vehicle) {
    this.currentVehicle = vehicle;
    this.activeModal = true;
    this.activeUpdated = true;

  }
  deleteEmploye(vehicle: Vehicle) {
    this.service.deleteUsingDELETE7(vehicle.idVehicle ?? 0).subscribe((res) => {
      Swal.fire(
        'Vehiculo Desabilitado',
        `Vehiculo ${vehicle.description} ha sido desabilitado`,
        'success'
      );
      this.refreshList()
    });
    console.log(vehicle.idVehicle)
    
    // this.currentUser = employe;
    // this.activeModal = !this.activeModal;
    this.activeUpdated = true;

  }

  // methods with API
  loadData(): void {
      this.service.getAllUsingGET7().subscribe((vehicle) => {
        this.vehicleList = vehicle;
        console.log(vehicle);

        this.chargingTableList();
        this.ocultado = vehicle.length == 0 ? 'd-none' : '';
        this.showSpinner = false;
      });
  }
  cargarDriver() {
    this.driverService
      .getByIdRoleUsingGET(Roles.CHOFER)
      .subscribe((driver) => (this.drivers = driver));
  }
  chargingTableList(): void {
    this.dataSource = new MatTableDataSource<Vehicle>(this.vehicleList);
    this.dataSource.paginator = this.paginator;
  }

}
