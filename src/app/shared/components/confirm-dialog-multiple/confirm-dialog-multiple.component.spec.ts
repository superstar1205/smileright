import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogMultipleComponent } from './confirm-dialog-multiple.component';

describe('ConfirmDialogMultipleComponent', () => {
  let component: ConfirmDialogMultipleComponent;
  let fixture: ComponentFixture<ConfirmDialogMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDialogMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
