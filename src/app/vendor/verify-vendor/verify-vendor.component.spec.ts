import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyVendorComponent } from './verify-vendor.component';

describe('VerifyVendorComponent', () => {
  let component: VerifyVendorComponent;
  let fixture: ComponentFixture<VerifyVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
