import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInputComponent } from './contact-input.component';

describe('ContactInputComponent', () => {
  let component: ContactInputComponent;
  let fixture: ComponentFixture<ContactInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
