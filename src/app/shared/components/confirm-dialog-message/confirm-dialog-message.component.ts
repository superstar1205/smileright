import { Component, OnInit, EventEmitter, Input, Inject, Output } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-confirm-dialog-message",
  templateUrl: "./confirm-dialog-message.component.html",
  styleUrls: ["./confirm-dialog-message.component.css"]
})
export class ConfirmDialogMessageComponent implements OnInit {
  static panelClass = 'app-confirm-dialog-message-panel';
  @Input()
  icon = "info";

  @Input()
  title = "Are you sure?";



  @Input()
  description = "<p>You are about to remove this item.</p> ";

  @Input()
  text;
  @Input()
  textLabel = 'Title';

  @Input()
  message;

  @Input()
  date = new Date();

  @Input()
  dateTime = new Date();


  @Input()
  yesLabel = "No";


  @Input()
  noLabel = "Yes";

  @Input()
  messageLabel = "Please enter your  message";


  @Input()
  dateLabel = "Date Label";


  @Input()
  dateTimeLabel = "Date Time Label";


  @Input()
  minDate = "today";


  @Input()
  isTextArea = true;

  @Input()
  isTextInput = false;

  @Input()
  isDateInput = false;


  @Input()
  isDateRequired = false;


  @Input()
  isDateTimeInput = false;


  @Input()
  isDateTimeRequired = false;


  @Input()
  isTextAreaRequired = true;

  @Input()
  isTextInputRequired = false;

  isModal = false;



  @Output()
  closeModal = new EventEmitter();

  onConfirm = new EventEmitter();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {

      if (data.icon) {
        this.icon = data.icon;
      }

      if (data.title) {
        this.title = data.title;
      }

      if (data.dateLabel) {
        this.dateLabel = data.dateLabel;
      }


      if (data.dateTimeLabel) {
        this.dateTimeLabel = data.dateTimeLabel;
      }

      if (data.minDate) {
        this.minDate = data.minDate;
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
      if (data.message) {
        this.message = data.message;
      }
      if (data.date) {
        this.date = data.date;
      }
      if (data.messageLabel) {
        this.messageLabel = data.messageLabel;
      }


      if (data.isTextAreaRequired != null) {
        this.isTextAreaRequired = data.isTextAreaRequired;
      }
      if (data.isDateInput != null) {
        this.isDateInput = data.isDateInput;
      }

      if (data.isDateRequired != null) {
        this.isDateRequired = data.isDateRequired;
      }


      if (data.isDateTimeInput != null) {
        this.isDateTimeInput = data.isDateTimeInput;
      }

      if (data.isDateTimeRequired != null) {
        this.isDateTimeRequired = data.isDateTimeRequired;
      }

      if (data.isTextInputRequired != null) {
        this.isTextInputRequired = data.isTextInputRequired;
      }
      if (data.isTextArea != null) {
        this.isTextArea = data.isTextArea;
      }


      if (data.isTextInput != null) {
        this.isTextInput = data.isTextInput;
      }


      if (data.text) {
        this.text = data.text;
      }
      if (data.textLabel) {
        this.textLabel = data.textLabel;
      }


      this.isModal = true;
    }
  }

  ngOnInit() {


  }

  closeEvent() {
    this.closeModal.emit(true)
  }
  onYes() {
    let p = {
      message: this.message,
      text: this.text,
      date: this.date,
      dateTime: this.dateTime,
      confirm: true
    }
    this.onConfirm.emit(p);
  }

  onNo() {
    let p = {
      message: this.message,
      text: this.text,
      date: this.date,
      dateTime: this.dateTime,
      confirm: false
    }
    this.onConfirm.emit(p);

    this.closeModal.emit(true);
  }

  selectDateTime(d) {
    if (d) {
      this.dateTime = d;
    }

  }

  selectDate(d) {
    if (d) {
      this.date = d;
    }

  }
}
