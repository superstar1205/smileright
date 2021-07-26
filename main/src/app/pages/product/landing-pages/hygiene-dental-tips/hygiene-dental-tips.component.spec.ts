import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HygieneDentalTipsComponent } from './hygiene-dental-tips.component';

describe('HygieneDentalTipsComponent', () => {
  let component: HygieneDentalTipsComponent;
  let fixture: ComponentFixture<HygieneDentalTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HygieneDentalTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HygieneDentalTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
