import { EventEmitter } from "@angular/core";

export class NotifyAppCompnent {
  static errorEvent = new EventEmitter<any>();

  static loadApp = new EventEmitter();
  
  static errorObject = {};

  public static errorType(epError) {
    const types = {
      "450": "Syntax error ",
      "550": "4D runtime error ",
      '551': "Internal error ",
      401: "Authentication error",
      402: "Authentication error",
      552: "Schema error",
      451: "Data related error",
      452: "Data related error",
      553: "Record is locked",
      454: "LMOD",
      455: "Authentication error",
      456: "Lookup related error",
      457: "Consistency error",
      458: "File upload  error",
      554: "External error"
    };

    return types[epError] || epError || 500;
  }

  public static displayToastr(type, title, content) {
    NotifyAppCompnent.errorObject = {
      type,
      title: content,
      content: title
    };

    NotifyAppCompnent.errorEvent.emit(NotifyAppCompnent.errorObject);
  }
}
