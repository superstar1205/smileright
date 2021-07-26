import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudBgComponent } from './cloudBg.component';

describe('CloudBgComponent', () => {
  let component: CloudBgComponent;
  let fixture: ComponentFixture<CloudBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
