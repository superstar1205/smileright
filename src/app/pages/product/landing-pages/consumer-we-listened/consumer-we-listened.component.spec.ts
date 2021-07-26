import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerWeListenedComponent } from './consumer-we-listened.component';

describe('ConsumerWeListenedComponent', () => {
  let component: ConsumerWeListenedComponent;
  let fixture: ComponentFixture<ConsumerWeListenedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerWeListenedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerWeListenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
