import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: "app-duration-slider-input",
  templateUrl: "./duration-slider-input.component.html",
  styleUrls: ["./duration-slider-input.component.css"]
})
export class DurationSliderInputComponent implements OnInit {

  minAmount;
  maxAmount;
  // Added to allow compiler to run

  @Input() period = 12;
  @Input() minPeriod = 1;
  @Input() maxPeriod = 60;
  @Input() frequency = 4;
  @Output() selectPeriod = new EventEmitter();

  @Output() selectPeriodChangeInput = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  selectRepayPeriod(evt) {
    if (evt.value) {
      this.period = evt.value;
      this.selectPeriod.emit(this.period);
    }
  }

  ngOnChanges(changes: SimpleChanges) {

    if (this.period) {
      this.selectPeriodChangeInput.emit(this.period);
    }

  }

  RepayPeriod() {
    if (this.period) {
      this.selectPeriod.emit(this.period);
    }


  }



  durationLabel() {
    let value = this.frequency;
    if (value == 1) {
      return "Weekly"
    }

    if (value == 2) {
      return "Fortnightly"
    }

    if (value == 4) {
      return "Monthly"
    }
  }



  timeLabel() {

    let value = this.frequency;

    if (value == 1) {
      return "Week(s)"
    }

    if (value == 2) {
      return "Fortnight(s)"
    }

    if (value == 4) {
      return "Month(s)"
    }
  }
}