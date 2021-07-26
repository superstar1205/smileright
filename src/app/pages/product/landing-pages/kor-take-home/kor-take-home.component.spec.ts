import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { KorTakeHomeComponent } from './kor-take-home.component';


describe('KorTakeHomeComponent', () => {
  let component: KorTakeHomeComponent;
  let fixture: ComponentFixture<KorTakeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorTakeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorTakeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
