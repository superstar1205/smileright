import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerSmileRightComponent } from './consumer-smile-right.component';

describe('ConsumerSmileRightComponent', () => {
  let component: ConsumerSmileRightComponent;
  let fixture: ComponentFixture<ConsumerSmileRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerSmileRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerSmileRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
