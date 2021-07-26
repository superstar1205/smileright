import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HygienePeriodontistComponent } from './hygiene-periodontist.component';

describe('HygienePeriodontistComponent', () => {
  let component: HygienePeriodontistComponent;
  let fixture: ComponentFixture<HygienePeriodontistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HygienePeriodontistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HygienePeriodontistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
