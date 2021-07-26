import { Component, OnInit, Input, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { isPlatformBrowser } from '@angular/common';
import { fadeInAnimation } from 'app/_animations';
@Component({
  selector: 'coronavirus-dos-and-donts',
  styleUrls: ['./coronavirus-dos-and-donts.component.css'],
  templateUrl: './coronavirus-dos-and-donts.component.html',
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class CoronaDosDontsComponent implements OnInit {

  public localState: any;
  constructor(@Inject(PLATFORM_ID) private platformId,
    public route: ActivatedRoute
  ) { }


  @Input()
  patient;


  @Input()
  campaign;


  @Input()
  merchant


  @Input()
  userData = null;



  public ngOnInit() {
    if (!this.merchant) {

      this.merchant = {
        TradingAs: "Merchant"
      };

    }
  }




}
