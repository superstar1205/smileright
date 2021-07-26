import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogMessageComponent } from './confirm-dialog-message.component';

describe('ConfirmDialogMessageComponent', () => {
  let component: ConfirmDialogMessageComponent;
  let fixture: ComponentFixture<ConfirmDialogMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDialogMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
