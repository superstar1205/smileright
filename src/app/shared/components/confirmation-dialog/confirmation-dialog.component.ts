import { Component, OnInit, Input, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  @Input()
  icon = "delete";

  @Input()
  title = "Are you sure?";

  @Input()
  message = "<p>You are about to remove this item.</p> ";

  @Input()
  noLabel = "No";

  @Input()
  yesLabel = "Yes, remove";



  onConfirm = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

    if (data) {

      if (data.icon) {
        this.icon = data.icon;
      }

      if (data.title) {
        this.title = data.title;
      }

      if (data.message) {
        this.message = data.message;
      }

      if (data.noLabel) {
        this.noLabel = data.noLabel;
      }

      if (data.yesLabel) {
        this.yesLabel = data.yesLabel;
      }

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
