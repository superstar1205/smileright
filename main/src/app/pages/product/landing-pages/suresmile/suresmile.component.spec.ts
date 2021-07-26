import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { SureSmileComponent } from './suresmile.component';

describe('suresmile', () => {
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
      SureSmileComponent
    ]
  }));

  // it('should log ngOnInit', inject([SureSmileComponent], (suresmile: SureSmileComponent) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   suresmile.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
