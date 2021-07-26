import { Component, OnInit, EventEmitter, Input, Inject, Output } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ConfirmOptionDialog } from "../classes/confirm-option-dialog";


@Component({
  selector: "app-confirm-dialog-options",
  templateUrl: "./confirm-dialog-options.component.html",
  styleUrls: ["./confirm-dialog-options.component.css"]
})
export class ConfirmDialogOptionsComponent implements OnInit {
  static panelClass = 'app-confirm-dialog-options-panel';
  @Output()
  done: EventEmitter<any> = new EventEmitter();

  choice: any;
  confirmOptionDialog = new ConfirmOptionDialog(
    "delete",
    "Are you sure?",
    "<p>You are about to remove this item.</p> ",
    "<p>Please select an option</p>",
    "No",
    "Yes, remove"
  );

  options = [
    { value: "P_L1", viewValue: "Incorrect Details" },
    { value: 'P_L2', viewValue: 'Changed Treatment' },
    { value: 'P_L3', viewValue: 'Wishes to not proceed' },
  ];

  onConfirm = new EventEmitter();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.confirmOptionDialog = data.confirmOptionDialog;
    }
  }

  ngOnInit() { }
  onYes() {
    this.onConfirm.emit(true);
  }

  onNo() {
    this.onConfirm.emit(false);
  }
}
