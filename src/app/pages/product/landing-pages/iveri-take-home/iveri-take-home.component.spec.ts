import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { IveriTakeHomeComponent } from './iveri-take-home.component';


describe('IveriTakeHomeComponent', () => {
  let component: IveriTakeHomeComponent;
  let fixture: ComponentFixture<IveriTakeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IveriTakeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IveriTakeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
