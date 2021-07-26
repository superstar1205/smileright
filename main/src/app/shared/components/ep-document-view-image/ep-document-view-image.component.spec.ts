import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpDocumentViewImageComponent } from './ep-document-view-image.component';

describe('EpDocumentViewImageComponent', () => {
  let component: EpDocumentViewImageComponent;
  let fixture: ComponentFixture<EpDocumentViewImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpDocumentViewImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpDocumentViewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
