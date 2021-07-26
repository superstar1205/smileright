import {Component, OnInit, EventEmitter, Output, Input, SimpleChanges, Inject, PLATFORM_ID} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from 'app/app.service';
import { UtilsClass } from 'app/shared/components/classes/utils';
import { NotifyAppCompnent } from 'app/shared/components/classes/notify-app-compnent';
import { ProductCalculatorComponent } from 'app/components/product-calculator/product-calculator.component';
import { trigger, style, transition, animate, keyframes, query, stagger, animateChild } from '@angular/animations';

import { AppComponent } from 'app/app.component';
import { HowToApplyModalComponent } from 'app/components/howtoapply-modal';
import { ProductModalComponent } from 'app/components/product-modal';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-suitable-product-compact-list',
  templateUrl: './suitable-product-compact-list.component.html',
  styleUrls: ['./suitable-product-compact-list.component.css'],
  animations: [

    trigger('options',  [
      // cubic-bezier for a tiny bouncing feel
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s',
          style({ opacity: 1 }))
      ])
    ])
  ]
})
export class SuitableProductCompactListComponent implements OnInit {

  @Input() amount: number;

  @Input() groupCode;

  @Input() frequency = 1;

  @Input() isCold = false;
  @Input()
  canSelect = false


  @Input() merchantKey = "544A66F235404B6180493BE2EEC1648B";

  @Input()
  proceedLabel = "Select & Apply"
  @Input() displaySimulator = true;
  @Output() select = new EventEmitter();

  @Output() disableBackButton = new EventEmitter();

  options = [];
  product: any;
  termsAndConditions = [];
  terms: any;
  utils = new UtilsClass();


  constructor(private appService: AppState, private dialog: MatDialog,
              @Inject(PLATFORM_ID) private platformId) { }



  ngOnInit() {
    const payload = {
      amount: this.amount,
      frequency: this.frequency,
      merchantKey: this.merchantKey,
      fields: "ID,Label.Marketing,Label.Web,BasedOnMaxDuration.Repayments.Weekly,SubType,Description",
      groupCode: this.groupCode || null,
      orderBy: ''
    };

    this.appService
      .getSuitableProduct(payload, this.isCold)
      .subscribe(res => {
        this.options = res;

        if (this.options.length < 0) {

          NotifyAppCompnent.displayToastr(
            "warning",
            "No Products",
            "We do not have any products for the amount you've chosen. Please contact us for more details."
          );
        }


        else if (this.options.length == 1) {

          this.selectProduct(this.options[0]);
          this.disableBack();

          NotifyAppCompnent.displayToastr(
            "info",
            "Product Calculator",
            "Calculate your potential repayments"
          );
        }
      });
  }

  public onHowToApply() {
    const ref = AppComponent.dialog.open(HowToApplyModalComponent, {
      width: "700px"
    });

  }

  ngOnChanges(changes: SimpleChanges) {

    if (
      (changes.amount && !changes.amount.firstChange) ||
      (changes.groupCode && !changes.groupCode.firstChange)

    ) {

      const payload = {
        amount: this.amount,
        merchantKey: this.merchantKey,
        fields: "ID,Label.Marketing,Label.Web,BasedOnMaxDuration.Repayments.Weekly,SubType,Description",
        groupCode: this.groupCode || null,
        orderBy: ''
      };
      this.appService
        .getSuitableProduct(payload, this.isCold)
        .subscribe(res => {
          this.options = res;
          if (this.options.length < 0) {
            NotifyAppCompnent.displayToastr(
              "warning",
              "No Products",
              "We do not have any products for the amount you've chosen, Please contact us for more details."
            );
          }
        });
    }

  }

  step = 0;
  indexArray = [];

  setStep(index: number, option: any) {
    this.step = index;
    let termsFound: any;
    this.termsAndConditions.forEach(item => {
      if (item.step == this.step) {
        termsFound = item;
      }
    });

    if (option && !termsFound) {
      this.appService.getProdDetails(option.ID).subscribe(res => {
        this.product = res;
        const terms = this.utils.formatTermsAndConditions(
          this.product.TermsAndConditions
        );
        this.termsAndConditions.push({
          step: this.step,
          termsAndConditions: terms
        });
        this.indexArray.push(this.step);
        this.terms = terms;
      });
    } else if (option) {
      this.terms = termsFound.termsAndConditions;
    }
  }

  smileRightProductsPage() {
    if (isPlatformBrowser(this.platformId)) {
      // window.open('https://smileright.com.au/consumer/(page:products)', '_blank');
    }
  }

  selectProduct(product) {
    this.select.emit(product)

  }

  disableBack(){
    this.disableBackButton.emit(true)
  }

  simulateProduct(product) {


    let ref = this.dialog.open(ProductCalculatorComponent, {
      data: {
        dentalInfo: true,
        moreInfo: false,
        ProductID: product.ID,
        dynamicAmount: false,
        amount: this.amount,
        isPatientContribution: false,
        textVisible: false
      },
      width: "850px",
      panelClass: "noAnimation"
    });

    ref.componentInstance.close.subscribe((res) => {

      ref.close();
    })

  }

  public openProductDialog(product) {
    const ref = AppComponent.dialog.open(ProductModalComponent, {
      data: product,
      width: "700px"
    });

  }

  selectedIdx = -1;

  clickFlip(index): void {
    this.selectedIdx = index;
  }

  flipClose(index): void {
    this.selectedIdx = -1;
  }

}
