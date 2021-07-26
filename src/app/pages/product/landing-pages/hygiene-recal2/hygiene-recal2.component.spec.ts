import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HygieneRecal2Component } from './hygiene-recal2.component';

describe('HygieneRecal2Component', () => {
  let component: HygieneRecal2Component;
  let fixture: ComponentFixture<HygieneRecal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HygieneRecal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HygieneRecal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
