import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordAttendanceComponent } from './record-attendance.component';

describe('RecordAttendanceComponent', () => {
  let component: RecordAttendanceComponent;
  let fixture: ComponentFixture<RecordAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordAttendanceComponent]
    });
    fixture = TestBed.createComponent(RecordAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
