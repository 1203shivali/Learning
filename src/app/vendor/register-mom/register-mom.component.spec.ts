import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMOmComponent } from './register-mom.component';

describe('RegisterMOmComponent', () => {
  let component: RegisterMOmComponent;
  let fixture: ComponentFixture<RegisterMOmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMOmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMOmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
