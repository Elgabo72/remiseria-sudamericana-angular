import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from 'src/app/infraestructure/remiseriaApi/models';
import { RoleControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { exportExcel } from 'src/app/infraestructure/shared/exportExcel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private service: RoleControllerService) { }
  // properties for Modal
  activeModal = false;
  activeUpdated = false;
  currentRole: Role = {}

  roleList: Role[] = [];
  dataSource: any = null;
  displayedColumns: string[] = [
    'ID',
    'Description',
    'Actions',

  ];
  ocultado = 'd-none';
  showSpinner = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.loadRoleList();
  }

  downloadExcel(): void {
    // formatear la data para imprimirla correctamente en el excel
    const data = this.roleList.map(data => {
      return {
        "#": data.idRole,
        "Descripcion": data.description,
      }
    });

    exportExcel(data, 'reporte-choferes');
  }
  //methods modal

  closeModal(show: boolean): void {
    this.activeModal = show;
    this.activeUpdated = false;
    this.refreshList();
  }
  refreshList(): void {
    // console.log("me ejecuto");
    this.ocultado = 'd-none';
    this.showSpinner = true;
    this.loadRoleList()
  }
  handlerClickRegister(): void {
    this.activeModal = !this.activeModal;
    this.currentRole = {};
  }

  editRoleInModal(role: Role) {
    this.currentRole = role;
    this.activeModal = !this.activeModal;
    this.activeUpdated = true;

  }
  deleteRole(role: Role) {
    this.service.deleteUsingDELETE3(role.idRole ?? 0).subscribe((res) => {
      Swal.fire(
        'Rol Eliminado',
        `Rol ${role.description} ha sido eliminado`,
        'success'
      );
      this.refreshList()
    });
    
    this.activeUpdated = true;

  }

  // methods with API
  loadRoleList(): void {
      this.service.getAllUsingGET3().subscribe((roles) => {
        this.roleList = roles;
        console.log(roles);

        this.chargingTableList();
        this.ocultado = roles.length == 0 ? 'd-none' : '';
        this.showSpinner = false;
      });
  }
  chargingTableList(): void {
    this.dataSource = new MatTableDataSource<Role>(this.roleList);
    this.dataSource.paginator = this.paginator;
  }

}
