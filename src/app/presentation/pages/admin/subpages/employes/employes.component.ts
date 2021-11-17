import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/infraestructure/remiseriaApi/models';
import { UserControllerService } from 'src/app/infraestructure/remiseriaApi/services';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {
  constructor(private service: UserControllerService) { }
  employeList: User[] = [];
  dataSource: any = null;
  displayedColumns: string[] = [
    'ID',
    'FirstName',
    'LastName',
    'Status',
    'Type',
    'Actions',
  ];
  ocultado = 'd-none';
  showSpinner = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void { }
  ngAfterViewInit(): void {
    this.loadClientList();
  }

  //methods
  loadClientList(): void {
    setTimeout(() => {
      this.service.getAllUsingGET6().subscribe((employes) => {
        this.employeList = employes;
        console.log(employes);

        this.chargingTableList();
        this.ocultado = employes.length == 0 ? 'd-none' : '';
        this.showSpinner = false;
      });
    }, 300);
  }
  chargingTableList(): void {
    this.dataSource = new MatTableDataSource<User>(this.employeList);
    this.dataSource.paginator = this.paginator;
  }
}
