import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPricingCalculatorComponent } from './partner-pricing-calculator.component';

describe('PartnerPricingCalculatorComponent', () => {
  let component: PartnerPricingCalculatorComponent;
  let fixture: ComponentFixture<PartnerPricingCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerPricingCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerPricingCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
