import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MapCreateComponent } from './map-create.component';

describe('MapCreateComponent', () => {
  let component: MapCreateComponent;
  let fixture: ComponentFixture<MapCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
