import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitableProductCompactListComponent } from './suitable-product-compact-list.component';

describe('SuitableProductCompactListComponent', () => {
  let component: SuitableProductCompactListComponent;
  let fixture: ComponentFixture<SuitableProductCompactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitableProductCompactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitableProductCompactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
