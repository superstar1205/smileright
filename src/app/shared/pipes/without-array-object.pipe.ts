import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'WithoutArrayMultipleValue'
})
export class WithoutArrayMultipleValue implements PipeTransform {

  constructor() { }

  transform(expression: any, format: any, value: any) {
    try {
      let result = expression;



      if (expression && format  &&  Array.isArray(expression) && typeof format == 'string' && Array.isArray(value) && value.length>0 ) {

        for (var i = 0; i < value.length; i++) {

          let _obj = {};

          _obj[format] = value[i];

          result = _.reject(expression, _obj)


        }

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
