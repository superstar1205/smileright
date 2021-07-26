import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvisalignComponent } from './invisalign.component';

describe('InvisalignComponent', () => {
  let component: InvisalignComponent;
  let fixture: ComponentFixture<InvisalignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvisalignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvisalignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
