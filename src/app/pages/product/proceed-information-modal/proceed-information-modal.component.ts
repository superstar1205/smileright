import { Component, OnInit, Input, EventEmitter, Output, Optional, Inject } from "@angular/core";
import { AppState } from "app/app.service";
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: "app-proceed-information-modal",
  styleUrls: ["./proceed-information-modal.component.css"],
  templateUrl: "./proceed-information-modal.component.html",

})
export class ProceedInformationModalComponent implements OnInit {


  @Input()
  patient;

  @Output()
  apply: EventEmitter<any> = new EventEmitter();

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  @Input()
  firstName;

  @Input()
  amount;

  constructor(
    @Optional()
  @Inject(MAT_DIALOG_DATA)
  data,private appService: AppState) { 

    if (data) {
      if (data.firstName) {
        this.firstName = data.firstName
      }
      if (data.amount) {
        this.amount = data.amount
      }

    }

  }

  public ngOnInit() {
  }

  proceedEvent() {
    this.apply.emit(true);
  }

  cancelEvent() {
    this.close.emit(true);
  }

}

