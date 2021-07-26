import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmanComponent } from './inman.component';

describe('InmanComponent', () => {
  let component: InmanComponent;
  let fixture: ComponentFixture<InmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
