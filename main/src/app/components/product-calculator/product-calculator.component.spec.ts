import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCalculatorComponent } from './product-calculator.component';

describe('ProductDurationComponent', () => {
  let component: ProductCalculatorComponent;
  let fixture: ComponentFixture<ProductCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
