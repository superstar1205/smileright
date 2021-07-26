import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerCommunicationIntroductionComponent } from './consumer-communication-introduction.component';

describe('ConsumerCommunicationIntroductionComponent', () => {
  let component: ConsumerCommunicationIntroductionComponent;
  let fixture: ComponentFixture<ConsumerCommunicationIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerCommunicationIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerCommunicationIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
