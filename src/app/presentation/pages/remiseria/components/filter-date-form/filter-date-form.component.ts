import { Component, EventEmitter, OnInit, Output } from '@angular/core';
export interface FormFilterData {
  init: string,
  end: string
}
@Component({
  selector: 'app-filter-date-form',
  templateUrl: './filter-date-form.component.html',
  styleUrls: ['./filter-date-form.component.css']
})

export class FilterDateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() submit: EventEmitter<FormFilterData> = new EventEmitter();
  @Output() resetFilter: EventEmitter<void> = new EventEmitter();  // Evento para resetear el filtro

  filterData: FormFilterData = {
    init: "",
    end: ""
  }

  filterForDate(): void {
    this.submit.emit(this.filterData);
  }
  // Método para resetear los campos de fecha y emitir el evento
  resetDateFields(): void {
    this.filterData.init = '';
    this.filterData.end = '';
    this.resetFilter.emit();  // Emitir el evento para notificar al componente padre
  }
}
