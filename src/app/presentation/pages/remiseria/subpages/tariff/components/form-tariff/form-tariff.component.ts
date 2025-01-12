import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tariff } from 'src/app/infraestructure/remiseriaApi/models';
import { TariffControllerService } from 'src/app/infraestructure/remiseriaApi/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-tariff',
  templateUrl: './form-tariff.component.html',
  styleUrls: ['./form-tariff.component.css']
})
export class FormTariffComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() update: boolean = false;
  @Input() data: Tariff = {};
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() refreshList: EventEmitter<void> = new EventEmitter();

  constructor(
    private tariffService: TariffControllerService
  ) { }

  // employe: User = {}
  tariff: Tariff[] = []
  ngOnInit(): void {
    this.data.idTariff = this.data.idTariff ?? 0;
  }

  createUpdateTariff(): void {
    //  crea el cliente, luego le redirije
    if (!this.update) {
      this.tariffService.saveUsingPOST5(this.data).subscribe((res) => {
        Swal.fire(
          'Nueva Tarifa Creada',
          `Ruta: ${res.origin} - ${res.destination} ha sido registrado`,
          'success'
        );

      });
    } else {

      this.tariffService.updateUsingPUT5(this.data).subscribe((tariff) => {
        Swal.fire(
          'Tarifa Actualizada',
          `Ruta: ${tariff.origin} - ${tariff.destination} ha sido actualizado`,
          'success'
        );
      });

    }
    this.closeModal();
    this.refreshListEvent();
  }

  closeModal(): void {
    this.closeModalEvent.emit(!this.show);
    // this.refreshList.emit();
    // this.update = false;
  }

  refreshListEvent(): void {
    this.refreshList.emit();
  }


}
