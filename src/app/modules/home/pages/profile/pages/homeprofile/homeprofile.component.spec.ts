import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprofileComponent } from './homeprofile.component';

describe('HomeprofileComponent', () => {
  let component: HomeprofileComponent;
  let fixture: ComponentFixture<HomeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
