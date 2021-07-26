import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchantTradingHoursViewComponent } from './merchant-trading-hours-view.component';


describe('MerchantTradingHoursViewComponent', () => {
  let component: MerchantTradingHoursViewComponent;
  let fixture: ComponentFixture<MerchantTradingHoursViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantTradingHoursViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantTradingHoursViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
