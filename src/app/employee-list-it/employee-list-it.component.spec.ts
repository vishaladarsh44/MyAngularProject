import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListItComponent } from './employee-list-it.component';

describe('EmployeeListItComponent', () => {
  let component: EmployeeListItComponent;
  let fixture: ComponentFixture<EmployeeListItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
