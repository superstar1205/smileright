import { Component, OnInit, EventEmitter, Input, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ConfirmDialogSingleButton } from "../classes/confirm-dialog-single-button";

@Component({
  selector: "app-confirm-dialog-single-button",
  templateUrl: "./confirm-dialog-single-button.component.html",
  styleUrls: ["./confirm-dialog-single-button.component.css"]
})
export class ConfirmDialogSingleButtonComponent implements OnInit {
  static panelClass = 'app-confirm-dialog-single-button-panel';
  @Input()
  confirmDialog = new ConfirmDialogSingleButton(
    "delete",
    "Are you sure?",
    "<p>You are about to remove this item.</p> ",
    "yes"
  );

  onConfirm = new EventEmitter();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.confirmDialog = data;
    }
  }

  ngOnInit() { }

  onClick() {
    this.onConfirm.emit(true);
  }

}
