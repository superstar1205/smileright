import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPricingPlansComponent } from './partner-pricing-plans.component';

describe('PartnerPricingPlansComponent', () => {
  let component: PartnerPricingPlansComponent;
  let fixture: ComponentFixture<PartnerPricingPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerPricingPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerPricingPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
