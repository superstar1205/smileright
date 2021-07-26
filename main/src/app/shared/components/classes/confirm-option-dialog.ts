export class ConfirmOptionDialog {
    confirmMessage :string  ;
    optionsLabel :string ;
    noMessage:string  ;
    yesMessage :string  ;
    title :string  ;
    icon :string  ;
    
    
    constructor(icon, title ,confirmMessage, optionsLabel, noMessage, yesMessage) {
        this.icon = icon;
        this.title = title;
        this.confirmMessage = confirmMessage;
        this.optionsLabel = optionsLabel;
        this.noMessage = noMessage;
        this.yesMessage = yesMessage;
      }



}
 