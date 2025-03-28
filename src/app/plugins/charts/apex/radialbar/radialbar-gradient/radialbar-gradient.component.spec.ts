import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialbarGradientComponent } from './radialbar-gradient.component';

describe('RadialbarGradientComponent', () => {
  let component: RadialbarGradientComponent;
  let fixture: ComponentFixture<RadialbarGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadialbarGradientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadialbarGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
