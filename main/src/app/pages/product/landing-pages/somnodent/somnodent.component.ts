import {Component, OnInit, Input, EventEmitter, Output, Inject, PLATFORM_ID} from '@angular/core';
import { AppState } from "app/app.service";
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: "app-somnodent",
  styleUrls: ["./somnodent.component.css"],
  templateUrl: "./somnodent.component.html",

})
export class SomnodentComponent implements OnInit {



  @Input()
  patient;


  @Input()
  campaign;

  @Input()
  merchant


  @Input()
  userData;

  @Input()
  amount;

  @Input()
  minAmount;

  @Input()
  code;
  @Output()
  apply: EventEmitter<any> = new EventEmitter()

  public player;

  standAlone = true;

  constructor(private appService: AppState,
              @Inject(PLATFORM_ID) private platformId) {


  }

  public readStories() {
    if (isPlatformBrowser(this.platformId)) {
      window.open('http://www.ivoclarvivadentusa.com/smiletothemax/success-stories/');
    }
  }
  public ngOnInit() {

    if (!this.merchant) {

      this.merchant = {
        TradingAs: "Merchant"
      };

    }


  }

  applyEvent() {
    this.apply.emit(true);
  }


}
