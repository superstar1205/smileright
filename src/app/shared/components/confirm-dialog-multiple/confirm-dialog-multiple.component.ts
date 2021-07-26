import { Component, OnInit, EventEmitter, Input, Inject, Output } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-confirm-dialog-multiple",
  templateUrl: "./confirm-dialog-multiple.component.html",
  styleUrls: ["./confirm-dialog-multiple.component.css"]
})
export class ConfirmDialogMultipleComponent implements OnInit {
  static panelClass = 'app-confirm-dialog-multiple-panel';
  @Input()
  icon = "delete";

  @Input()
  title = "Are you sure’";

  @Input()
  description = "";

  @Input()
  yesLabel = "Yes,";



  @Input()
  noLabel = "No";

  @Input()
  yesSecondLabel = "Yes,";

  @Input()
  informationLabel = "More Details";


  @Output()
  confirmation: EventEmitter<any> = new EventEmitter();

  @Output()
  confirmationSecond: EventEmitter<any> = new EventEmitter();


  @Output()
  decline: EventEmitter<any> = new EventEmitter();

  @Output()
  information: EventEmitter<any> = new EventEmitter();


  isSecondConfirmation = true;
  isInformation = true;

  isNo = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {

      if (data.icon) {
        this.icon = data.icon;
      }

      if (data.title) {
        this.title = data.title;
      }


      if (data.description) {
        this.description = data.description;
      }
      if (data.yesLabel) {
        this.yesLabel = data.yesLabel;
      }
      if (data.noLabel) {
        this.noLabel = data.noLabel;
      }
      if (data.yesSecondLabel) {
        this.yesSecondLabel = data.yesSecondLabel;
      }
      if (data.informationLabel) {
        this.informationLabel = data.informationLabel;

      }

      if (data.isSecondConfirmation!=null) {
        this.isSecondConfirmation = data.isSecondConfirmation;

      }

      if (data.isInformation!=null) {
        this.isInformation = data.isInformation;

      }

      if (data.isNo!=null) {
        this.isNo = data.isNo;

      }





    }
  }

  ngOnInit() { }



  onYes() {

    this.confirmation.emit(true);


  }

  onYesSecond() {

    this.confirmationSecond.emit(true);


  }

  onInformation() {
    this.information.emit(true);
  }

  onNo() {
    this.decline.emit(false);
  }
}
