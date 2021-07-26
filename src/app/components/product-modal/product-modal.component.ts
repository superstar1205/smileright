import { Component, OnInit, Input, EventEmitter, Optional, Inject, Output } from "@angular/core";
import { fadeInAnimation } from "../../_animations/index";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppState } from "../../app.service";
import { UtilsClass } from "app/shared/components/classes/utils";

@Component({
  selector: "app-product-modal",
  styleUrls: ["./product-modal.component.css"],
  templateUrl: "./product-modal.component.html",
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { "[@fadeInAnimation]": "" }
})
export class ProductModalComponent implements OnInit {

  util = new UtilsClass();

  @Input() product;
  @Input() productID="111";

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  step;
  descriptions = [];

  constructor(
    private appstate: AppState,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {
    if (typeof data == "object")
      this.product = data;

    else
      this.productID = data;
  }

  public ngOnInit() {
    if (this.productID) {
      this.appstate.getProdDetails(this.productID).subscribe(res => {
        this.product = res;
        this.descriptions = this.product['Description'].split('- ').slice(3);
      });
    }
    else {
      this.appstate.getProdDetails(this.product.ID).subscribe(res => {
        this.product = res;

      });
    }
  }
  private asyncDataWithWebpack() {
    /**
     * you can also async load mock data with 'es6-promise-loader'
     * you would do this if you don't want the mock-data bundled
     * remember that 'es6-promise-loader' is a promise
     */
    // setTimeout(() => {
    //   System.import("../../../assets/mock-data/mock-data.json").then((json) => {
    //     console.log('async mockData', json);
    //     this.localState = json;
    //   });
    // });
  }
  formatTermsAndConditions(text) {
    let formattedText = "";

    formattedText = this.util.formatTermsAndConditions(text);
    return formattedText;
  }


  closeEvent() {
    this.close.emit(true)
  }

  setStep(index) {
    this.step = index;
  }
}
