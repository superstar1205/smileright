import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HygieneConfirmationComponent } from './hygiene-confirmation.component';

describe('HygieneConfirmationComponent', () => {
  let component: HygieneConfirmationComponent;
  let fixture: ComponentFixture<HygieneConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HygieneConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HygieneConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
