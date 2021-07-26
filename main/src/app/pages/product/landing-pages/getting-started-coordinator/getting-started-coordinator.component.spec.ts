import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedCoordinatorComponent } from './getting-started-coordinator.component';

describe('GettingStartedCoordinatorComponent', () => {
  let component: GettingStartedCoordinatorComponent;
  let fixture: ComponentFixture<GettingStartedCoordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingStartedCoordinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
