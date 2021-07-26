import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'FilterArrayMultipleValue'
})
export class FilterArrayMultipleValue implements PipeTransform {

  constructor() { }

  transform(expression: any, format: any, value: any) {
    try {
      let result = [];



      if (expression &&  format  &&  Array.isArray(expression) && typeof format == 'string' && Array.isArray(value) && value.length > 0) {

        for (var i = 0; i < value.length; i++) {

          let _obj = {};

          _obj[format] = value[i];


          if (value[i] == "*")
            return true

          let tmp = _.filter(expression, _obj)



          if (tmp.length > 0) {
            result = result.concat(tmp)
          }

        }

        return result;
      }
      else if (expression && format  &&  Array.isArray(expression) && Array.isArray(format) && Array.isArray(value) && value.length > 0) {


        result = expression.filter(function (item) {

          for (var j = 0; j < format.length; j++) {
            for (var i = 0; i < value.length; i++) {


              if (value[i] == "*")
                return true

              if (item[format[j]] == value[i]) {
                return true
              }
            }

          }

          return false;

        });



        return result;
      }

      else if (expression && format  &&  Array.isArray(expression) && Array.isArray(format) && value && typeof value == 'string') {



        result = expression.filter(function (item) {

          for (var j = 0; j < format.length; j++) {


            if (value == "*")
              return expression;

            if (String(item[format[j]]).indexOf(value) != -1) {
              return true
            }


          }

          return false;

        });

        return result;
      }

      else {
        return expression;
      }

    }
    catch (e) {
      return expression;
    }
  }
}
