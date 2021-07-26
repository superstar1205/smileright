import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { SmileStylerComponent } from './smilestyler.component';

describe('smilestyler', () => {
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
      SmileStylerComponent
    ]
  }));

  // it('should log ngOnInit', inject([SmileStylerComponent], (smilestyler: SmileStylerComponent) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   smilestyler.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
