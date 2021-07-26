import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { LanapProtocolComponent } from './lanap-protocol.component';

describe('LanapProtocol', () => {
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
      LanapProtocolComponent
    ]
  }));

  // it('should log ngOnInit', inject([LanapProtocolComponent], (LanapProtocol: LanapProtocolComponent) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   LanapProtocol.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
