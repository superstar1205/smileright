import { Component, OnInit, Input, Output, EventEmitter, Optional, Inject } from '@angular/core';

import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilsClass } from 'app/shared/components/classes/utils';
import { AppState } from 'app/app.service';

@Component({
  selector: 'app-merchant-trading-hours-view',
  templateUrl: './merchant-trading-hours-view.component.html',
  styleUrls: ['./merchant-trading-hours-view.component.css'],
  animations: [
    trigger('ngIfAnimation', [
      transition('void => *', [
        query('.animate', style({ opacity: 0 }), { optional: true }),
        query('.animate', stagger('100ms', [
          animate('0.15s ease-in-out', keyframes([
            style({ opacity: 0, transform: 'translateY(-10%)', offset: 0, height: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0, height: '*' }),
          ]))]), { optional: true }),
      ]),
      transition('* => void', [
        query('.animate', style({ opacity: 1 }), { optional: true }),
        query('.animate', stagger('100ms', [
          animate('0.15s ease-in-out', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0, height: '*' }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 0, transform: 'translateY(5%)', offset: 1.0, height: 0 }),
          ]))]), { optional: true }),
      ])
    ])
  ]
})
export class MerchantTradingHoursViewComponent implements OnInit {

  @Input() merchantID="544A66F235404B6180493BE2EEC1648B";



  @Output() close = new EventEmitter();
  isModal = false;
  tradingHours;
  merchantTimezone;

  util = new UtilsClass;
  constructor(
    private appState: AppState,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {
    if (data) {
      this.merchantID = data;

      this.isModal = true;
    }
  }

  ngOnInit() {

    if (this.merchantID) {
      this.appState.getMerchantDetails(this.merchantID).subscribe(r => {
        if (r && r['TimeZoneCode']) {
          this.merchantTimezone = r['TimeZoneCode'];
        }


        let payload = {
          merchantID: this.merchantID
        }

        this.appState.getTradingHourListGlobal(payload).subscribe(res2 => {

          if (res2 && res2.length > 0) {
            if (!this.merchantTimezone) {
              this.merchantTimezone = res2[0]['TimeZone'];
            }
            let order = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6, Sunday: 7 };

            this.tradingHours = res2.sort(function (a, b) {
              return order[a['DayOfWeek.Label.Singular']] - order[b['DayOfWeek.Label.Singular']]
            });
          }
        });
      })
    }
  }

  closeEvent() {
    this.close.emit(true);
  }

}
