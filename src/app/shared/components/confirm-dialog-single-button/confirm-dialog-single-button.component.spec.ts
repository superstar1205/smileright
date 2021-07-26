import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmDialogSingleButtonComponent } from './confirm-dialog-single-button.component';


describe('ConfirmDialogSingleButtonComponent', () => {
  let component: ConfirmDialogSingleButtonComponent;
  let fixture: ComponentFixture<ConfirmDialogSingleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDialogSingleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogSingleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
