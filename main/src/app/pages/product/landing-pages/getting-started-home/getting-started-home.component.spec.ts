import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedHomeComponent } from './getting-started-home.component';

describe('GettingStartedHomeComponent', () => {
  let component: GettingStartedHomeComponent;
  let fixture: ComponentFixture<GettingStartedHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingStartedHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
