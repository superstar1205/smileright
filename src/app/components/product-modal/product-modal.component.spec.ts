import { ActivatedRoute, Data } from '@angular/router';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { ProductModalComponent } from './product-modal.component';

describe('Products', () => {
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
      ProductModalComponent
    ]
  }));

  it('should log ngOnInit', inject([ProductModalComponent], (products: ProductModalComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    products.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
