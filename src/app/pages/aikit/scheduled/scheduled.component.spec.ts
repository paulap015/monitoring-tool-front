import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledComponent } from './scheduled.component';

describe('ScheduledComponent', () => {
  let component: ScheduledComponent;
  let fixture: ComponentFixture<ScheduledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
