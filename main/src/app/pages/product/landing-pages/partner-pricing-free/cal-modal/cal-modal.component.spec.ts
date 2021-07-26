import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalModalComponent } from './cal-modal.component';

describe('CalModalComponent', () => {
  let component: CalModalComponent;
  let fixture: ComponentFixture<CalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
