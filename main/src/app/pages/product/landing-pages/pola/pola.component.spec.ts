import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolaComponent } from './pola.component';

describe('PolaComponent', () => {
  let component: PolaComponent;
  let fixture: ComponentFixture<PolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
