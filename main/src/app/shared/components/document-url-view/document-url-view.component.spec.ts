import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUrlViewComponent } from './document-url-view.component';

describe('DocumentUrlViewComponent', () => {
  let component: DocumentUrlViewComponent;
  let fixture: ComponentFixture<DocumentUrlViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentUrlViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUrlViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
