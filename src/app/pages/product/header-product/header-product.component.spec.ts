import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { HeaderProductComponent } from './header-product.component';

describe('Footer', () => {
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
      HeaderProductComponent
    ]
  }));

  // it('should log ngOnInit', inject([HeaderProductComponent], (headerProduct: HeaderProductComponent) => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   headerProduct.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // }));

});
