import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { AppState } from "app/app.service";

@Component({
  selector: "app-lanap-protocol",
  styleUrls: ["./lanap-protocol.component.css"],
  templateUrl: "./lanap-protocol.component.html",

})
export class LanapProtocolComponent implements OnInit {


  @Input()
  patient;


  @Input()
  campaign;

  @Input()
  merchant

  @Input()
  userData;

  @Input()
  code;

  @Input()
  minAmount;

  @Input()
  amount;

  @Output()
  apply: EventEmitter<any> = new EventEmitter()

  public player;

  standAlone = true;

  constructor(private appService: AppState) { }

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

