/* tslint:disable */
import { enableProdMode, NgModuleRef } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';



export const environment = {
  nodeUrl: 'http://localhost:3000/api' ,
  production: false,
  showDevModule: false,
  mainAppLink: "http://localhost:4200",
  paymentPlanID:"018E6A3E875D44B78043D31ADE8AD174",
  depositLoanID:"D47AB4884996436D8922D8E0B53C1196",
  noDepositLoanID:"0E55AC9123CA4D60A30B30BE58625C80",

  /** Angular debug tools in the dev console
   * https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
   * @param modRef
   * @return {any}
   */
  decorateModuleRef(modRef: NgModuleRef<any>) {
    disableDebugTools();
    return modRef;
  },

  ENV_PROVIDERS: [

  ]
};
