import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountSliderInputComponent } from './amount-slider-input.component';

describe('AmountSliderInputComponent', () => {
  let component: AmountSliderInputComponent;
  let fixture: ComponentFixture<AmountSliderInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountSliderInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountSliderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
