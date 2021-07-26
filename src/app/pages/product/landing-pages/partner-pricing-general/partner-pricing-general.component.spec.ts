import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPricingGeneralComponent } from './partner-pricing-general.component';

describe('PartnerPricingGeneralComponent', () => {
  let component: PartnerPricingGeneralComponent;
  let fixture: ComponentFixture<PartnerPricingGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerPricingGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerPricingGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
