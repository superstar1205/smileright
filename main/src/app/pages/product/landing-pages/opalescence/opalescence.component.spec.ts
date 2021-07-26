import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpalescenceComponent } from './opalescence.component';

describe('OpalescenceComponent', () => {
  let component: OpalescenceComponent;
  let fixture: ComponentFixture<OpalescenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpalescenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpalescenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
