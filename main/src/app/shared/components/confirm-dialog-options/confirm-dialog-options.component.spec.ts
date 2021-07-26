import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogOptionsComponent } from './confirm-dialog-options.component';

describe('ConfirmDialogOptionsComponent', () => {
  let component: ConfirmDialogOptionsComponent;
  let fixture: ComponentFixture<ConfirmDialogOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDialogOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
