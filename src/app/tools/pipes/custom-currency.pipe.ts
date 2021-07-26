import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common'
import { AppState } from 'app/app.service';
@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }

  transform(value: any, currencyCode: string, symbolDisplay: boolean, digits: string): string {

    currencyCode = AppState.Settings["currencyCode"];
    symbolDisplay =AppState.Settings["currencyDisplaySymbol"];
    digits = AppState.Settings["currencyDigits"];

    let symbl;
    if(symbolDisplay==true)
    {
      symbl="symbol-narrow";
    }
    else
    {
      symbl="code";
    }

    return this.currencyPipe.transform(value, currencyCode, symbl, digits);

  }

}
