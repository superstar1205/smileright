import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBgComponent } from './blueBg.component';

describe('BlueBgComponent', () => {
  let component: BlueBgComponent;
  let fixture: ComponentFixture<BlueBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
