import { Pipe, PipeTransform } from '@angular/core';
import { AppState } from 'app/app.service';
@Pipe({
  name: 'customPhone'
})
export class CustomPhonePipe implements PipeTransform {

  constructor() { }

  replaceAt(str, index, replacement) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
  }

  transform(expression: any, format: string): string {

    try {

      if (!expression)
        return expression;


      let defaultPrefix = AppState.Settings["defaultMobilePhonePrefix"];

      if (format && format == "landLine")
        defaultPrefix = AppState.Settings["defaultLandPhonePrefix"];

      let phoneFromat = "";
      let parts = [];
      let phoneNumber;
      let result;

      let prefix = null;


      phoneFromat = AppState.Settings["phoneFormat"];



      parts = expression.split("-");

      if (parts.length == 3) {
        prefix = parts[1];
        phoneNumber = parts[2];
      }
      else if (parts.length == 2) {
        prefix = parts[0];
        phoneNumber = parts[1];
      }

      else {
        phoneNumber = parts[0];

      }

      if (phoneNumber.length == 9) {
        phoneNumber = "0" + phoneNumber;

      }
      else if (phoneNumber.length > 10) {

        prefix = phoneNumber.substr(0, phoneNumber.length - 9)
        phoneNumber = "0" + phoneNumber.substr(phoneNumber.length - 9, phoneNumber.length)


        if (prefix.length > 0 && prefix[0] == "0") {
          prefix = prefix.slice(1, prefix.length)
        }

        if (prefix.length > 0 && prefix[0] == "0") {
          prefix = prefix.slice(1, prefix.length)
        }

        if (prefix.length > 0 && prefix[0] == "0") {
          prefix = prefix.slice(1, prefix.length)
        }

        if (prefix && prefix.length <= 0)
          prefix = null;

      }

      if (!prefix) {
        prefix = defaultPrefix;
      }







      let indexes = [];

      for (var i = 0; i < 10; i++) {
        let index = phoneFromat.indexOf(String(i));
        indexes.push(index);
      }



      result = phoneFromat;

      for (var i = 0; i < indexes.length; i++) {


        result = this.replaceAt(result, indexes[i], phoneNumber[i])
      }




      result = result.replace("p", prefix);



      return result
    }
    catch (e) {




      return expression;
    }

  }
}
