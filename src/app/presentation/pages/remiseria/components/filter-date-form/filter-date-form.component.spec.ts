import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDateFormComponent } from './filter-date-form.component';

describe('FilterDateFormComponent', () => {
  let component: FilterDateFormComponent;
  let fixture: ComponentFixture<FilterDateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterDateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
