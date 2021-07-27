import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntropageComponentComponent } from './intropage-component.component';

describe('IntropageComponentComponent', () => {
  let component: IntropageComponentComponent;
  let fixture: ComponentFixture<IntropageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntropageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntropageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
