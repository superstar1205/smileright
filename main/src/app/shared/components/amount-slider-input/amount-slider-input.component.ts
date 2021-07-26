import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: "app-amount-slider-input",
  templateUrl: "./amount-slider-input.component.html",
  styleUrls: ["./amount-slider-input.component.css"]
})
export class AmountSliderInputComponent implements OnInit {

  @Input() amount = 2100;
  @Input() minAmount = 100;
  @Input() maxAmount = 50000;

  @Input() showProductStraightAway = false
  @Output() selectAmount = new EventEmitter();

  @Input() step = 100 ;
  @Input() label = "Loan Amount";

  @Output() selectPeriodChangeInput = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.showProductStraightAway == true) {
      this.selectAmount.emit(this.amount);
    }
   }

  changeAmountValue(e) {
    // if (this.amount) {
    //   this.selectAmount.emit(this.amount);
    // }
    this.amount = e;
    this.selectAmount.emit(this.amount)
  }


  ngOnChanges(changes: SimpleChanges) {

    this.selectPeriodChangeInput.emit(this.amount);
  }


  updateAmountValue(evt) {



    if (evt.value) {
      this.amount = evt.value;
      this.selectAmount.emit(this.amount);


    }
  }
}
