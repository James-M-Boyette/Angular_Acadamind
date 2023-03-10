import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAssignmentFinalComponent } from './server-assignment-final.component';

describe('ServerAssignmentFinalComponent', () => {
  let component: ServerAssignmentFinalComponent;
  let fixture: ComponentFixture<ServerAssignmentFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerAssignmentFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerAssignmentFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
