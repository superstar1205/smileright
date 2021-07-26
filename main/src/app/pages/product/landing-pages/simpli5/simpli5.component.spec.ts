import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Simpli5Component } from './simpli5.component';

describe('Simpli5Component', () => {
  let component: Simpli5Component;
  let fixture: ComponentFixture<Simpli5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simpli5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simpli5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
