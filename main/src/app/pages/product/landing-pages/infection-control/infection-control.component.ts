import { Component, OnInit, Input, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { isPlatformBrowser } from '@angular/common';
import { fadeInAnimation } from 'app/_animations';


@Component({
  selector: 'infection-control',
  styleUrls: ['./infection-control.component.css'],
  templateUrl: './infection-control.component.html',
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class InfectionControlComponent implements OnInit {

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

  @Input()
  code;

  public ngOnInit() {
    if (!this.merchant) {

      this.merchant = {
        TradingAs: "Merchant"
      };

    }
  }




}
