import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'OrderArrayObject'
})
export class OrderArrayObject implements PipeTransform {

  constructor() { }

  transform(expression: any, format: any) {
    try {
      let result = expression;

 

      if (Array.isArray(expression) && Array.isArray(format) && format.length > 0) {

        let _order = [];
        let _format = [];


        for (var i = 0; i < format.length; i++) {

          let item = format[i];
        
          if (item[0] == "-") {
            _order.push('desc');
            _format.push(item.substr(1));
          }
          else {
            _order.push('asc');
            _format.push(item);
          }

        }



        result = _.orderBy(expression, _format, _order)

        return result;
      }

      else if (Array.isArray(expression) && typeof format == "string") {

        let _order = [];
        let _format = [];





        if (format[0] == "-") {
          _order.push('desc');
          _format.push(format.substr(1));
        }
        else {
          _order.push('asc');
          _format.push(format);
        }



        


        result = _.orderBy(expression, _format, _order)

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
