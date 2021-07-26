import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MapMultipleViewComponent } from './map-multiple-view.component';

describe('MapMultipleViewComponent', () => {
  let component: MapMultipleViewComponent;
  let fixture: ComponentFixture<MapMultipleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMultipleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMultipleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
