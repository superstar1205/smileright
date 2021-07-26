import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsumerProductCalculatorComponent } from './consumer-product-calculator.component';


describe('ConsumerProductCalculatorComponent', () => {
  let component: ConsumerProductCalculatorComponent;
  let fixture: ComponentFixture<ConsumerProductCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerProductCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerProductCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
