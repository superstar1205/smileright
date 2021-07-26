import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DurationSliderInputComponent } from './duration-slider-input.component';

describe('DurationSliderInputComponent', () => {
  let component: DurationSliderInputComponent;
  let fixture: ComponentFixture<DurationSliderInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationSliderInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationSliderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
