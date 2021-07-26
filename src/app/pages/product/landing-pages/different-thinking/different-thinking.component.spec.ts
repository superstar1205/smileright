import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { DifferentThinkingComponent } from './different-thinking.component';

describe('DifferentThinkingComponent', () => {
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
      DifferentThinkingComponent
    ]
  }));

  // it('should log ngOnInit', inject([DifferentThinkingComponent], (LanapProtocol: DifferentThinkingComponent) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   LanapProtocol.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
