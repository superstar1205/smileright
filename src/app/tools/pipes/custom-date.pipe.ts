import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from "@angular/common";
import { AppState } from 'app/app.service';
@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(expression: any, format: string): string {

    format = AppState.Settings["dateFormat"];
    return this.datePipe.transform(expression, format);

  }
}
