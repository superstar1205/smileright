import { Component, EventEmitter, Inject, OnInit, Optional, Output } from '@angular/core';
import { AppState } from '../../app.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: "app-consumer-product-calculator",
  templateUrl: "./consumer-product-calculator.component.html",
  styleUrls: ["./consumer-product-calculator.component.css"],
  animations: [
    trigger('ngIfAnimation', [
      transition('void => *', [
        query('.animate', style({ opacity: 0 }), { optional: true }),
        query('.animate', stagger('100ms', [
          animate('0.8s ease-out', keyframes([
            style({ opacity: 0, offset: 0, height: 0 }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 1, offset: 1.0, height: '*' }),
          ]))]), { optional: true }),
      ]),
      transition('* => void', [
        query('.animate', style({ opacity: 1 }), { optional: true }),
        query('.animate', stagger('100ms', [
          animate('0.8s ease-in', keyframes([
            style({ opacity: 1, offset: 0, height: '*' }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 0, offset: 1.0, height: 0 }),
          ]))]), { optional: true }),
      ])
    ]),
    trigger('dropIn', [
      transition('void => *', [
        query('.animate', style({ opacity: 0 }), { optional: true }),
        query('.animate', stagger('100ms', [
          animate('0.8s ease-out', keyframes([
            style({ opacity: 0, offset: 0, height: 0 }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 1, offset: 1.0, height: '*' }),
          ]))]), { optional: true }),
      ])
    ])
  ]
})
export class ConsumerProductCalculatorComponent implements OnInit {
  productGroupList;
  productGroupType = [];
  amount = 2100;
  duration;
  merchantID = "F6164E0E29C94FECB264AD2A1B828644";
  groupCode;
  selected;
  selectedProductType = 'GPF';

  isModal=false; 
  @Output() close = new EventEmitter();
  selectedPeriods = [
    { value: '0-month', viewValue: 'month?' },
    { value: '1-fnight', viewValue: 'fortnight?' },
    { value: '2-week', viewValue: 'week?' },
    { value: '3-day', viewValue: 'day?' }
  ];
  public userSelectedPeriods = this.selectedPeriods[0].value;

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private appState: AppState
  ) {

    if (data && data.merchantID) {

      this.merchantID = data.merchantID
      this.isModal=true;
    }
  }

  ngOnInit() {
    let payload = {
      isFinance: true,
      orderBy: "Group.Code"
    }
    this.appState.getProductGroupList(payload).subscribe(res => {
      this.productGroupList = res;
      res.map((item) => {
        let value = {
          code: "",
          label: ""
        };
        value.code = item["Group.Code"];
        value.label = item["Group.Label"];
        this.productGroupType.push(value)
      })
    })
  }

  getAmount(e) {
    this.amount = e;
  }

  getDuration(e) {
    this.duration = e;
  }



  onChange(e) {
    if (e.value == "none") {
      this.groupCode = "";
    }
    else {
      this.groupCode = e.value;
    }
  }


  trimGroupLabel(label) {
    let a = label.split('-');
    return a[0];
  }

  closeEvent() {
    this.close.emit(true);
  }
}
