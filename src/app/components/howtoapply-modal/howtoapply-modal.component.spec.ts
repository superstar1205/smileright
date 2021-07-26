import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';
import { HowToApplyModalComponent } from './howtoapply-modal.component';

describe('AccessModal', () => {
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
      HowToApplyModalComponent
    ]
  }));

  it('should log ngOnInit', inject([HowToApplyModalComponent], (accessmodal: HowToApplyModalComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    accessmodal.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
