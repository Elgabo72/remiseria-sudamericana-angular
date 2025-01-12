import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, Vehicle } from 'src/app/infraestructure/remiseriaApi/models';
import { UserControllerService, VehicleControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import { Roles } from 'src/app/infraestructure/shared/RoleEnum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-vehicle',
  templateUrl: './form-vehicle.component.html',
  styleUrls: ['./form-vehicle.component.css']
})
export class FormVehicleComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() update: boolean = false;
  @Input() vehicle: Vehicle = {};
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() refreshList: EventEmitter<void> = new EventEmitter();

  constructor(
    private vehicleService: VehicleControllerService,
    private driverService: UserControllerService
  ) { }

  // employe: User = {}
  drivers: User[] = []
  typeVehicle=["AUTO","MINI-FLETE"]
  
  ngOnInit(): void {
    this.vehicle.idVehicle = this.vehicle.idVehicle ?? 0;
    this.cargarDriver();
  }

  createUpdateVehicle(): void {
    if (!this.update) {
      this.vehicleService.saveUsingPOST7(this.vehicle).subscribe((res) => {
        Swal.fire(
          'Nuevo Vehiculo Creado',
          `Vehiculo ${res.plaque} ha sido registrado`,
          'success'
        );
        this.closeModalEvent.emit(!this.show);
      });
    } else {

      this.vehicleService.updateUsingPUT7(this.vehicle).subscribe((vehicle) => {
        Swal.fire(
          'Vehiculo Actualizado',
          `Vehiculo ${vehicle.plaque} ha sido actualizado`,
          'success'
        );
        this.closeModalEvent.emit(!this.show);
      });

    }
  }

  closeModal(): void {
    this.closeModalEvent.emit(!this.show);
    // this.refreshList.emit();
    // this.update = false;
  }


  cargarDriver() {
    this.driverService
    .getByIdRoleUsingGET(Roles.CHOFER)
    .subscribe((driver) => (this.drivers = driver));
  }

}
