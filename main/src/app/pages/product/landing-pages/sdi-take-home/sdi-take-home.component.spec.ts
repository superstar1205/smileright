import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdiTakeHomeComponent } from './sdi-take-home.component';

describe('SdiTakeHomeComponent', () => {
  let component: SdiTakeHomeComponent;
  let fixture: ComponentFixture<SdiTakeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdiTakeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdiTakeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
