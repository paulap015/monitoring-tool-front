import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProfile1Component } from './app-profile-1.component';

describe('AppProfile1Component', () => {
  let component: AppProfile1Component;
  let fixture: ComponentFixture<AppProfile1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppProfile1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppProfile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
