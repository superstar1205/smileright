import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistGeneralInfoComponent } from './dentist-general-info.component';

describe('DentistGeneralInfoComponent', () => {
  let component: DentistGeneralInfoComponent;
  let fixture: ComponentFixture<DentistGeneralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistGeneralInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
