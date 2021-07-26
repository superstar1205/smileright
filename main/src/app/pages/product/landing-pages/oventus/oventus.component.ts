import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: "app-oventus",
  styleUrls: ["./oventus.component.css"],
  templateUrl: "./oventus.component.html",
  animations: [
    trigger('ngIfAnimation', [
      transition('void => *', [
        query('.animate', style({ opacity: 0 }), { optional: true }),
        query('.animate', stagger('100ms', [
          animate('0.4s ease-out', keyframes([
            style({  offset: 0, height: 0 }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({  offset: 1.0, height: '*' }),
          ]))]), { optional: true }),
      ]),
      transition('* => void', [
        query('.animate', style({ opacity: 1 }), { optional: true }),
        query('.animate', stagger('100ms', [
          animate('0.4s ease-in', keyframes([
            style({ offset: 0, height: '*' }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({  offset: 1.0, height: 0 }),
          ]))]), { optional: true }),
      ])
    ])
  ]

})
export class OventusComponent implements OnInit {


  @Input()
  patient;


  @Input()
  campaign;

  @Input()
  merchant

  @Input()
  userData;


  @Input()
  minAmount;

  @Input()
  amount;

  @Input()
  code;
  
  @Output()
  apply: EventEmitter<any> = new EventEmitter()


  public player;

  standAlone = true;

  constructor() { }

  public mockProductModal() {
    console.log('This launches the product modal');
  }

  // 

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

