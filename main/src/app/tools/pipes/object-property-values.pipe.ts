import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'objectPropertyValue'
})
export class ObjectPropertyValuePipe implements PipeTransform {

  constructor() { }

  transform(expression: any, format: string): any {
    try {
      let result = _.map(expression, format)
      return result;
    }
    catch (e) {
      return expression;
    }

  }
}
