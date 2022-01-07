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

  filterData: FormFilterData = {
    init: "",
    end: ""
  }

  filterForDate(): void {
    this.submit.emit(this.filterData);
  }
}
