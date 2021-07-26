import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedDentalComponent } from './getting-started-dental.component';

describe('GettingStartedDentalComponent', () => {
  let component: GettingStartedDentalComponent;
  let fixture: ComponentFixture<GettingStartedDentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingStartedDentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedDentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
