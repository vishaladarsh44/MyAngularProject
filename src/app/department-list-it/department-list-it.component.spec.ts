import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListItComponent } from './department-list-it.component';

describe('DepartmentListItComponent', () => {
  let component: DepartmentListItComponent;
  let fixture: ComponentFixture<DepartmentListItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentListItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentListItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
