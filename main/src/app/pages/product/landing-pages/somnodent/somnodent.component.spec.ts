import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { SomnodentComponent } from './somnodent.component';

describe('Somnodent', () => {
  /**
   * Provide our implementations or mocks to the dependency injector
   */
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      /**
       * Provide a better mock.
       */
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      SomnodentComponent
    ]
  }));

  // it('should log ngOnInit', inject([SomnodentComponent], (Somnodent: SomnodentComponent) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   Somnodent.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
