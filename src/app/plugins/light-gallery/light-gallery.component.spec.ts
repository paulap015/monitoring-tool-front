import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightGalleryComponent } from './light-gallery.component';

describe('LightGalleryComponent', () => {
  let component: LightGalleryComponent;
  let fixture: ComponentFixture<LightGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
