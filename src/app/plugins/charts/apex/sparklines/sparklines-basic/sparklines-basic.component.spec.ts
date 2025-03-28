import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparklinesBasicComponent } from './sparklines-basic.component';

describe('SparklinesBasicComponent', () => {
  let component: SparklinesBasicComponent;
  let fixture: ComponentFixture<SparklinesBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparklinesBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SparklinesBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
