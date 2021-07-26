import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerLetGetStartedComponent } from './partner-let-get-started.component';

describe('PartnerLetGetStartedComponent', () => {
  let component: PartnerLetGetStartedComponent;
  let fixture: ComponentFixture<PartnerLetGetStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerLetGetStartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerLetGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
