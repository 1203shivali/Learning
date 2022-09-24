import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignMComponent } from './sign-m.component';

describe('SignMComponent', () => {
  let component: SignMComponent;
  let fixture: ComponentFixture<SignMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
