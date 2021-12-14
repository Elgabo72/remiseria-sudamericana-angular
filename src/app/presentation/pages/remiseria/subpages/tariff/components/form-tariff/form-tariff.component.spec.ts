import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTariffComponent } from './form-tariff.component';

describe('FormTariffComponent', () => {
  let component: FormTariffComponent;
  let fixture: ComponentFixture<FormTariffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTariffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
