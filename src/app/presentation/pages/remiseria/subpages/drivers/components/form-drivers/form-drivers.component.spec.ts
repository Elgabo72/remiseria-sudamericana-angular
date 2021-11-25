import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDriversComponent } from './form-drivers.component';

describe('FormDriversComponent', () => {
  let component: FormDriversComponent;
  let fixture: ComponentFixture<FormDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
