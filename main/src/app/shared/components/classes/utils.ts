import * as $ from "jquery";
import { ErrorModalComponent } from "../error-modal/error-modal.component";
import { EventEmitter, OnInit } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { NotifyAppCompnent } from "./notify-app-compnent";
import * as _ from "lodash";
import { AppState } from "app/app.service";
import * as Validator from "validatorjs";

export class UtilsClass implements OnInit {
  public static syncLogin = new EventEmitter();
  publicWebSite = AppState.Settings["publicWebSite"];
  constructor() { }


  ngOnInit() { }




  buildTemplateURL(landingCode, linkCode) {
    let result;

    if (landingCode) {

      if (landingCode) {

        if (landingCode.indexOf('@ID@') != -1) {
          let a = landingCode.replace('@ID@', linkCode);

          if (a) {
            result = a;
          }
        }
        else if (landingCode.indexOf('http') != -1) {
          result = landingCode
        }
        else if (landingCode.indexOf('www.') != -1) {
          result = landingCode
        }
        else if (landingCode.indexOf('code:') != -1) {

          let code = landingCode.replace('code:', '');
          result = this.publicWebSite + '/product/(page:main/' + code + '/' + linkCode + ')'

        }
        else {
          result = this.publicWebSite + '/product/(page:main/' + landingCode + '/' + linkCode + ')'

        }

      }
    }

    return result;

  }


  public appPhoneFormat(phoneNumber) {

    if (!phoneNumber || phoneNumber === 'undefined') {
      return null;
    }


    var formatPhoneObject = function (expression) {
      let result;



      let parts = [];
      let phoneNumber;
      try {
        if (!expression) {
          result = expression

          return result;
        }

        parts = expression.split('-');

        if (parts.length === 3) {
          phoneNumber = parts[2];
        } else if (parts.length === 2) {
          phoneNumber = parts[1];
        } else {
          phoneNumber = parts[0];
        }

        if (phoneNumber.length === 9) {
          phoneNumber = `0${phoneNumber}`;
        } else if (phoneNumber.length > 10) {
          phoneNumber = `0${phoneNumber.substr(
            phoneNumber.length - 9,
            phoneNumber.length,
          )}`;


        }

        result = phoneNumber;

        return result;
      } catch (e) {
        result = expression
        return result;
      }
    };


    const number = formatPhoneObject(phoneNumber);

    if (!number) return null;

    if (number.length == 9) {
      return "0" + number;
    }

    else if (number.length == 10) {
      return number;
    }

    return number;


  };


  public timeAgo(time) {
    var dateAgo = new Date(time);
    var dateNow = new Date();
    var units = [
      { name: "second", limit: 60, in_seconds: 1 },
      { name: "minute", limit: 3600, in_seconds: 60 },
      { name: "hour", limit: 86400, in_seconds: 3600 },
      { name: "day", limit: 604800, in_seconds: 86400 },
      { name: "week", limit: 2629743, in_seconds: 604800 },
      { name: "month", limit: 31556926, in_seconds: 2629743 },
      { name: "year", limit: null, in_seconds: 31556926 }
    ];
    var diff = (dateNow.getTime() - dateAgo.getTime()) / 1000;
    if (diff < 5) return "just now";

    var i = 0,
      unit;
    while ((unit = units[i++])) {
      if (diff < unit.limit || !unit.limit) {
        var diff = Math.floor(diff / unit.in_seconds);
        if (isNaN(diff)) return null;

        return diff + " " + unit.name + (diff > 1 ? "s" : "");
      }
    }
  }

  public getGeoLocationRaw(geo) {
    if (geo) {
      try {
        var result = geo.split("-W")[0].split("-S/");
        result[0] = Number(-result[0]);
        result[1] = Number(-result[1]);

        return result;
      } catch (e) {
        return null;
      }
    } else return null;
  }

  public calculateAge(birthdate) {
    let age: number;
    let dateOfBirth = new Date(birthdate);

    if (birthdate) {
      var timeDiff = Math.abs(Date.now() - dateOfBirth.getTime());
      //Used Math.floor instead of Math.ceil
      //so 26 years and 140 days would be considered as 26, not 27.
      age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
      return age;
    }
  }



  public validateFields = (target, rules) => {

    try {

      const validator = new Validator(target, rules);
      if (validator.passes()) return true;
      return false;

    }
    catch (e) {
      return false;
    }

  };

  public formatTermsAndConditions(text) {
    if (text) {
      text = text.replace(
        /â¢ /g,
        '<span style="margin-left: 40px; margin-right: 10px;"> &#9679 </span>'
      );

      // text = text.replace(/\r\n|\n|\r/g, "<br /> ");

      return text;
    } else return "";
  }

  public selectObjectByString(o, s) {
    let _s = s.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
    _s = s.replace(/^\./, ""); // strip a leading dot

    let _o = JSON.parse(JSON.stringify(o));
    const a = _s.split(".");
    for (let i = 0, n = a.length; i < n; i += 1) {
      const k = a[i];

      if (k in _o) {
        if (Array.isArray(_o[k])) {
          if (a.length === i + 1) {
            _o = _o[k];
          } else {
            const tempSelectedString = a.slice(i + 1, a.length).join(".");

            const selectArrayAttribute = [];
            const tmpArray = _o[k];
            for (let j = 0; j < tmpArray.length; j += 1) {
              selectArrayAttribute.push(
                this.selectObjectByString(tmpArray[j], tempSelectedString)
              );
            }
            _o = selectArrayAttribute;
            break;
          }
        } else {
          _o = _o[k];
        }
      } else {
        return null;
      }
    }

    return _o;
  }

  public static displayErrorModal(error, code, link) {
    const ref = AppComponent.dialog.open(ErrorModalComponent, {
      data: {
        link: link,
        title: NotifyAppCompnent.errorType(code),
        content: error
      },
      width: "500px"
    });
    // const sub = ref.componentInstance.closeModal.subscribe(data => {
    //   ref.close();
    // });
  }

  public static savingData() {
    $("#userDataLoader")
      .fadeIn()
      .delay(1500)
      .fadeOut();
  }

  public static startLoadingInterceptor() {

    if (document) {
      let a = document.getElementById('loader');
      if (a) {
        a.style.display = "block";
      }
    }
  }

  public static stopLoadingInterceptor() {
    if (document) {
      let a = document.getElementById('loader');
      if (a) {
        a.style.display = "none";
      }
    }
  }


  public static loadingDataSection(section) {
    $("#dataLoadingSection").hide();
    $("#dataLoadingSection p span").text(section);
    $("#dataLoadingSection")
      .fadeIn()
      .delay(3000)
      .fadeOut();
  }

  public static displayError(error, code, link) {
    console.error("[" + code + "] " + error);

    if (code == 0) {
      return false;
    }

    if (code == 401) {
      NotifyAppCompnent.displayToastr(
        "error",
        "Please verify your login and password",
        error
      );
      return false;
    } else if (code == 451) {
      NotifyAppCompnent.displayToastr(
        "error",
        NotifyAppCompnent.errorType(code),
        error
      );
      return false;
    } else if (code == 452) {
      error.replace("|", "<br>");
      UtilsClass.displayErrorModal(error, "Please review your data ", "reload");
      return false;
    } else if (code == 457) {
      const e = error.split("|");
      const dentist = e[1];
      const choice = e[0];
      let content = "";

      if (choice && choice === "DSMO") {
        content =
          "We have received your feedback and <strong>" +
          dentist +
          "</strong> has been notified. ";
      } else if (choice && choice === "NOT") {
        content =
          "We are sorry to hear that you are not proceeding and <strong>" +
          dentist +
          "</strong> has been notified of your decision. " +
          "<br><br> If you change your mind, feel free to contact the practice and they will reactivate your proposed treatment plan for you to consider again. ";
      } else if (choice && choice === "T_OTH") {
        content =
          "You have indicated that you wish to proceed with your treatment and <strong>" +
          dentist +
          "</strong> has been notified. Expect to hear from the practice soon to confirm your next appointment." +
          "<br><br> If you change your mind and would like to consider financing this procedure then feel free to contact the practice and they will reactivate your proposed treatment plan for you to consider again. ";
      } else if (choice && choice === "DISC") {
        content =
          "You have indicated that you do not want to proceed with finance plan, we will contact you to schedule your treatment. ";
      }

      UtilsClass.displayErrorModal(
        content,
        "You will hear from us soon! ",
        null
      );
      return false;
    } else if (code < 500 && code >= 400) {
      UtilsClass.displayErrorModal(error, code, link);
    } else {
      debugger;
      UtilsClass.displayErrorModal(error, code, link);
    }
  }

  // diffrent between two objects
  public diffObjects(object, base) {
    function changes(object, base) {
      return _.transform(object, function (result, value, key) {
        if (!_.isEqual(value, base[key])) {
          result[key] =
            _.isObject(value) && _.isObject(base[key])
              ? changes(value, base[key])
              : value;
        }
      });
    }
    return changes(object, base);
  }

  public fusionObject(source, target) {
    const result = source;
    for (const key in target) {
      if (target.hasOwnProperty(key) && !result.hasOwnProperty(key)) {
        result[key] = target[key];
      }
    }

    return result;
  }

  public getCreditCardType(number) {
    if (!number) {
      return null;
    }

    // trim whitesapce
    number = number.replace(/\s+/g, "");

    // MasterCard
    if (/^5[1-5][0-9]{5,}$/.test(number)) {
      return "MC";
    } else if (/^4[0-9]{6,}$/.test(number)) {
      return "visa";
    } else if (/^3[47][0-9]{5,}$/.test(number)) {
      return "amex";
    } else if (/^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/.test(number)) {
      return "diners";
    } else if (/^6(?:011|5[0-9]{2})[0-9]{3,}$/.test(number)) {
      return "discover";
    } else if (/^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/.test(number)) {
      return "jcb";
    }

    return null;
  }

  public errorLabel(code) {
    const errorTypes = {
      550: "EP Syntax",
      560: "EP RunTime",
      551: "EP Internal",
      553: "EP Lock",
      554: "EP Lock",
      556: "EP Lockup",
      558: "EP File",
      557: "EP Connection",
      401: "Login Invalid",
      451: "Data",
      452: "Data",
      457: "Data",
      458: "Data",
      0: "Hidden",
      503: "EP Auhtentication",
      403: "Auhtentication",
      555: "EP External",
      500: "Internal"
    };

    return errorTypes["code"] || "Internal";
  }





  formatPhone(expression, isLandLine = false) {
    let result;

    let defaultPrefix = AppState.Settings["defaultMobilePhonePrefix"];

    if (isLandLine == true)
      defaultPrefix = AppState.Settings["defaultLandPhonePrefix"];

    let phoneFromat = "";
    let parts = [];
    let phoneNumber;
    let prefix = null;
    try {
      if (!expression) {
        result = {
          phone: expression,
          prefix: defaultPrefix
        };

        return result;
      }

      phoneFromat = AppState.Settings["phoneFormat"];

      parts = expression.split("-");

      if (parts.length == 3) {
        prefix = parts[1];
        phoneNumber = parts[2];
      } else if (parts.length == 2) {
        prefix = parts[0];
        phoneNumber = parts[1];
      } else {
        phoneNumber = parts[0];
      }


      if (phoneNumber.length == 9) {
        phoneNumber = "0" + phoneNumber;
      }
      else if (phoneNumber.length == 10) {
        phoneNumber = phoneNumber;
      }
      else if (phoneNumber.length == 13 && isLandLine == true) {

        phoneNumber = phoneNumber.substr(phoneNumber.length - 10, phoneNumber.length);


      } else if (phoneNumber.length > 10) {


        prefix = phoneNumber.substr(0, phoneNumber.length - 9);
        phoneNumber =
          "0" + phoneNumber.substr(phoneNumber.length - 9, phoneNumber.length);

        if (prefix.length > 0 && prefix[0] == "0") {
          prefix = prefix.slice(1, prefix.length);
        }

        if (prefix.length > 0 && prefix[0] == "0") {
          prefix = prefix.slice(1, prefix.length);
        }

        if (prefix.length > 0 && prefix[0] == "0") {
          prefix = prefix.slice(1, prefix.length);
        }

        if (prefix && prefix.length <= 0) prefix = null;
      }

      if (!prefix) {
        prefix = defaultPrefix;
      }

      result = {
        phone: phoneNumber,
        prefix: prefix
      };

      return result;
    } catch (e) {
      result = {
        phone: expression,
        prefix: defaultPrefix
      };
    }
  }

  timeConvert(time) {
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? ' AM' : ' PM';
      time[0] = +time[0] % 12 || 12;
    }
    return time.join('');
  }
}
