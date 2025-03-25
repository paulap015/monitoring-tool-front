import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDocumentsComponent } from './profile-documents.component';

describe('ProfileDocumentsComponent', () => {
  let component: ProfileDocumentsComponent;
  let fixture: ComponentFixture<ProfileDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
