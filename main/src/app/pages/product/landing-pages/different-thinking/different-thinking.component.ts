import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { AppState } from "app/app.service";

@Component({
  selector: "app-different-thinking",
  styleUrls: ["./different-thinking.component.css"],
  templateUrl: "./different-thinking.component.html",

})
export class DifferentThinkingComponent implements OnInit {


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
  code;

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

