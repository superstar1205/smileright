import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterArrayMultipleContainValue'
})
export class FilterArrayMultipleContainValuePipe implements PipeTransform {

  constructor() { }

  transform(expression: any, format: any, value: any) {
    try {
      let result = [];



      if (expression && format && Array.isArray(expression) && typeof format == 'string' && format == "*" && typeof value == 'string') {



        let result = expression.filter(s => {

          return String(s).toLocaleLowerCase().includes(String(value).toLocaleLowerCase());
        })


 

        return result;
      }


      else if (expression && format && Array.isArray(expression) && typeof format == 'string' && Array.isArray(value) && value.length > 0) {

        for (var i = 0; i < value.length; i++) {

          let _obj = {};

          _obj[format] = value[i];

          if (value[i] == "*")
            return true

          let tmp = expression.filter(s => {

            return String(s[format]).toLocaleLowerCase().includes(String(value[i]).toLocaleLowerCase());
          })



          if (tmp.length > 0) {
            result = result.concat(tmp)
          }

        }

        return result;
      }
      else if (expression && format && Array.isArray(expression) && Array.isArray(format) && Array.isArray(value) && value.length > 0) {


        result = expression.filter(function (item) {

          for (var j = 0; j < format.length; j++) {
            for (var i = 0; i < value.length; i++) {

              if (value[i] == "*")
                return true



              if (value[i] && value[i] != "*" && item[format[j]] && String(item[format[j]]).toLocaleLowerCase().includes(String(value[i]).toLocaleLowerCase())) {
                return true
              }
            }

          }

          return false;

        });



        return result;
      }

      else if (expression && format && Array.isArray(expression) && Array.isArray(format) && value && typeof value == 'string') {


        if (value == "*")
          return expression;

        result = expression.filter(function (item) {

          for (var j = 0; j < format.length; j++) {



            if (value && item[format[j]] && String(item[format[j]]).toLocaleLowerCase().includes(String(value).toLocaleLowerCase())) {

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
