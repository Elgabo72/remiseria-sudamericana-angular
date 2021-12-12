import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPassengerComponent } from './form-passenger.component';

describe('FormPassengerComponent', () => {
  let component: FormPassengerComponent;
  let fixture: ComponentFixture<FormPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
