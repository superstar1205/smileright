import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { LeadFormSlimComponent } from './lead-form-slim.component';

describe('leadFormSlim', () => {
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
      LeadFormSlimComponent
    ]
  }));

  // it('should log ngOnInit', inject([LeadFormSlimComponent], (leadFormSlim: LeadFormSlimComponent) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   leadFormSlim.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
