import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearCorrectComponent } from './clear-correct.component';

describe('ClearCorrectComponent', () => {
  let component: ClearCorrectComponent;
  let fixture: ComponentFixture<ClearCorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearCorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
