import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUComponent } from './sign-u.component';

describe('SignUComponent', () => {
  let component: SignUComponent;
  let fixture: ComponentFixture<SignUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
