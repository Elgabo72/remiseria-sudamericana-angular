import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tariff } from 'src/app/infraestructure/remiseriaApi/models';
import { TariffControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { exportExcel } from 'src/app/infraestructure/shared/exportExcel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css']
})
export class TariffComponent implements OnInit {

  constructor(private service: TariffControllerService) { }

  // properties for Modal
  activeModal = false;
  activeUpdated = false;
  currentTariff: Tariff = {}

  tariffList: Tariff[] = [];
  dataSource: any = null;
  displayedColumns: string[] = [
    'ID',
    'Origin',
    'Destination',
    'Amount',
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
    const data = this.tariffList.map(data => {
      return {
        "#": data.idTariff,
        "Origen": data.origin,
        "Destination": data.destination,
        "Amount": data.amount?.toFixed(2),
        "Status": data.active ? "Activo" : "Inactivo",
      }
    });

    exportExcel(data, 'reporte-tarifas');
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
    this.currentTariff = { active: true };
  }

  editTariffInModal(tariff: Tariff) {
    this.currentTariff = tariff;
    this.activeModal = true;
    this.activeUpdated = true;

  }
  deleteTariff(tariff: Tariff) {
    this.service.deleteUsingDELETE5(tariff.idTariff ?? 0).subscribe((res) => {
      Swal.fire(
        'Ruta Desabilitada',
        `Ruta ${tariff.origin} - ${tariff.destination} ha sido desabilitado`,
        'success'
      );
      this.refreshList()
    });
    
    // this.currentTariff = employe;
    // this.activeModal = !this.activeModal;
    this.activeUpdated = true;

  }

  // methods with API
  loadData(): void {
    this.service.getAllUsingGET5().subscribe((tariff) => {
      this.tariffList = tariff;
      console.log(tariff);

      this.chargingTableList();
      this.ocultado = tariff.length == 0 ? 'd-none' : '';
      this.showSpinner = false;
    });
  }

  chargingTableList(): void {
    this.dataSource = new MatTableDataSource<Tariff>(this.tariffList);
    this.dataSource.paginator = this.paginator;
  }

}
