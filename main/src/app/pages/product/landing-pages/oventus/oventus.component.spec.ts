import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { OventusComponent } from './oventus.component';

describe('Oventus', () => {
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
      OventusComponent
    ]
  }));

  // it('should log ngOnInit', inject([OventusComponent], (Oventus: OventusComponent) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   Oventus.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
