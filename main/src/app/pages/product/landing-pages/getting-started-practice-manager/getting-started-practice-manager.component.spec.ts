import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedPracticeManagerComponent } from './getting-started-practice-manager.component';

describe('GettingStartedPracticeManagerComponent', () => {
  let component: GettingStartedPracticeManagerComponent;
  let fixture: ComponentFixture<GettingStartedPracticeManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingStartedPracticeManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedPracticeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
