import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAssignmentComponent } from './alert-assignment.component';

describe('AlertAssignmentComponent', () => {
  let component: AlertAssignmentComponent;
  let fixture: ComponentFixture<AlertAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
