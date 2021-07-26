import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandModalComponent } from './stand-modal.component';

describe('StandModalComponent', () => {
  let component: StandModalComponent;
  let fixture: ComponentFixture<StandModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
