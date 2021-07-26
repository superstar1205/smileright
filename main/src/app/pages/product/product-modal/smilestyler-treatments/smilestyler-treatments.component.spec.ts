import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { SmileStylerTreatmentsComponent } from './smilestyler-treatments.component';

describe('smilestylertreatments', () => {
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
      SmileStylerTreatmentsComponent
    ]
  }));

  // it('should log ngOnInit', inject([SmileStylerTreatmentsComponent], (smilestylertreatments: SmileStylerTreatmentsComponent) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   smilestylertreatments.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
