import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearPathComponent } from './clear-path.component';

describe('ClearPathComponent', () => {
  let component: ClearPathComponent;
  let fixture: ComponentFixture<ClearPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
