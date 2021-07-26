export class ConfirmDialogSingleButton {
  confirmMessage :string  ;
  buttonMessage :string  ;
  title :string  ;
  icon :string  ;


  constructor(icon, title ,confirmMessage, buttonMessage) {
      this.icon = icon;
      this.title = title;
      this.confirmMessage = confirmMessage;
      this.buttonMessage = buttonMessage;
    }



}
