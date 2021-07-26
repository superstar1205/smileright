import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngelAlignerComponent } from './angel-aligner.component';

describe('AngelAlignerComponent', () => {
  let component: AngelAlignerComponent;
  let fixture: ComponentFixture<AngelAlignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngelAlignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngelAlignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
