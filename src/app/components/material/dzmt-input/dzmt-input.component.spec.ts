import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzmtInputComponent } from './dzmt-input.component';

describe('DzmtInputComponent', () => {
  let component: DzmtInputComponent;
  let fixture: ComponentFixture<DzmtInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DzmtInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DzmtInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
