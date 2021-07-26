import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HygieneBadBreathComponent } from './hygiene-bad-breath.component';

describe('HygieneBadBreathComponent', () => {
  let component: HygieneBadBreathComponent;
  let fixture: ComponentFixture<HygieneBadBreathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HygieneBadBreathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HygieneBadBreathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
