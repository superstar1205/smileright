import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';
import { HowToApplyComponent } from './how-to-apply.component';

describe('HowToApply', () => {
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
      HowToApplyComponent
    ]
  }));

  // it('should log ngOnInit', inject([HowToApplyComponent], (HowToApply: HowToApplyComponent) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   HowToApply.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
