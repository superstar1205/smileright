import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedMarketingComponent } from './getting-started-marketing.component';

describe('GettingStartedMarketingComponent', () => {
  let component: GettingStartedMarketingComponent;
  let fixture: ComponentFixture<GettingStartedMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingStartedMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
