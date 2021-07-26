import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPricingFreeComponent } from './partner-pricing-free.component';

describe('PartnerPricingFreeComponent', () => {
  let component: PartnerPricingFreeComponent;
  let fixture: ComponentFixture<PartnerPricingFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerPricingFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerPricingFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
