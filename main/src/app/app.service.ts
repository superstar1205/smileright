
import { throwError as observableThrowError, of as observableOf, Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'environments/environment';

export interface InternalStateType {
  [key: string]: any;
}

@Injectable()
export class AppState {

  public static Settings = {
    "_id": "5bcf0184d792c8403bdbb60a",
    "BrandingLogoImage": "5bcf01f0d792c8403bdbb632",
    "BrandingBackgroundImageMerchant": "5bcfd6cac8debe0ed3687c9c",
    "BrandingBackgroundImageConsumer": "5ef2d90c13d55576470a4ea2",
    "BrandingBackgroundImageSupplier": "5ef2d8e813d55576470a4e9d",
    "BrandingBackgroundImagePromoter": "5ef2d8e013d55576470a4e99",
    "BrandingBackgroundImageFunder": "5ef2d8d913d55576470a4e95",
    "BrandingIcon": "5bcf0206d792c8403bdbb63b",
    "address": "PO Box 7795 Cloisters Square 6850 Western Australia",
    "nodeJSServer": "https://sandbox.smileright.com.au/api",
    "nodeJSPort": 3000,
    "website": "smileright.com.au",
    "lastUpdated": "2021-03-24T15:17:01.432Z",
    "createdAt": "2018-10-23T11:09:56.446Z",
    "contactPhone": "1300793983",
    "contactEmail": "econnect@smileright.com.au",
    "contactName": "Smile Right Capital Pty Ltd, trading as Smile Right",
    "currencyDigits": "1.2-2",
    "currencyDisplaySymbol": true,
    "currencyCode": "AUD",
    "timeFormat": "HH:mm",
    "dateTimeFormat": "DD/MM/YYYY HH:mm",
    "dateFormat": "DD/MM/YYYY",
    "fileAllowedExt": [
      "image/*",
      "application/pdf"
    ],
    "fileMaxSize": 50,
    "storedClientInfoNumber": 10,
    "storedGeoLocationNumber": 10,
    "listItemNumber": 200,
    "currency": "aud",
    "availableLanguages": [
      {
        "_id": "dental",
        "code": "dental",
        "label": "English - Dental"
      }
    ],
    "language": "dental",
    "consumerAuthenticationDuration": 30,
    "recordsLifeTime": 90,
    "logsLifeTime": 90,
    "sessionConsumerLifeTime": 1,
    "sessionRemeberedConsumerLifeTime": 1,
    "sessionRemeberedLifeTime": 3,
    "sessionLifeTime": 200,
    "warningColor": "#ff5722",
    "accentColor": "#f44336",
    "primaryColor": "#1e88e5",
    "copyRight": "SMILE RIGHT PTY LTD ACN: 601 445 041 - CREDIT REPRESENTATIVE NUMBER 496359 IS AUTHORISED UNDER AUSTRALIAN CREDIT LICENSE:468425 &copy; 2015 - 2020 SMILE RIGHT PTY LTD SMILE RIGHT PTY LTD ACN: 601 445 041 MANAGES THE LOANS FOR SMILE RIGHT CAPITAL PTY LTD ACN: 139 675 424 - THE LENDER OF RECORD.",
    "snapLine": "Patient communication and finance",
    "brandName": "Smile Right",
    "pageTitle": "Smile Right Pty Ltd",
    "updatedByName": "updated by the system",
    "ECversion": "2.0",
    "mapApi": "google",
    "mapKleberResult": 200,
    "mapKleberAutoComplet": 3,
    "theme": "pionner",
    "isConsumerLogin": false,
    "context": "dental",
    "labelSource": "dental",
    "mapValidator": "google",
    "phoneValidator": "jsvalidator",
    "emailValidator": "jsvalidator",
    "defaultCountryCode": "AU",
    "defaultCountryPhonePrefix": "AU",
    "defaultLandPhonePrefix": "61",
    "defaultMobilePhonePrefix": "61",
    "displayPhonePrefix": true,
    "dynamicPhonePrefix": false,
    "isKleberPhoneStrictMode": false,
    "isKleberEmailStrictMode": false,
    "phoneFormat": "0123 456 789",
    "landPhoneFormat": "01 2345 6789",
    "listPageSize": 25,
    "isWakandaIntegrated": true,
    "wakandaLALink": "http://13.211.246.105:8100/get-started-la/?invitationID=_id_",
    "wakandaPPLink": "http://13.211.246.105:8100/get-started-pp/?invitationID=_id_",
    "wakandaInvitationCardLink": "http://13.211.246.105:8100/invitation-card/?invitationID=_id_",
    "twitter": "https://twitter.com/SmileRight_",
    "facebook": "https://facebook.com/SmileRight_",
    "googlePlus": "https://google.com",
    "instagram": "https://instagram.com",
    "publicWebSite": "https://public-staging.smileright.com.au",
    "hubSpotUserId": "5173361",
    "cssId": "5ef2d91013d55576470a4ea8",
    "themeId": "smileright",
    "characterWarningId": "5bcf0225d792c8403bdbb653",
    "characterErrorId": "5bcf022ad792c8403bdbb657",
    "characterCommenceApplicationId": "5bcf0230d792c8403bdbb65b",
    "characterPairId": "5bcf023ad792c8403bdbb65f",
    "characterPaymentScheduleId": "5bcf0245d792c8403bdbb663",
    "characterSecrectId": "5bcf024cd792c8403bdbb667",
    "characterClipboardId": "5bcf0250d792c8403bdbb66b",
    "characterClipboardThumbsupId": "5bcf0257d792c8403bdbb66f",
    "characterThumbsupId": "5bcf025bd792c8403bdbb673",
    "characterIntroId": "5bcf026bd792c8403bdbb67b",
    "loadingGifId": "5bcf021bd792c8403bdbb64f",
    "userDataLoadingId": "5bcf0219d792c8403bdbb64b",
    "mapGooleApiKey": "AIzaSyAgtwhf3asTnIJ93KpsuOmfrL76wAruYxs",
    "themeDefaultScssColors": [
      {
        "color": "#1b8bdd",
        "palette": "(50:#e4f1fb,100:#bbdcf5,200:#8dc5ee,300:#5faee7,400:#3d9ce2,500:#1b8bdd,600:#1883d9,700:#1478d4,800:#106ecf,900:#085bc7,A100:#f1f6ff,A200:#bed7ff,A400:#8bb8ff,A700:#71a8ff,contrast:(50:#000,100:#000,200:#000,300:#000,400:#000,500:#fff,600:#fff,700:#fff,800:#fff,900:#fff,A100:#000,A200:#000,A400:#000,A700:#000,));",
        "name": "v1",
        "isPalette": true
      },
      {
        "color": "#dd1b1b",
        "palette": "(50:#fbe4e4,100:#f5bbbb,200:#ee8d8d,300:#e75f5f,400:#e23d3d,500:#dd1b1b,600:#d91818,700:#d41414,800:#cf1010,900:#c70808,A100:#fff1f1,A200:#ffbebe,A400:#ff8b8b,A700:#ff7171,contrast:(50:#000,100:#000,200:#000,300:#000,400:#fff,500:#fff,600:#fff,700:#fff,800:#fff,900:#fff,A100:#000,A200:#000,A400:#000,A700:#000,));",
        "name": "v2",
        "isPalette": true
      },
      {
        "color": "#ce066b",
        "palette": "(50:#f9e1ed,100:#f0b4d3,200:#e783b5,300:#dd5197,400:#d52b81,500:#ce066b,600:#c90563,700:#c20458,800:#bc034e,900:#b0023c,A100:#ffdae3,A200:#ffa7be,A400:#ff7499,A700:#ff5a86,contrast:(50:#000,100:#000,200:#000,300:#000,400:#fff,500:#fff,600:#fff,700:#fff,800:#fff,900:#fff,A100:#000,A200:#000,A400:#000,A700:#000,));",
        "name": "v3",
        "isPalette": true
      },
      {
        "color": "#0092eb",
        "palette": "#0092eb",
        "name": "g1",
        "isPalette": false
      },
      {
        "color": "#0dbad3",
        "palette": "#0dbad3",
        "name": "g2",
        "isPalette": false
      },
      {
        "color": "#00efbd",
        "palette": "#00efbd",
        "name": "g3",
        "isPalette": false
      },
      {
        "color": "#2eaae9",
        "palette": "#2eaae9",
        "name": "g4",
        "isPalette": false
      }
    ],
    "ThemeDefaultScssFile": "5bcf01ded792c8403bdbb61f",
    "chartColors": [
      "#1b8bdd",
      "#dd1b1b",
      "#ce066b",
      "#0092eb",
      "#0dbad3",
      "#00efbd",
      "#2eaae9",
      "#5AA454",
      "#A10A28",
      "#C7B42C",
      "#AAAAAA"
    ],
    "chartShowXAxis": true,
    "chartShowYAxis": true,
    "chartShowLegend": false,
    "chartShowXAxisLabel": true,
    "chartShowYAxisLabel": true,
    "chartRoundDomains": true,
    "chartShowGridLines": true,
    "chartShowDoughnut": true,
    "chartShowTrimLabels": true,
    "chartBarPadding": 3,
    "chartShowTimeline": false,
    "chartShowRefLabels": true,
    "chartAutoScale": true,
    "chartShowLabel": true,
    "chartGradient": false,
    "siteOnline": true,
    "securityCodeLifeTime": 5,
    "securityCodeMethod": "emailSms",
    "defaultMessages": [
      {
        "id": "DefaultMessage1",
        "value": "Attached is the treatment we discussed earlier when you visited the practice. Please take a look and let us know how you would like to proceed!"
      },
      {
        "id": "DefaultMessage2",
        "value": "Looking forward to see you again. "
      },
      {
        "id": "DefaultMessage3",
        "value": "Glad we could continue our procedure!"
      },
      {
        "id": "DefaultMessage4",
        "value": "Please enter your own message here!"
      }
    ],
    "documentTypes": [
      "Treatment Plan",
      "Additional Document",
      "Image",
      "Scan / X-Ray"
    ],
    "isModuleMarketingActive": true,
    "isModuleDarkModeActive": true,
    "isModuleDiscountsActive": true,
    "isModuleStaffActive": true,
    "isModuleExternalLoginActive": true,
    "isModuleEmergercyActive": false,
    "isModuleMapViewActive": true,
    "isModuleChangeLogActive": true,
    "isModuleMembershipActive": false,
    "isModuleReferralActive": false,
    "isModuleAppointmentActive": true,
    "isModuleMediaGalleryActive": true,
    "isModuleCustomMessagesActive": true,
    "isModuleCustomerActive": false,
    "isModuleContractActive": true,
    "isModulePatientHistoryActive": true,
    "isModuleTreatmentPlanActive": true,
    "isModuleExperimentalFeaturesActive": true,
    "isModuleExperimentalFeaturesActiveBeta": true,
    "isModuleDemoFeaturesActive": false,
    "isModuleDemoFeaturesActiveBeta": false,
    "isModuleFacilityActive": false,
    "isModuleConsumerPortalActive": true,
    "isModulePatientDocumentActive": true,
    "isModuleSettlementsActive": true,
    "isModuleSettlementsAdvancedActive": true,
    "isModulePracticeActive": true,
    "isModuleBeneficiaryActive": true,
    "isModuleInformedConsentActive": true,
    "isModulePatientsActive": true,
    "isModuleMyPracticeActive": true,
    "isModulePerformanceActive": true,
    "isModuleTipsActive": true,
    "isModuleOverviewActive": true,
    "isModuleExtendedProductsActive": false,
    "isModuleAdvancedTreatmentActive": false,
    "isModuleTutorialsActive": false,
    "isModuleQuotebuilderActive": false,
    "isModuleTreatmentGroupActive": true,
    "isModuleTreatmentGroupActiveBeta": false,
    "isModulePatienCardtSecurityActive": false,
    "isModulePatienCardtSecurityActiveBeta": false,
    "isModuleMarketingActiveBeta": true,
    "isModuleDarkModeActiveBeta": true,
    "isModuleDiscountsActiveBeta": true,
    "isModuleStaffActiveBeta": true,
    "isModuleExternalLoginActiveBeta": true,
    "isModuleEmergercyActiveBeta": false,
    "isModuleMapViewActiveBeta": true,
    "isModuleChangeLogActiveBeta": true,
    "isModuleMembershipActiveBeta": false,
    "isModuleReferralActiveBeta": true,
    "isModuleAppointmentActiveBeta": true,
    "isModuleMediaGalleryActiveBeta": true,
    "isModuleCustomMessagesActiveBeta": true,
    "isModuleCustomerActiveBeta": true,
    "isModuleContractActiveBeta": true,
    "isModulePatientHistoryActiveBeta": true,
    "isModuleTreatmentPlanActiveBeta": true,
    "isModuleConsumerPortalActiveBeta": true,
    "isModulePatientDocumentActiveBeta": true,
    "isModuleFacilityActiveBeta": true,
    "isModuleSettlementsActiveBeta": true,
    "isModuleSettlementsAdvancedActiveBeta": true,
    "isModulePracticeActiveBeta": true,
    "isModuleBeneficiaryActiveBeta": true,
    "isModuleInformedConsentActiveBeta": true,
    "isModulePatientsActiveBeta": true,
    "isModuleMyPracticeActiveBeta": true,
    "isModulePerformanceActiveBeta": true,
    "isModuleTipsActiveBeta": true,
    "isModuleOverviewActiveBeta": false,
    "isModuleExtendedProductsActiveBeta": false,
    "isModuleAdvancedTreatmentActiveBeta": false,
    "isModuleTutorialsActiveBeta": true,
    "isModuleTreatmentTemplateActive": true,
    "isModuleTreatmentTemplateActiveBeta": true,
    "isModulePrivateDocumentActiveBeta": true,
    "isModulePrivateDocumentActive": false,
    "isModuleNoteFeaturesActive": true,
    "isModuleNoteFeaturesActiveBeta": false,
    "isModuleMerchantInformedConsentActive": true,
    "isModuleMerchantInformedConsentActiveBeta": true,
    "isModuleWikiActive": true,
    "isModuleWikiActiveBeta": true,
    "isModuleMedicationActive": true,
    "isModuleMedicationActiveBeta": true,
    "isModuleStockArtActive": true,
    "isModuleStockArtActiveBeta": true,
    "isModuleBoostReachActive": true,
    "isModuleBoostReachActiveBeta": false,
    "isModulePatientPortalAccessActive": true,
    "isModulePatientPortalAccessActiveBeta": true,
    "isModuleProductPermissionActive": true,
    "isModuleProductPermissionActiveBeta": true,
    "isModulePracticeLandingPageActive": true,
    "isModulePracticeLandingPageActiveBeta": true,
    "googleID": "AIzaSyCcipf2xR07Zhywd72iaDm8MfwHG96o1x8",
    "facebookID": "630246197606183",
    "offlineMessage": null,
    "defaultSendInvitationSMS": false,
    "serverTimeZone": "Australia/Canberra",
    "serverTimeZoneUTC": 11,
    "merchantFrontendLink": "https://sandbox.smileright.com.au",
    "publicSiteFrontendLink": "https://public-staging.smileright.com.au",
    "consumerFrontendLink": "https://my-sandbox.smileright.com.au",
    "promoterFrontendLink": "https://promoter-sandbox.smileright.com.au",
    "funderFrontendLink": "https://funder-sandbox.smileright.com.au",
    "supplierFrontendLink": "https://supplier-sandbox.smileright.com.au",
    "tmpFrontendLink": "https://tmp-sandbox.smileright.com.au",
    "activeAWSS3": true,
    "calendarGuestBooking": "https://calendly.com/smileright/smile-right-demonstration?hide_event_type_details=1&background_color=f7f7f7&text_color=585858&primary_color=f42938",
    "calendarConsumerBooking": "https://calendly.com/smileright/smile-right-demonstration?hide_event_type_details=1&background_color=f7f7f7&text_color=585858&primary_color=f42938",
    "calendarMerchantBooking": "https://get.smileright.com.au/smile-right-academy",
    "calendarFunderBooking": "https://get.smileright.com.au/smile-right-academy",
    "calendarSupplierBooking": "https://get.smileright.com.au/smile-right-academy",
    "calendarPartnerBooking": "https://calendly.com/smileright/smile-right-demonstration?hide_event_type_details=1&background_color=f7f7f7&text_color=585858&primary_color=f42938",
    "calendarInvestorBooking": "https://calendly.com/smileright/smile-right-demonstration?hide_event_type_details=1&background_color=f7f7f7&text_color=585858&primary_color=f42938",
    "calendarSpecialistBooking": "https://calendly.com/smileright/smile-right-demonstration?hide_event_type_details=1&background_color=f7f7f7&text_color=585858&primary_color=f42938",
    "consumerPublicDrift": "207271",
    "dentistPublicDrift": "207704",
    "specialistPublicDrift": "233934",
    "investorPublicDrift": "233932",
    "merchantProspectPublicSiteDrift": "233922",
    "merchantPublicSiteDrift": "233930",
    "consumerDrift": "224386",
    "merchantDrift": "106881",
    "funderDrift": "233550",
    "patientCardDrift": "238151",
    "supplierDrift": "233549",
    "consumerLoginDrift": "237514",
    "merchantLoginDrift": "233902",
    "funderLoginDrift": "233905",
    "supplierLoginDrift": "233906",
    "errorDrift": "233928",
    "unsubscribeDrift": "227930",
    "dynamicUserTimeZone": true
  };
  static updateDrift = new EventEmitter();
  static setDrift = new EventEmitter();
  private loginUrl: string = environment.nodeUrl + '/auth/signin/public-site';
  private currentUser: any = null;
  private currentPractice: any = null;
  private userUrl: string = environment.nodeUrl + '/current';
  private logoutUrl: string = environment.nodeUrl + '/auth/signout';

  public _state: InternalStateType = {};
  public nodeJSUrl = environment.nodeUrl;

  constructor(private http: HttpClient) { }
  /**
   * Already return a clone of the current state.
   */


  /**
  * @Description
  * Get product details
  **/
  getProdDetails(ID) {
    return observableOf({
      "ID": "7E5F00A18DAA4C8F95210944F1C1F5D8",
      "DateTimeCreated": "2017-02-22 11:46:15",
      "LabelAndFunder": "No Deposit Loan - Smile Right",
      "Label": "No Deposit Loan",
      "Description": "<ul class=\"check\">\r<li>Amounts from $2001 to $50,000</li>\r<li>Loan terms up to 60 months</li>\r<li>Affordable repayments</li>\r<li class=\"strong\">No deposit required</li>\r</ul>",
      "SubType": "With Interest",
      "MarketingLabel": "No Deposit Loan",
      "WebLabel": "Low Payment",
      "Funder.Name": "Smile Right",
      "Funder.key": "FCAF4A0C955F4D9798D775A3135A5665",
      "IsEnabled": "1",
      "Merchant_key": "544A66F235404B6180493BE2EEC1648B",
      "Universal_Product": "0",
      "Fees.Establishment": "100",
      "Fees.AccountKeeping": "13",
      "Parameter.PaymentFrequencies": "1-2-4",
      "Parameter.PaymentFrequencyDef": "1",
      "Parameter.ContractDurationMin": "6",
      "Parameter.ContractDurationMax": "120",
      "Parameter.ContractDurationDef": "6",
      "Parameter.MonthsEmploymentHistory": "24",
      "Parameter.MonthsAddressHistory": "36",
      "Parameter.DepositDefault": "0%",
      "Parameter.DepositMin": "0$",
      "Parameter.CustType.AllowsIndividual": "0",
      "Parameter.CustType.AllowsJoint": "0",
      "Parameter.MinLoanValue": "2001",
      "Parameter.MaxLoanValue": "50000",
      "Parameter.PenaltyRate": "22.95",
      "Parameter.MultipleDrawDowns": "0",
      "Parameter.AmortiseEstablishmentFee": "1",
      "Parameter.CapacityCheck.UseStressTest": "0",
      "Parameter.CapacityCheck.StressTestBuffer": "0",
      "Parameter.CapacityCheck.Required": "1",
      "Parameter.CreditCheck.Required": "1",
      "Parameter.MinLendingAge": "18",
      "TermsAndConditions": "",
      "TandCs.Essentials": "<span>A Smile Right - No Deposit Loan could help you finance your next procedure.<br/><br/>Borrow between $2,001 and $50,000 for a range of dental procedures - Conditions apply*<br/><br/><ul class=\"check\"><br/><li>A low varible interest rate.</li><br/><li>Terms between 1 to 5 years.</li><br/><li>No deposit required.</li><br/></ul><br/>* To approved applicants and participating practices.<br/><br/></span>",
      "TandCs.Features": "<strong class=\"sr-title\">REPAYMENTS YOU CONTROL</strong>\r\rChoose the frequency of your repayments to suit when you get paid (weekly, fortnightly or monthly) as long as you pay your loan back within 1 to 5 years.\rMake extra repayments to repay your loan faster.\r",
      "TandCs.Deposit": "No deposit is required for this loan.",
      "TandCs.Fees": "<table class=\"full-width\" cellpadding=\"6\">\r  <tr>\r    <td colspan=\"2\" class=\"cell-header\" style=\"background: #1b8bdd;font-weight: bold;color: #fff;\">Establishment Fees</td>\r  </tr>\r  <tr>\r    <td>A once only fee will be charged based on the amount you apply for:</td>\r    <td></td>\r  </tr>\r  <tr>\r    <td>Under $10,000</td>\r    <td>$100</td>\r  </tr>\r  <tr>\r    <td>$10,000-$19,999</td>\r    <td>$150</td>\r  </tr>\r  <tr>\r    <td>$20,000 and over</td>\r    <td>$200</td>\r  </tr>\r  <tr>\r    <td colspan=\"2\" class=\"cell-header\" style=\"background: #1b8bdd;font-weight: bold;color: #fff;\">Monthly Account Keeping Fee</td>\r  </tr>\r  <tr>\r    <td>Charged monthly on all loans</td>\r    <td>$13</td>\r  </tr>\r  <tr>\r    <td colspan=\"2\" class=\"cell-header\" style=\"background: #1b8bdd;font-weight: bold;color: #fff;\">Payment Handling Fee</td>\r  </tr>\r  <tr>\r    <td>This fee will only apply for payments that are made via direct deposit or over the phone. (not via direct debit)</td>\r    <td>$10</td>\r  </tr>\r  <tr>\r    <td colspan=\"2\" class=\"cell-header\" style=\"background: #1b8bdd;font-weight: bold;color: #fff;\">Dishonour Fee</td>\r  </tr>\r  <tr>\r    <td>This fee will only apply if we are unable to draw money from a direct debit authority you have provided to us by set due dates.</td>\r    <td>$35</td>\r  </tr>\r  <tr>\r    <td colspan=\"2\" class=\"cell-header\" style=\"background: #1b8bdd;font-weight: bold;color: #fff;\">Paper Statement Fee</td>\r  </tr>\r  <tr>\r    <td>This fee will apply if you request a paper copy of your account.</td>\r    <td>$20</td>\r  </tr>\r  <tr>\r    <td colspan=\"2\" class=\"cell-header\" style=\"background: #1b8bdd;font-weight: bold;color: #fff;\">Repayment Date Change Fee</td>\r  </tr>\r  <tr>\r    <td>This fee will apply if you request to change the date your repayments are due.</td>\r    <td>$30</td>\r  </tr>\r  <tr>\r    <td colspan=\"2\" class=\"cell-header\" style=\"background: #1b8bdd;font-weight: bold;color: #fff;\">Early Termination Fee</td>\r  </tr>\r  <tr>\r    <td>Within first half of your loan term:</td>\r    <td>$250</td>\r  </tr>\r  <tr>\r    <td>Within the second half of your loan term:</td>\r    <td>$150</td>\r  </tr>\r  <tr>\r    <td>We will not charge a early termination fee if the total payable by you exceeds the amount you would pay had you kept your loan until the end of the term.</td>\r    <td></td>\r  </tr>\r  <tr>\r    <td colspan=\"2\" class=\"cell-header\" style=\"background: #1b8bdd;font-weight: bold;color: #fff;\">Variation Fee</td>\r  </tr>\r  <tr>\r    <td>This fee will apply if you request to increase the amount of credit after you have accepted the loan:</td>\r    <td>$50</td>\r  </tr>\r</table>",
      "TandCs.Eligibility": "<strong class=\"sr-title\">ELIGIBILITY</strong>\r\rBe at least 18 years old\rHave regular permanent income\rBe an Australian citizen, permanent resident or have a valid visa*\r* Valid visa (PDF 183kb) (Opens in new window) To find out whether your Visa qualifies you please feel free call our Personal Lending Centre on 1300 793 983 during our office hours to discuss.\r\r<strong class=\"sr-title\">WHAT INFORMATION DO I NEED TO PROVIDE?</strong>\r\rDetails of your current financial situation\rProof of employment (current wage slip)\rProof of ID (if we cannot identify you electronically)\rWe may use the contact information that you give us to contact you to help you complete your application or if we need to discuss your application with you.\r\r<strong class=\"sr-title\">HOW CAN I APPLY?</strong>\r\rApply online, it usually takes less than 15 minutes.\r\r<strong class=\"sr-title\">WHAT HAPPENS WHEN I APPLY?</strong>\r\rWhen you have finished completing the application we will give you feedback on your application, typically in 60 seconds. Once conditionally approved your contract is presented online for your review and electronic acceptance. After we have completed our loan assessment and your loan is approved, a copy of your accepted contract will then be emailed to you for your records.\r\rYour dentist will be notified and you may then proceed with your treatment.\r\rIt's that easy!",
      "TandCs.Rates": "<table class=\"full-width\" cellpadding=\"6\">\r  <tr>\r    <td colspan=\"2\" class=\"cell-header\" style=\"background: #1b8bdd;font-weight: bold;color: #fff;\">Loan\tAnnual Rate</td>\r  </tr>\r  <tr>\r    <td>Interest Rate</td>\r    <td>18.88% p.a.</td>\r  </tr>\r  <tr>\r    <td>Comparison Rate</td>\r    <td>19.98% p.a.*</td>\r  </tr>\r  </table>\r\r\r  <p class=\"small\">* This comparison rate is based on a $30,000 unsecured personal loan for a five year term.</p>\r\r  <p><strong>WARNING:</strong> This comparison rate is true only for the examples given and may not include all fees and charges. Different terms, fees or other loan amounts might result in a different comparison rate.</p>\r\t\r",
      "TandCs.ThingsToConsider": "At Smile Right we care for our customers and want to make sure before you borrow money with us you have considered all your options.\r\r<strong class=\"sr-title\">WHAT AM I BORROWING MONEY FOR?</strong>\r\rIs it for something you need, or something you want? If you are struggling to repay your existing debts click here for options other than borrowing.\r\r<strong class=\"sr-title\">IS BORROWING MY BEST OPTION?</strong>\r\rThere may be other ways to get what you want without borrowing money. For example, can you delay your procedure, save up and then pay outright? If you are on a low income, you may even qualify for a no or low-interest loan via community based lenders.\r\r<strong class=\"sr-title\">IS NOW THE RIGHT TIME TO BORROW?</strong>\r\rThink about any changes that might affect your income. How secure is your job? Are you planning to start a family or take time off for study? Do you have any health issues that may mean you'll earn less for a while? If you said 'yes' to any of these questions, you might be better off saving now and borrowing later."
    })
  }

  /**
   * @description
   * Get suitable product
   * @param('payload')
   **/
  getSuitableProduct(payload, isCold = false) {
    let params: HttpParams = new HttpParams();
    let options = {};

    for (let key in payload) {
      if (payload.hasOwnProperty(key) && payload[key]) {
        params = params.set(key, payload[key]);
      }
    }

    options = {
      params: params
    };
    return observableOf([
      {
        "ID": "92DB750F5CDC410D9B9BD604ED69F281",
        "Label.Marketing": "Low Rate Loan",
        "Label.Web": "Saver",
        "BasedOnMaxDuration.Repayments.Weekly": "31.24",
        "SubType": "With Interest",
        "Description": "<ul class=\"check\">\r<li>Amounts from $2001 to $30,000</li>\r<li>Loan terms up to 60 months</li>\r<li>Our lowest rate of interest</li>\r<li>Deposit required with first payment</li>\r</ul>"
      },
      {
        "ID": "7E5F00A18DAA4C8F95210944F1C1F5D8",
        "Label.Marketing": "No Deposit Loan",
        "Label.Web": "Low Payment",
        "BasedOnMaxDuration.Repayments.Weekly": "28.43",
        "SubType": "With Interest",
        "Description": "<ul class=\"check\">\r<li>Amounts from $2001 to $50,000</li>\r<li>Loan terms up to 60 months</li>\r<li>Affordable repayments</li>\r<li class=\"strong\">No deposit required</li>\r</ul>"
      },
      {
        "ID": "A079981E4C734617AF49472E3B56EDFB",
        "Label.Marketing": "Payment Plan",
        "Label.Web": "Best Value",
        "BasedOnMaxDuration.Repayments.Weekly": "76.36",
        "SubType": "Payment Plan",
        "Description": "<ul class=\"check\">\r<li class=\"strong\">NO INTEREST, EST. FEES or CHARGES</li>\r<li>Amounts from $100 to $10,000</li>\r<li>Loan terms from 4 weeks to 2 Years</li>\r<li>Deposit required with first payment</li>\r</ul>"
      }
    ])
  }

  messageGuestUser(id, data) {

    return observableOf("85FAFBD877ABDC4188B83D918DB78A46")
  }

  getSuitableProductStatistic(payload) {
    let params: HttpParams = new HttpParams();
    let options = {};


    for (var key in payload) {
      if (payload.hasOwnProperty(key) && payload[key]) {
        params = params.set(key, payload[key]);
      }
    }

    options = {
      params: params
    };

    return observableOf({
      "Min(Result.Instalments.Min)": "8",
      "Min(Result.Weeks.Min)": "8",
      "Min(Result.Months.Min)": "2",
      "Min(BasedOnMinDuration.Repayments.Weekly)": "96.63",
      "Min(BasedOnMinDuration.Repayments.Fortnightly)": "193.27",
      "Min(BasedOnMinDuration.Repayments.Monthly)": "419.9",
      "Min(BasedOnMinDuration.Subtotals.PrincipalAfterDeposit)": "2004",
      "Min(BasedOnMinDuration.SubTotals.Deposit)": "0",
      "Min(BasedOnMinDuration.SubTotals.Interest)": "0",
      "Min(BasedOnMinDuration.SubTotals.Fees)": "0",
      "Min(BasedOnMinDuration.TotalPayable)": "2004",
      "Min(BasedOnMinDuration.InterestRate)": "0",
      "Min(Result.Instalments.Max)": "26",
      "Min(Result.Weeks.Max)": "26",
      "Min(Result.Months.Max)": "6",
      "Min(BasedOnMaxDuration.Repayments.Weekly)": "33.11",
      "Min(BasedOnMaxDuration.Repayments.Fortnightly)": "66.22",
      "Min(BasedOnMaxDuration.Repayments.Monthly)": "143.88",
      "Min(BasedOnMaxDuration.Subtotals.PrincipalAfterDeposit)": "0",
      "Min(BasedOnMaxDuration.SubTotals.Deposit)": "0",
      "Min(BasedOnMaxDuration.SubTotals.Interest)": "0",
      "Min(BasedOnMaxDuration.SubTotals.Fees)": "0",
      "Min(BasedOnMaxDuration.TotalPayable)": "2004",
      "Min(BasedOnMaxDuration.InterestRate)": "0",
      "Max(Result.Instalments.Max)": "104",
      "Max(Result.Weeks.Max)": "104",
      "Max(Result.Months.Max)": "24",
      "Max(BasedOnMaxDuration.Repayments.Weekly)": "77.08",
      "Max(BasedOnMaxDuration.Repayments.Fortnightly)": "154.15",
      "Max(BasedOnMaxDuration.Repayments.Monthly)": "334.92",
      "Max(BasedOnMaxDuration.Subtotals.PrincipalAfterDeposit)": "0",
      "Max(BasedOnMaxDuration.SubTotals.Deposit)": "501",
      "Max(BasedOnMaxDuration.SubTotals.Interest)": "526.55",
      "Max(BasedOnMaxDuration.SubTotals.Fees)": "412",
      "Max(BasedOnMaxDuration.TotalPayable)": "3443.55",
      "Max(BasedOnMaxDuration.InterestRate)": "18.88"
    });

  }

  getOneCampaign(id): Observable<any> {

    return this.http
      .get(environment.nodeUrl + "/marketing/" + id, {}).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  getMerchantDetails(ID, payload = {}) {

    let params: HttpParams = new HttpParams();
    let options = {};


    for (var key in payload) {
      if (payload.hasOwnProperty(key) && payload[key]) {
        params = params.set(key, payload[key]);
      }
    }

    options = {
      params: params
    };

    return observableOf({
      "ID": "F6164E0E29C94FECB264AD2A1B828644",
      "LastModified_Human": "2021-03-13 12:40:10",
      "IsPromoter": "1",
      "ShortName": "Leading Edge Dental",
      "Name": "St George Dental Pty Ltd",
      "Salutation": "Dr",
      "FirstName": "Brett",
      "MiddleName": "Econnect",
      "PreferredName": "",
      "TradingAs": "Leading Edge Dental",
      "TrusteeFor": "",
      "CalculatedName": "St George Dental Pty Ltd, trading as Leading Edge Dental",
      "Dear": "Dear Sir/Madam",
      "Occupation": "",
      "CardType": "Commercial - Company",
      "ABN": "601445041",
      "DateTimeCreated": "",
      "ACN": "601445041",
      "CompanyType": "",
      "phones.Number": "1300793989",
      "phones.Extension": "",
      "mobiles.Send": "0",
      "mobiles.Number": "",
      "faxes.Send": "0",
      "faxes.Number": "",
      "emails.Send": "1",
      "emails.Email": "Steve@ipventures.com.au",
      "email.ReplyTo": "steve@ipventures.com.au",
      "addresses.Send": "0",
      "addresses.Calculated": "580 Hay St \rPerth WA 6000",
      "addresses.Suburb": "Perth",
      "addresses.State": "WA",
      "addresses.Postcode": "6000",
      "addresses.Country.Code": "au",
      "addresses.Country.Label": "Australia",
      "addresses.Unit": "",
      "addresses.Property": "",
      "addresses.Street Nr": "580",
      "addresses.Street Name": "Hay",
      "addresses.Street Type": "St",
      "PreferredMessageType.Code": "E",
      "PreferredMessageType.Label": "Email",
      "URL": "http://leadingedgedental.com.au",
      "PreferredContactMethod.Code": "",
      "PreferredContactMethod.Label": "",
      "Address.Latitude": "-31.9546333",
      "Address.Longitude": "115.8609102",
      "OverheadPercentage.Overridden": "5",
      "OverheadPercentage.Effective": "5",
      "CashDiscount.Offered": "1",
      "CashDiscount.AllowOverride": "0",
      "CashDiscount.Percentage": "6",
      "CashDiscount.Expiry.Days": "7",
      "CashDiscount.MinInvoiceValue": "400",
      "ThirdPartyBooking_URL": "",
      "InformedConsent_Declaration": "<h2>Informed Consent: Dental &amp; Oral Health</h2><p>I acknowledge the doctor / clinician has explained:</p><p><br></p><ul><li>my / the patient's medical condition and the proposed procedure / treatment / investigation may require and include additional treatment if the doctor / clinician finds something unexpected. I understand the risks and benefits, including the risks specific to me;</li><li>my / the patient's requirement for anesthetic for this procedure / treatment / investigation - I understand the risks associated with anesthetic, including the risks specific to me (see Anesthetic information sheet);</li><li>my / the patient has alternative procedure / treatment / investigation options;</li><li>my / the patient's prognosis, and the risks of not having the procedure / treatment / investigation;</li><li>no guarantee has been made that the procedure / treatment / investigation will improve my / the patient's condition even though it has been carried out with due professional care;</li><li>my / the patient's procedure / treatment / investigation may include a blood transfusion;</li><li>my / the patient's tissues / blood may be removed and be used for diagnosis / management of my condition, stored and disposed of sensitively by the hospital;</li><li>if an immediate life-threatening event happens during my / the patient's procedure / treatment / investigation, I / the patient will be treated based on my discussions with the doctor / clinician or Acute Resuscitation Plan;</li><li>a doctor / clinician other than the consultant / specialist may conduct the procedure / treatment / investigation. I understand this could be a doctor undergoing further training who will be supervised according to relevant professional body guidelines;</li><li>I / the patient was able to ask questions and raise concerns with the doctor / clinician about my / the patient's condition, the proposed procedure / treatment and its risks, and my / the patient's treatment options. My questions and concerns have been discussed and answered to my satisfaction;</li><li>I / the patient understand I have the right to change my mind at any time, including after I have signed this form but, preferably following a discussion with a doctor / clinician;</li><li>I / the patient understand image(s) or video footage may be recorded as part of and during my procedure and that these image(s) or video(s) will assist the doctor / clinician to provide appropriate treatment.</li></ul>",
      "Description": "<h2><span style=\"background-color: transparent;\">Leading Edge Dental's Story</span></h2><p><br></p><p><br></p><p>Our practice was established in Penshurst in the late 1800s by William Crawford. In 1919 his son, John Sydney Crawford, qualified (after serving an apprenticeship) and joined his father's practice. Sometime in the mid-1920s John Sydney Crawford set up his own practice in the main street of Penshurst (see cool old photo).</p><p>In 1953 his son, John Robert Crawford (below right), graduated from the University of Sydney and joined his father practising in Penshurst.</p><p>Young John established his own practice in 1957, building on the vacant site at 16 The Strand. In 1962 John Snr moved into 16 The Strand and practiced there until his retirement in the mid 60's. On March 28, 2001 young John (John Robert Crawford) retired after 48 years of practice.</p><p>The Crawford family can thus proudly, and uniquely, lay claim to treating local people in three separate centuries. The present owner, Brett Lucas Taylor (thats me, below left looking ridiculously young), joined the practice in 1985. He can claim to have treated the locals in two separate centuries, but is not particularly confident of making it three.</p><p>Currently our most loyal active patient is Coral Roberts, who has just clocked up 75 years of continuous care in our practice. Coral first attended as an an 8 year old. I dont want to reveal a ladys age, but you can probably figure the maths out for yourself. Shes still got a few years to go to catch Les Riley, who had been attending for just over 80 years when he passed away at age 97 in 2015. Both have/had a full set of teeth thanks to the good work of Johns Jr and Sr (and me in later years).</p><p>Here is John junior the day he retired in 2001. Sadly he passed away on January 22nd 2016 at the age of 87.</p><p><br></p><p>\"Young Mr Crawford\" is still fondly remembered by many of his old patients who still regularly come in. Apart from the good times with John, this photo helps me fondly remember how much hair I used to have. RIP John. We miss you</p>",
      "Facebook": "",
      "Instagram": "",
      "Twitter": "",
      "LinkedIn": "",
      "Pinterest": "",
      "Tumblr": "",
      "Vimeo": "",
      "YouTube": "",
      "Colour.Primary": "#0088b1",
      "Colour.Accent": "#e20000",
      "Appointment_Cancelling_Hours": "48",
      "Appointment_Cancelling_Policy": "<h2>OUR POLICY ON CANCELLATIONS, FAILURE TO ATTEND AND PRACTICE ETIQUETTE.</h2><p><br></p><p>Here at <strong> {{PracticeName}} </strong> we make every effort to be on time for our patients and ask that you extend the same courtesy to us. If you cannot attend an appointment, you will need us to provide at least<strong> {{Hours}} </strong> <strong>hours</strong> notice.</p><p><br></p><p>This courtesy, on your part, will make it possible for us to give yourappointment to another patient. We understand that situations may arise that would make it impossible for you to give <strong> {{Hours}} hours</strong> notice. Each incident will be considered based upon your appointment history. Missed or cancelled appointments <u>without notice</u> will be charged to your account. Our missed appointment fee is <strong> {{Fee}}</strong></p><p><br></p><p><strong> {{PracticeName}} </strong> reserves the right to request patients who continually;</p><p><br></p><ol><li>Cancel appointments at short notice</li><li>Fail to attendArrive late</li><li>Are rude to our staff</li></ol><p><br></p><p>Respectfully source another dental practice.</p><p><br></p><p><strong> {{PracticeName}} </strong> strives to provide the best care possible for our patients, and keeping to a schedule is the only way we can continue to offer a quality of service to all patients.</p>",
      "SMS_ConfirmAppointment": "1",
      "SMS_AppointmentReminder": "0",
      "AppointmentPageURL": "appointment/F6164E0E29C94FECB264AD2A1B828644?pageTitle=Request%20an%20Appointment&pageDescription=Let%20your%20dentist%20know%20what%20time%20might%20suit%20you%20best%20for%20an%20appointment.%20The%20%20practice%20will%20then%20contact%20you%20to%20arrange%20a%20suitable%20appointment%20date.&showBackground=true&showContact=true&showHeader=true&showPracticeName=true&contactColor=ffffff&contactBackgroundColor=1b8bdd",
      "Default_Buffers_Pre": "0",
      "Default_Buffers_Post": "0",
      "Appointment_Time_Step": "15",
      "Appointment_Limit_To_Days": "10",
      "Appointment_Cancelling_Fee": "12",
      "AssistBrrowerAtPOS_List": "018E6A3E875D44B78043D31ADE8AD174|0E55AC9123CA4D60A30B30BE58625C80|6D55D700BA92014EAD572E48628E6AC7|CC0DA1D9B295664A9F5BED2A1D3335B3|1E23D0F0A443314CB0714973D7A4F0E9|D30962837448644287582000DD474A4B|16D00B9E0622D94A9C4A49724ABF6CA7|E08C8C4F3BD4574C8FF03884A1B130F1|486777CE07E4D14FA759C2A9EEDCD603",
      "Allow_AssistBrrowerAtPOS": "1",
      "TimeZoneCode": "Australia/Perth",
      "TimeZoneValue": "8",
      "Terminal_Code": "SMIL",
      "HealthHistoryEnabled.Inherited": "N",
      "HealthHistoryEnabled.Overridden": "Y",
      "HealthHistoryEnabled.Effective": "N",
      "Health_History_Update_Duration": "100",
      "Health_History_Auto_Update": "1"
    });
  }

  getMerchantProfilePictureStream(ID) {
    if (ID)
      return "https://sandbox.smileright.com.au/api/merchant/practice-picture-stream/544A66F235404B6180493BE2EEC1648B"
    return null

  }



  getMerchantCoverPictureStream(ID) {

    if (ID)
      return "https://sandbox.smileright.com.au/api/merchant/practice-appointment-cover-stream/F6164E0E29C94FECB264AD2A1B828644"
    return null
  }


  getMerchantAppointmentCoverStream(ID) {

    if (ID)
      return "https://sandbox.smileright.com.au/api/merchant/practice-appointment-cover-stream/F6164E0E29C94FECB264AD2A1B828644"
    return null
  }




  getCampaignDetails(ID, body = {}) {

    let params: HttpParams = new HttpParams();
    let options = {};

    for (var key in body) {
      if (body.hasOwnProperty(key) && body[key]) {
        params = params.set(key, body[key]);
      }
    }
    options = {
      search: params
    };
    return observableOf({
      "ID": "F3A782B9F4B90942BB5926257CA4AAAE",
      "DateTimeCreated": "2020-09-10 12:59:57",
      "Merchant_key": "F6164E0E29C94FECB264AD2A1B828644",
      "Merchant.Name": "Smile Right Capital Pty Ltd",
      "Contact_key": "DED48A23F1982847B93DBE40F2903A20",
      "Contact.FirstName": "Aaron",
      "Contact.LastName": "Lavers",
      "Contact.CalculatedName": "Aaron David Lavers",
      "Contact.Email": "aaron@smileright.com.au",
      "Contact.Mobile": "0061432059828",
      "Label": "test cc",
      "Description": "test",
      "Template.Tag": "campaign-M-CustomersAndProspects-Comm15-clear-correct",
      "Template.Label": "Clear Correct aligner information email",
      "WhenToSend": "2020-09-10 12:59:16",
      "Status.Code": "CMPL",
      "Status.Label": "Complete",
      "UserData": [
        {
          "Amount": 2505,
          "ProductGroup": "GPF"
        }
      ],
      "Template.LandingPageURL": "https://smileright.com.au/product/(page:main/clear-correct)",
      "Template.MetaData": {
        "Amount": {
          "Label": "Total Treatment Price",
          "Type": "R",
          "Mandatory": "1"
        },
        "ProductGroup": {
          "Label": "Product group",
          "Type": "T",
          "Mandatory": "1",
          "Lookup": {
            "Table": "ProductGroup",
            "CodeField": "Group.Code",
            "LabelField": "Group.Label",
            "FilterField": "Available",
            "FilterValue": "1"
          }
        }
      }
    });
  }


  getOneMerchant(ID, body) {
    let params: HttpParams = new HttpParams();
    let options = {};

    for (var key in body) {
      if (body.hasOwnProperty(key) && body[key]) {
        params = params.set(key, body[key]);
      }
    }
    options = {
      search: params
    };

    return this.http
      .get(environment.nodeUrl + "/merchant/public/" + ID, options).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }


  investApplyForm(payload) {
    return this.http
      .post(`${environment.nodeUrl}/merchant-prospect/investment/simple`, payload).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  difApplicationForm(payload) {
    return this.http
      .post(`${environment.nodeUrl}/merchant-prospect/investment`, payload).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  inviteFriendDentist(payload) {
    return this.http
      .post(`${environment.nodeUrl}/merchant-prospect/invite/friend`, payload).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }


  createInvitationMarketing(id, payload) {
    return this.http
      .post(`${environment.nodeUrl}/invitation/marketing/${id}`, payload).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }


  getTestimonyList() {
    return this.http
      .get(`${environment.nodeUrl}/testimony`).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  getOneTestimony(id): Observable<any> {
    return this.http
      .get(environment.nodeUrl + "/testimony/" + id, {}).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  // getTestimonyGlobalList() {
  //   return this.http
  //   .get(`${environment.nodeUrl}/testimony/global`)
  //   .map((res:HttpResponse<any>) => res['data']);
  // }

  createTestimony(payload) {
    return this.http
      .post(`${environment.nodeUrl}/testimony`, payload).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  createMerchantProspectTestimony(payload) {
    return this.http
      .post(`${environment.nodeUrl}/testimony/user`, payload).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  // editTestimony(payload) {
  //   return this.http
  //   .put(`${environment.nodeUrl}/testimony/:id`, payload )
  //   .map((res:HttpResponse<any>) => res['data']);
  // }

  // deleteTestimony() {
  //   return this.http
  //   .delete(`${environment.nodeUrl}/testimony/:id` )
  //   .map((res:HttpResponse<any>) => res['data']);
  // }

  // approveTestimony(payload) {
  //   return this.http
  //   .put(`${environment.nodeUrl}/testimony/:id/global`, payload)
  //   .map((res:HttpResponse<any>) => res['data']);
  // }

  // disableTestimony(payload) {
  //   return this.http
  //   .put(`${environment.nodeUrl}/testimony/:id/global`, payload)
  //   .map((res:HttpResponse<any>) => res['data']);
  // }

  getPaymentMethods(productKey) {
    return this.http
      .get(`${environment.nodeUrl}/paymentTypeProduct/${productKey}`).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }


  searchByBsb(bsb) {
    return this.http
      .get(`${environment.nodeUrl}/bankBranch/search/bsb/${bsb}`).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  getBankListByName(name) {
    return this.http
      .get(`${environment.nodeUrl}/bank/` + name).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  isMerchantProspectPartner() {
    return this.http
      .get(`${environment.nodeUrl}/merchant-prospect/bank`).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }


  getBankList() {
    return this.http
      .get(`${environment.nodeUrl}/bank/`).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  getBanDetails(id) {
    return this.http
      .get(`${environment.nodeUrl}/bankBranch/search/code/${id}`).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }


  getBankBysuburb(code, suburb) {
    return this.http
      .get(
        `${environment.nodeUrl}/bankBranch/search/code/${code}/suburb/${suburb}`
      ).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }


  isPromoterOrAdmin(): Observable<any> {

    if (this.currentUser) {
      let role;
      role = this.currentUser['Role'];
      if (role === "admin" || role === "promoter") {
        return observableOf(true)
      }
      else
        return observableOf(false)

    } else {
      return this.http
        .get(this.userUrl).pipe(
          map((res: HttpResponse<any>) => {
            this.currentUser = res;


            let role;
            if (this.currentUser && this.currentUser.success && this.currentUser.data['Role'] && this.currentUser.data['Role']) {
              role = this.currentUser.data['Role'];
              if (role === "admin" || role === "promoter") {
                return true;
              }
              else
                return false
            }
            else
              return false;


          }),
          catchError((error: any): Observable<any> => {
            return observableThrowError(error);
          }));
    }

  }



  isPractice(): Observable<any> {

    if (this.currentUser) {
      let role;
      role = this.currentUser['Role'];
      if (role == "admin" || role == "promoter" || role == "merchant" || role == "merchant-admin" || role == "funder") {
        return observableOf(true)
      }
      else
        return observableOf(false)

    } else {
      return this.http
        .get(this.userUrl).pipe(
          map((res: HttpResponse<any>) => {
            this.currentUser = res;


            let role;
            if (this.currentUser && this.currentUser.success && this.currentUser.data['Role'] && this.currentUser.data['Role']) {
              role = this.currentUser.data['Role'];
              if (role === "admin" || role === "promoter" || role === "merchant" || role === "funder") {
                return true;
              }
              else
                return false
            }
            else
              return false;


          }),
          catchError((error: any): Observable<any> => {
            return observableThrowError(error);
          }));
    }

  }


  isAdmin(): Observable<any> {

    if (this.currentUser) {
      let role;
      role = this.currentUser['Role'];
      if (role === "admin") {
        return observableOf(true)
      }
      else
        return observableOf(false)

    } else {
      return this.http
        .get(this.userUrl).pipe(
          map((res: HttpResponse<any>) => {
            this.currentUser = res;



            let role;
            if (this.currentUser && this.currentUser.success && this.currentUser.data['Role'] && this.currentUser.data['Role']) {
              role = this.currentUser.data['Role'];
              if (role === "admin") {
                return true;
              }
              else
                return false
            }
            else
              return false;


          }),
          catchError((error: any): Observable<any> => {
            return observableThrowError(error);
          }));
    }
  }




  isMerchantProspect(): Observable<any> {

    if (this.currentUser) {
      let role;
      role = this.currentUser['Role'];
      if (role === "merchantProspect") {
        return observableOf(true)
      }
      else
        return observableOf(false)

    } else {
      return this.http
        .get(this.userUrl).pipe(
          map((res: HttpResponse<any>) => {
            this.currentUser = res;



            let role;
            if (this.currentUser && this.currentUser.success && this.currentUser.data['Role'] && this.currentUser.data['Role']) {
              role = this.currentUser.data['Role'];
              if (role === "merchantProspect") {
                return true;
              }
              else
                return false
            }
            else
              return false;


          }),
          catchError((error: any): Observable<any> => {
            return observableThrowError(error);
          }));
    }
  }


  login(body): Observable<any> {
    return this.http
      .post(this.loginUrl, body).pipe(
        map((res: HttpResponse<any>) => res['data']),
        catchError((error: any) => observableThrowError(error)));
  }

  checkUserEmail(payload): Observable<any> {
    let params: HttpParams = new HttpParams();
    let options = {};

    for (var key in payload) {
      if (payload.hasOwnProperty(key)) {
        params = params.set(key, payload[key]);
      }
    }

    options = {
      params: params
    };
    return this.http
      .get(environment.nodeUrl + "/auth/password/forgot", options).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  forgotPassword(body) {
    return this.http
      .post(environment.nodeUrl + "/auth/password/forgot/", body).pipe(
        map((res: HttpResponse<any>) => res['data']))
  }

  resetPassword(body) {
    return this.http
      .post(environment.nodeUrl + "/auth/password/reset/", body).pipe(
        map((res: HttpResponse<any>) => res['data']))
  }

  checkToken(body) {
    return this.http
      .post(environment.nodeUrl + "/auth/check/token/", body).pipe(
        map((res: HttpResponse<any>) => res['data']))
  }



  changePassword(payload) {
    return this.http
      .put(`${environment.nodeUrl}/current/password`, payload);
  }


  getCurrentUserForce(): Observable<any> {




    return this.http
      .get(this.userUrl).pipe(
        map((res: HttpResponse<any>) => {
          this.currentUser = res['data'];

          this.getCurrentUser();
          return this.currentUser;
        }),
        catchError((error: any): Observable<any> => {
          return observableThrowError(error);
        }));

  }

  getCurrentUser(): Observable<any> {

    if (this.currentUser != null) {
      return observableOf(this.currentUser);
    } else {
      return this.http
        .get(this.userUrl).pipe(
          map((res: HttpResponse<any>) => {
            this.currentUser = res['data'];

            return this.currentUser;
          }),
          catchError((error: any) => {
            return observableOf(null);
          }));
    }
  }


  getCurrentSessionType(): Observable<any> {


    if (this.currentUser) {


      let role;
      role = this.currentUser['Role'];


      if (role == "admin" || role == "promoter") {
        return observableOf("admin")
      }

      else if (role == "merchant") {
        return observableOf("merchant")
      }
      else if (role == "merchant-prospect") {
        return observableOf("merchantProspect")
      }
      else if (role == "merchant-admin") {
        return observableOf("merchant")
      }

      else if (role == "supplier") {
        return observableOf("supplier")
      }

      else if (role == "funder") {
        return observableOf("funder")
      }



      else if (role == "customer") {
        return observableOf("customer")
      }
      else
        return observableOf("guest")

    } else {
      return this.http
        .get(this.userUrl).pipe(
          map((res: HttpResponse<any>) => {


            let _res = res;

            if (!_res || (_res && !_res['data'])) {
              return "guest";
            }
            this.currentUser = _res['data'];


            let role;
            if (this.currentUser && this.currentUser['Role']) {
              role = this.currentUser['Role'];



              if (role == "admin" || role == "promoter") {
                return "admin"
              }

              else if (role == "merchant" || role == "merchant-admin") {
                return "merchant"
              }
              else if (role == "merchant-prospect") {

                return "merchantProspect"
              }

              else if (role == "funder") {

                return "funder"
              }

              else if (role == "supplier") {

                return "supplier"
              }

              else if (role == "customer") {

                return "customer"
              }

              else if (role == "consumer") {
                return "consumer"
              }
              else
                return "guest"
            }
            else
              return "guest"


          }),
          catchError((error: any): Observable<any> => {
            return observableThrowError("guest");
          }));
    }

  }




  editCurrentUser(data): Observable<any> {


    return this.http
      .put(`${environment.nodeUrl}/current/profile`, data);

  }




  logout(): Observable<any> {


    return this.http
      .get(this.logoutUrl).pipe(
        map((res: HttpResponse<any>) => {

          this.currentPractice = null;
          this.currentUser = null;
          return res['data']
        }),
        catchError((error: any) => observableThrowError(error)));
  }
  initCurrUser() {
    this.currentUser = null;
  }


  refreshSession() {
    return this.http
      .post(`${environment.nodeUrl}/current/session/refresh`, null).pipe(
        map((res: HttpResponse<any>) => {


          return res['data']

        }));
  }


  public get state() {
    return (this._state = this._clone(this._state));
  }
  /**
   * Never allow mutation
   */
  public set state(value) {
    throw new Error("do not mutate the `.state` directly");
  }


  public get(prop?: any) {
    /**
     * Use our state getter for the clone.
     */
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }



  getSimpleLookup(category: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    let options = {};
    params = params.set('Category', category);
    options = {
      params: params
    };
    return this.http
      .get(environment.nodeUrl + "/simpleLookup", options).pipe(
        map((res: HttpResponse<any>) => {
          return res['data'];
        }));
  }


  getCodeLookup(category: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    let options = {};
    params = params.set('Category', category);
    options = {
      params: params
    };
    return this.http
      .get(environment.nodeUrl + "/codeLookup", options).pipe(
        map((res: HttpResponse<any>) => {
          return res['data'];
        }));



  }

  public set(prop: string, value: any) {
    /**
     * Internally mutate our state.
     */
    return (this._state[prop] = value);
  }




  public getSuburbByPostCode(postCode, body = {}) {
    let params: HttpParams = new HttpParams();
    let options = {};

    for (var key in body) {
      if (body.hasOwnProperty(key) && body[key]) {
        params = params.set(key, body[key]);
      }
    }

    options = {
      params: params
    };


    return observableOf([
      {
        "ID": "86268C875395FA478F4D6FBFF34133DB",
        "Locality": "City Delivery Centre",
        "State": "WA",
        "Postcode": "6000"
      },
      {
        "ID": "58B562B82AC2354993EB783B8B766B1F",
        "Locality": "Perth",
        "State": "WA",
        "Postcode": "6000"
      },
      {
        "ID": "97DC60020831F54E88DC091BD88610E3",
        "Locality": "Perth Gpo",
        "State": "WA",
        "Postcode": "6000"
      }
    ])

  }


  public getSuburbByStateByPostCode(name, state, postCode, body = {}) {
    let params: HttpParams = new HttpParams();
    let options = {};

    for (var key in body) {
      if (body.hasOwnProperty(key) && body[key]) {
        params = params.set(key, body[key]);
      }
    }
    options = {
      params: params
    };
    return this.http
      .get(`${environment.nodeUrl}/suburb/${name}/${state}/${postCode}`, options).pipe(
        map((res: HttpResponse<any>) => res["data"]));

  }



  public getSuburb(name, body = {}) {
    let params: HttpParams = new HttpParams();
    let options = {};

    for (var key in body) {
      if (body.hasOwnProperty(key) && body[key]) {
        params = params.set(key, body[key]);
      }
    }
    options = {
      params: params
    };
    return this.http
      .get(`${environment.nodeUrl}/suburb/${name}`, options).pipe(
        map((res: HttpResponse<any>) => res["data"]));
  }

  public getSuburbByState(suburb, state, body = {}) {
    let params: HttpParams = new HttpParams();
    let options = {};
    for (var key in body) {
      if (body.hasOwnProperty(key)) {
        params = params.set(key, body[key]);
      }
    }
    options = {
      params: params
    };
    return this.http
      .get(`${environment.nodeUrl}/suburb/${suburb}/${state}`, options).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }



  public createSimpleProspect(data): Observable<any> {
    return this.http
      .post(`${environment.nodeUrl}/prospect/simple`, data);
  }



  messageUs(data) {


    return this.http
      .post(`${environment.nodeUrl}/message/us`, data);
  }



  editProfile(payload) {
    return this.http
      .put(`${environment.nodeUrl}/current/profile`, payload);
  }

  editCurrentPractice(payload) {

    return this.http
      .put(`${environment.nodeUrl}/current/practice`, payload).pipe(
        map((res: HttpResponse<any>) => res["data"]));

  }

  getCurrentCurrent(payload) {

    return this.http
      .get(`${environment.nodeUrl}/contact/current`, {}).pipe(
        map((res: HttpResponse<any>) => res["data"]));

  }


  getCurrentPractice() {

    if (this.currentPractice != null) {
      return observableOf(this.currentPractice);
    } else {
      return this.http
        .get(`${environment.nodeUrl}/current/practice`, {}).pipe(
          map((res: HttpResponse<any>) => {
            this.currentPractice = res['data'];

            return this.currentPractice;
          }),
          catchError((error: any) => {
            return observableThrowError(error);
          }));
    }

  }


  public getProductList(): Observable<any> {
    return this.http
      .get(`${environment.nodeUrl}/product/public`, {}).pipe(
        map((res: HttpResponse<any>) => res["data"]));
  }

  public getProductGroupList(payload): Observable<any> {
    let params: HttpParams = new HttpParams();
    let options = {};
    for (var key in payload) {
      if (payload.hasOwnProperty(key) && payload[key]) {
        params = params.set(key, payload[key]);
      }
    }
    options = {
      params: params
    };

    return observableOf([
      {
        "DateTimeCreated": "2019-05-06 16:37:15",
        "Group.Code": "SPCM",
        "Group.Label": "Orthodontist - Membership",
        "Available": "1"
      },
      {
        "DateTimeCreated": "2019-05-06 16:37:15",
        "Group.Code": "GPM",
        "Group.Label": "General and other Specialist Practitioner - Membership",
        "Available": "1"
      },
      {
        "DateTimeCreated": "2019-05-06 16:37:15",
        "Group.Code": "SPCF",
        "Group.Label": "Orthodontist - Finance",
        "Available": "1"
      },
      {
        "DateTimeCreated": "2019-05-06 16:37:15",
        "Group.Code": "GPF",
        "Group.Label": "General and other Specialist Practitioner - Finance",
        "Available": "1"
      }
    ])
  }

  getOneProductGroup(payload): Observable<any> {
    let params: HttpParams = new HttpParams();
    let options = {};
    for (var key in payload) {
      if (payload.hasOwnProperty(key) && payload[key]) {
        params = params.set(key, payload[key]);
      }
    }
    options = {
      params: params
    };
    return this.http
      .get(`${environment.nodeUrl}/product-group`, options).pipe(
        map((res: HttpResponse<any>) => res["data"]));
  }

  public getPromoterProductListByGroupCode(payload): Observable<any> {
    let params: HttpParams = new HttpParams();
    let options = {};
    for (var key in payload) {
      if (payload.hasOwnProperty(key) && payload[key]) {
        params = params.set(key, payload[key]);
      }
    }
    options = {
      params: params
    };
    return this.http
      .get(`${environment.nodeUrl}/product/promoter`, options).pipe(
        map((res: HttpResponse<any>) => res["data"]));
  }

  public getProductListByGroupCode(payload): Observable<any> {
    let params: HttpParams = new HttpParams();
    let options = {};
    for (var key in payload) {
      if (payload.hasOwnProperty(key) && payload[key]) {
        params = params.set(key, payload[key]);
      }
    }
    options = {
      params: params
    };
    return this.http
      .get(`${environment.nodeUrl}/product/public`, options).pipe(
        map((res: HttpResponse<any>) => res["data"]));
  }











  public getProductID(id): Observable<any> {
    return this.http
      .get(`${environment.nodeUrl}/product/${id}`, {}).pipe(
        map((res: HttpResponse<any>) => res["data"]));
  }


  public getPublicSettings(): Observable<any> {
    return this.http
      .get(`${environment.nodeUrl}/settings/public`, {}).pipe(
        map((res: HttpResponse<any>) => res['data'][0]));
  }

  public getThemeCSSFile(id): Observable<any> {
    return this.http
      .get(`${environment.nodeUrl}/theme/${id}/css`, {}).pipe(
        map((res: HttpResponse<any>) => res["data"]));
  }

  public verifyPhone(prefix, phoneNumber): Observable<any> {
    return this.http
      .get(`${environment.nodeUrl}/kleber/phone/verify/${prefix}/${phoneNumber}`);
  }

  public verifyEmail(email): Observable<any> {
    return this.http
      .get(`${environment.nodeUrl}/kleber/email/verify/${email}`);
  }

  getCalculator(productID, payload) {
    let params: HttpParams = new HttpParams();
    let options = {};

    for (const key in payload) {
      if (payload.hasOwnProperty(key)) {
        params = params.set(key, payload[key]);
      }
    }
    options = {
      search: params
    };
    return this.http
      .get(environment.nodeUrl + '/product/calculator/' + productID, options).pipe(
        map((res: HttpResponse<any>) => res["data"]));
  }

  public getCalculatorCustomer(productID, payload) {
    let params: HttpParams = new HttpParams();
    let options = {};
    for (var key in payload) {
      if (payload.hasOwnProperty(key) && payload[key]) {
        params = params.set(key, payload[key]);
      }
    }
    options = {
      params: params
    };
    return observableOf({
      "product": {
        "TermsAndConditions": "",
        "MarketingLabel": "No Deposit Loan",
        "Parameter.PaymentFrequencies": "1-2-4",
        "SubType": "With Interest",
        "Parameter.MinLoanValue": "2001",
        "Parameter.MaxLoanValue": "50000"
      },
      "estimate": {
        "NumberOfRepayments": "104",
        "Deposit": "0",
        "Frequency.Code": "1",
        "Frequency.Units": "Weekly",
        "Repayments.First": "25.44",
        "Repayments.Regular": "25.44",
        "Repayments.Last": "24.3",
        "Repayments.Total": "2644.62",
        "Repayments.Description": "Beginning one week after acceptance 103 weekly payments of $25.44, and one final payment of $24.30, over 104 weeks.\n24 monthly account keeping fees of $13.",
        "Repayments.Approx.Monthly": "110.5",
        "Repayments.Approx.Fortnightly": "50.86",
        "Repayments.Approx.Weekly": "25.43",
        "Repayments.Approx.Daily": "3.63",
        "Interest.Rate": "18.88",
        "Interest.Total": "444.62",
        "Interest.Customer": "444.62",
        "Interest.Merchant": "0",
        "InterestFreePeriod.Num": "0",
        "InterestFreePeriod.Units.Label": "",
        "InterestFreePeriod.Units.Code": "0",
        "Fees.Total": "412",
        "Fees.Establishment": "100",
        "Fees.AccountKeeping": "312",
        "Fees.Account_Keeping.Approx.PerRepayment": "3",
        "StampDuty.Customer": "",
        "StressTest.BufferInMonths": "0",
        "StressTest.Approx.Monthly": "110.5",
        "StressTest.Approx.PerPayment": "25.44",
        "StressTest.NumberOfMonths": "24",
        "StressTest.NumberOfPayments": "104"
      },
      "duration": {
        "Weeks.Default": "104",
        "Weeks.Min": "26",
        "Weeks.Max": "104",
        "Weeks.Code": "1",
        "Weeks.LocalisedLabel": "Weeks",
        "Fortnights.Default": "52",
        "Fortnights.Min": "13",
        "Fortnights.Max": "52",
        "Fortnights.Code": "2",
        "Fortnights.LocalisedLabel": "Fortnights",
        "Months.Default": "24",
        "Months.Min": "6",
        "Months.Max": "24",
        "Months.Code": "4",
        "Months.LocalisedLabel": "Months",
        "DefaultFrequency.Code": "1",
        "DefaultFrequency.InternalLabel": "Weeks",
        "DefaultFrequency.LocalisedLabel": "Weeks",
        "PermittedFrequencies.InternalLabels": "Weeks,Fortnights,Months",
        "PermittedFrequencies.LocalisedLabels": "Weeks,Fortnights,Months"
      }
    })
  }

  calculDuration(duration, sourceFreq, targetFreq) {


    let payload = {
      duration,
      sourceFreq,
      targetFreq
    }

    return observableOf(52)
  }


  /**
   * @description
   * Contact us
   * @param data
   */
  public contactus(data): Observable<any> {
    return this.http
      .post(`${environment.nodeUrl}/message/us`, data);
  }


  public becomePartner(data): Observable<any> {
    return this.http
      .post(`${environment.nodeUrl}/merchant-prospect/partnership`, data);
  }

  public getSimplePages(): Observable<any> {
    return this.http
      .get(`${environment.nodeUrl}/simplepage`);
  }

  /**
   * @description
   * Create contact
   * @param data
   */
  public createContact(data): Observable<any> {
    return this.http
      .post(`${environment.nodeUrl}/hubspot/contact`, data);
  }

  public createWebMerchantProspect(data): Observable<any> {
    return this.http
      .post(`${environment.nodeUrl}/merchant-prospect/web`, data);
  }


  public createWebPartner(data): Observable<any> {
    return this.http
      .post(`${environment.nodeUrl}/operator/partner`, data);
  }

  /**
   * @description
   * Create form
   * @param data
   */
  public createForm(data): Observable<any> {
    return this.http
      .post(`${environment.nodeUrl}/hubspot/form`, data).pipe(
        map((res: HttpResponse<any>) => res["data"]));
  }

  private _clone(object: InternalStateType) {
    /**
     * Simple object clone.
     */
    return JSON.parse(JSON.stringify(object));
  }

  getInvitationByWakandaIDorID(ID): Observable<any> {
    return this.http
      .get(environment.nodeUrl + "/invitation/wakandaID-ID/" + ID).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  isLogin(): Observable<any> {
    if (this.currentUser) {
      return observableOf(true);
    } else {
      return this.http
        .get(this.userUrl).pipe(
          map((res: HttpResponse<any>) => {

            if (res) {

              return true;
            }
            else {
              return false
            }
          }),
          catchError((error: any): Observable<any> => {
            return observableOf(false);
          }));
    }
  }

  getCustomerDetails(ID): Observable<any> {
    return this.http
      .get(environment.nodeUrl + "/customer/public/" + ID).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  getProspectDetails(ID): Observable<any> {
    return this.http
      .get(environment.nodeUrl + "/prospect/public/" + ID).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  getCustomerProspect(ID, payload = {}): Observable<any> {
    let params: HttpParams = new HttpParams();
    let options = {};

    if (payload) {
      for (const key in payload) {
        if (payload.hasOwnProperty(key) && payload[key]) {
          params = params.set(key, payload[key]);
        }
      }
      options = {
        search: params
      };
    }
    return this.http
      .get(environment.nodeUrl + "/customer-prospect/public/" + ID, options).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }


  getGeneralOperator(ID, payload = {}): Observable<any> {
    let params: HttpParams = new HttpParams();
    let options = {};

    if (payload) {
      for (const key in payload) {
        if (payload.hasOwnProperty(key) && payload[key]) {
          params = params.set(key, payload[key]);
        }
      }
      options = {
        search: params
      };
    }
    return observableOf({
      "ID": "9168DA76C591A84A9CE773398F7EB747",
      "Name": "Consumer3",
      "Salutation": "Mr",
      "MaternalName": "",
      "FirstName": "Test",
      "MiddleName": "",
      "CalculatedName": "Test Consumer3",
      "Dear": "Dear Mr Consumer3",
      "Occupation": "",
      "phones.Number": "",
      "mobiles.Number": "0061301030108",
      "emails.Email": "elmetni.hamza@gmail.com",
      "Gender.Code": "M",
      "Gender.Label": "Male",
      "table": "CustomersAndProspects",
      "cardType": "patient"
    })
  }



  queryOneCustomerProspect(ID, merchantID, payload = {}): Observable<any> {
    let params: HttpParams = new HttpParams();
    let options = {};
    if (payload) {
      for (const key in payload) {
        if (payload.hasOwnProperty(key) && payload[key]) {
          params = params.set(key, payload[key]);
        }
      }
      options = {
        search: params
      };
    }
    return this.http
      .get(environment.nodeUrl + "/customer-prospect/query/" + merchantID + "/" + ID, options).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }




  getExistingPatientDetails(ID): Observable<any> {
    return this.http
      .get(environment.nodeUrl + "/existing-patient/" + ID).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  getContactDetails(ID) {
    return this.http
      .get(environment.nodeUrl + "/contact/" + ID).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }
  getContactPublicDetails(ID) {
    return this.http
      .get(environment.nodeUrl + "/contact/public/" + ID).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }


  getContactProfilePic(ID) {
    return this.http
      .get(`${environment.nodeUrl}/contact/profile-picture/` + ID).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  getBeneficiaryDetails(ID, payload = null, isPromoterOrAdmin = true): Observable<any> {
    let params: HttpParams = new HttpParams();
    let options = {};
    if (payload) {
      for (const key in payload) {
        if (payload.hasOwnProperty(key) && payload[key]) {
          params = params.set(key, payload[key]);
        }
      }
      options = {
        search: params
      };
    }
    if (isPromoterOrAdmin === true) {
      return this.http
        .get(environment.nodeUrl + "/beneficiary/global/" + ID, options).pipe(
          map((res: HttpResponse<any>) => res['data']));
    }
    else {
      return this.http
        .get(environment.nodeUrl + "/beneficiary/" + ID, options).pipe(
          map((res: HttpResponse<any>) => res['data']));
    }
  }

  getBeneficiaryProfilePic(ID) {
    return this.http
      .get(`${environment.nodeUrl}/beneficiary/profile-picture/` + ID).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  getfullOperatorDetails(id) {
    return this.http
      .get(`${environment.nodeUrl}/operator/full/${id}`).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  getOperatorProfilePic(ID) {
    return this.http
      .get(`${environment.nodeUrl}/operator/profile-picture/` + ID).pipe(
        map((res: HttpResponse<any>) => res['data']));
  }

  messageUserUser(id, data) {
    return this.http
      .post(`${environment.nodeUrl}/message/user/user/${id}`, data)
  }

  messageUserGuest(data) {
    return this.http
      .post(`${environment.nodeUrl}/message/user/guest`, data)
  }

  messageUserInvitation(id, data) {
    return this.http
      .post(`${environment.nodeUrl}/message/user/invitation/${id}`, data)
  }

  messageUserUs(data) {
    return this.http
      .post(`${environment.nodeUrl}/message/user/us`, data)
  }

  messageGuestUs(data) {
    return this.http
      .post(`${environment.nodeUrl}/message/guest/us`, data)
  }



  messageInvitationUs(id, data) {
    return this.http
      .post(`${environment.nodeUrl}/message/invitation/us/${id}`, data)
  }

  messageInvitationUser(id, data) {
    return this.http
      .post(`${environment.nodeUrl}/message//invitation/user/${id}`, data)
  }

  getShortcutLink(id) {


    return this.http
      .get(`${environment.nodeUrl}/shortcut/` + id, {}).pipe(
        map((res: Response) => res['data']));


  }


  getMarketingTemplatePromoterCode(ID) {



    return this.http
      .get(`${environment.nodeUrl}/marketing/template-promoter/code/` + ID, {}).pipe(
        map((res: Response) => res['data']));



  }

  requestAppointmentMarketing(payload) {



    return this.http
      .post(`${environment.nodeUrl}/appointment/marketing`, payload).pipe(
        map((res: Response) => res['data']));



  }
  requestAppointmentMerchant(payload) {



    return observableOf({
      "ID": "DCA3EA8E22FB6A4D9FD917632C49D3B8",
      "DateTimeCreated": "2021-04-01 13:39:23",
      "LastModified": "8T1IYTI6NE",
      "LastModified_Human": "2021-04-01 13:39:23",
      "Label": "Request an Appointment",
      "Merchant_key": "F6164E0E29C94FECB264AD2A1B828644",
      "Merchant_CalculatedName": "Leading Edge Dental",
      "Merchant_TradingAs": "Leading Edge Dental",
      "Merchant_Email": "Steve@ipventures.com.au",
      "Merchant_Phone": "1300793989",
      "MerchantContact_key": "",
      "MerchantContact_CalculatedName": "",
      "MerchantContact_Email": "",
      "MerchantContact_Phone": "",
      "CustomerOrProspect_Key": "D35F54BB18CE58458BD5EEF4E05225B9",
      "CustomerOrProspect_CalculatedName": "Test Test",
      "CustomerOrProspect_Email": "elmetni.hamza@gmail.com",
      "CustomerOrProspect_Phone": "",
      "CustomerOrProspect_Mobile": "0061101010101",
      "CustomerOrProspect_FirstName": "Test",
      "CustomerOrProspect_Name": "Test",
      "Status.Code": "REQUESTED",
      "Status.Label": "Requested",
      "Source.Code": "PRCT_WEBSITE",
      "Source.Label": "Practice Website",
      "Date_Requested": "2021-04-01",
      "Date_Merchant_Confirmed": "0000-00-00",
      "Date_Booked": "0000-00-00",
      "Date_Rescheduled": "0000-00-00",
      "Date_Canceled": "0000-00-00",
      "Date_Merchant_Canceled": "0000-00-00",
      "Date_Attended": "0000-00-00",
      "Date_Missed": "0000-00-00",
      "Date_Request_Date_Change": "0000-00-00",
      "Date_Request_Reschedule": "0000-00-00",
      "Date_Confirmation": "0000-00-00",
      "CampaignMessage_key": "",
      "Campaign_Key": "",
      "Invitation_key": "",
      "Active": "1",
      "BestAppointment.Code": "Weekend",
      "BestAppointment.Label": "Weekend",
      "Type.Code": "SoreTooth",
      "Type.Label": "Sore Tooth",
      "Type.Description": "Oral pain can happen for a lot of different reasons. Take note of some details of pain you�re feeling, like whether it�s dull, sharp, or throbbing. Also take notice of when the pain occurs, such as when you bite down. Your dentist will have a number of ways to identify any problems, but extra information you can provide will help solve the issue more quickly.",
      "SubType.Code": "",
      "SubType.Label": "",
      "SubType.Description": "",
      "Comment": "test",
      "Date": "0000-00-00",
      "Time": "00:00:00",
      "Merchant_Comment": "",
      "Canceled_Comment": "",
      "Rescheduled_Comment": "",
      "Missed_Comment": "",
      "Request_Reschedule_Comment": "",
      "Request_Date_Change_Comment": "",
      "Canceled_Merchant_Comment": "",
      "Confirmation_Merchant_Comment": "",
      "Merchant_SMS_ConfirmAppointment": "1",
      "Merchant_SMS_AppointmentReminder": "0",
      "ConfirmationBySMS": "0",
      "ReminderBySMS": "0",
      "Type.DefaultDuration": "60",
      "SubType.DefaultDuration": "",
      "Date_End": "0000-00-00",
      "Time_End": "00:00:00",
      "Type.Buffers_Pre": "0",
      "Type.Buffers_Post": "0",
      "SubType.Buffers_Pre": "",
      "SubType.Buffers_Post": "",
      "Buffers_Pre": "",
      "Buffers_Post": "",
      "Date_Merchant": "0000-00-00",
      "Time_Merchant": "00:00:00",
      "Date_Merchant_End": "0000-00-00",
      "Time_Merchant_End": "00:00:00",
      "Google_Calendar_Consumer_Key": "",
      "Apple_Calendar_Consumer_Key": "",
      "Microsoft_Calendar_Consumer_Key": "",
      "Outlook_Calendar_Consumer_Key": "",
      "Google_Calendar_Merchant_Key": "",
      "Apple_Calendar_Merchant_Key": "",
      "Microsoft_Calendar_Merchant_Key": "",
      "Outlook_Calendar_Merchant_Key": "",
      "Invitation.TreatmentValue": "0",
      "Invitation.DateToBeSent": "0000-00-00",
      "Campaign.Label": "",
      "Campaign.Description": "",
      "Campaign.DateTimeCreated": ""
    })



  }

  getTradingHourListGlobal(payload) {
    let params: HttpParams = new HttpParams();
    let options = {};

    for (const key in payload) {
      if (payload.hasOwnProperty(key)) {
        params = params.set(key, payload[key]);
      }
    }

    options = {
      params: params
    };

    return observableOf([
      {
        "ID": "9274EB05CF39664BA6CA8B06ADF33DBF",
        "DateTimeCreated": "2019-01-16 18:11:32",
        "Merchant_key": "544A66F235404B6180493BE2EEC1648B",
        "DayOfWeek.Code": "1",
        "DayOfWeek.Label.Singular": "Sunday",
        "DayOfWeek.Label.Plural": "Sundays",
        "OpeningTime": "08:30:00",
        "ClosingTime": "00:00:00",
        "TimeZone": "Australia/Sydney",
        "NotOpen": "1",
        "Notes": "",
        "Contact_Key": "",
        "Is_Default": "0"
      },
      {
        "ID": "4545C71C1117E941A5F513988B45B6FB",
        "DateTimeCreated": "2019-01-16 13:59:17",
        "Merchant_key": "544A66F235404B6180493BE2EEC1648B",
        "DayOfWeek.Code": "2",
        "DayOfWeek.Label.Singular": "Monday",
        "DayOfWeek.Label.Plural": "Mondays",
        "OpeningTime": "08:30:00",
        "ClosingTime": "17:00:00",
        "TimeZone": "Australia/Sydney",
        "NotOpen": "0",
        "Notes": "",
        "Contact_Key": "",
        "Is_Default": "0"
      },
      {
        "ID": "1DD859C4E93A2F4685D7495257AA3A68",
        "DateTimeCreated": "2019-01-16 10:55:04",
        "Merchant_key": "544A66F235404B6180493BE2EEC1648B",
        "DayOfWeek.Code": "3",
        "DayOfWeek.Label.Singular": "Tuesday",
        "DayOfWeek.Label.Plural": "Tuesdays",
        "OpeningTime": "08:30:00",
        "ClosingTime": "17:00:00",
        "TimeZone": "Australia/Sydney",
        "NotOpen": "0",
        "Notes": "",
        "Contact_Key": "",
        "Is_Default": "0"
      },
      {
        "ID": "DDAA075DC207824F92B0CEDFDA6AFF97",
        "DateTimeCreated": "2019-01-16 17:58:36",
        "Merchant_key": "544A66F235404B6180493BE2EEC1648B",
        "DayOfWeek.Code": "4",
        "DayOfWeek.Label.Singular": "Wednesday",
        "DayOfWeek.Label.Plural": "Wednesdays",
        "OpeningTime": "08:30:00",
        "ClosingTime": "17:00:00",
        "TimeZone": "Australia/Sydney",
        "NotOpen": "0",
        "Notes": "",
        "Contact_Key": "",
        "Is_Default": "0"
      },
      {
        "ID": "B2FAC7C4D4B62243BE6604F83EEC5CE7",
        "DateTimeCreated": "2019-01-16 17:58:36",
        "Merchant_key": "544A66F235404B6180493BE2EEC1648B",
        "DayOfWeek.Code": "5",
        "DayOfWeek.Label.Singular": "Thursday",
        "DayOfWeek.Label.Plural": "Thursdays",
        "OpeningTime": "08:30:00",
        "ClosingTime": "17:00:00",
        "TimeZone": "Australia/Sydney",
        "NotOpen": "0",
        "Notes": "",
        "Contact_Key": "",
        "Is_Default": "0"
      },
      {
        "ID": "D84077DCD28FED4F8FDA7E7930154A6A",
        "DateTimeCreated": "2019-01-16 17:58:37",
        "Merchant_key": "544A66F235404B6180493BE2EEC1648B",
        "DayOfWeek.Code": "6",
        "DayOfWeek.Label.Singular": "Friday",
        "DayOfWeek.Label.Plural": "Fridays",
        "OpeningTime": "08:30:00",
        "ClosingTime": "17:00:00",
        "TimeZone": "Australia/Sydney",
        "NotOpen": "0",
        "Notes": "",
        "Contact_Key": "",
        "Is_Default": "0"
      },
      {
        "ID": "CE44C3DDCF04F54994062A90C95F8F16",
        "DateTimeCreated": "2019-01-16 18:11:31",
        "Merchant_key": "544A66F235404B6180493BE2EEC1648B",
        "DayOfWeek.Code": "7",
        "DayOfWeek.Label.Singular": "Saturday",
        "DayOfWeek.Label.Plural": "Saturdays",
        "OpeningTime": "08:30:00",
        "ClosingTime": "00:00:00",
        "TimeZone": "Australia/Sydney",
        "NotOpen": "1",
        "Notes": "",
        "Contact_Key": "",
        "Is_Default": "0"
      }
    ])
  }
  praticeLadingOneByCode(id, payload) {
    let params: HttpParams = new HttpParams();
    let options = {};

    if (payload) {
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          params = params.set(key, payload[key]);
        }
      }

      options = {
        params: params,
      };
    }


    return this.http
      .get(`${environment.nodeUrl}/merchantLandingPageCode/${id}`, options).pipe(
        map((res: HttpResponse<any>) => res['data']));

  }
  practiceLandingPageOneByMerchantID(id, payload) {
    let params: HttpParams = new HttpParams();
    let options = {};

    if (payload) {
      for (const key in payload) {
        if (payload.hasOwnProperty(key)) {
          params = params.set(key, payload[key]);
        }
      }

      options = {
        params: params,
      };
    }

    return this.http
      .get(
        `${environment.nodeUrl}/merchantLandingPageCode/merchant/${id}`,
        options
      )
      .pipe(
        map((res: HttpResponse<any>) => res['data']));
  }



  appointmentLookupList(payload, sessionType) {
    let url = "appointmentLookup";
    switch (sessionType) {
      case 'promoter':
      case 'admin':
        url += "/global";
        break;
      case 'customer':
        url += "/customer";
        break;
      case 'guest':
        url += "/public";
        break;
      default:
        break;
    }

    let params: HttpParams = new HttpParams();
    let options = {};

    for (let key in payload) {
      if (payload.hasOwnProperty(key)) {
        params = params.set(key, payload[key]);
      }
    }

    options = {
      params: params
    };
    return observableOf([
      {
        "Lookup_Type": "AppointmentTypes",
        "Category": "AppointmentTypes",
        "Code": "Checkup",
        "Label": "Checkup",
        "Description": "A check-up, which involves a thorough examination of your teeth, gums and mouth, will prevent minor problems from becoming major ones!",
        "Sort_Order": "1",
        "DefaultDuration": "60",
        "Buffers_Pre": "10",
        "Buffers_Post": "15"
      },
      {
        "Lookup_Type": "AppointmentTypes",
        "Category": "AppointmentTypes",
        "Code": "SoreTooth",
        "Label": "Sore Tooth",
        "Description": "Oral pain can happen for a lot of different reasons. Take note of some details of pain you�re feeling, like whether it�s dull, sharp, or throbbing. Also take notice of when the pain occurs, such as when you bite down. Your dentist will have a number of ways to identify any problems, but extra information you can provide will help solve the issue more quickly.",
        "Sort_Order": "2",
        "DefaultDuration": "60",
        "Buffers_Pre": "0",
        "Buffers_Post": "0"
      },
      {
        "Lookup_Type": "AppointmentTypes",
        "Category": "AppointmentTypes",
        "Code": "Emergency",
        "Label": "Emergency",
        "Description": "",
        "Sort_Order": "3",
        "DefaultDuration": "",
        "Buffers_Pre": "0",
        "Buffers_Post": "0"
      },
      {
        "Lookup_Type": "AppointmentTypes",
        "Category": "AppointmentTypes",
        "Code": "ScaleClean",
        "Label": "Scale and Clean",
        "Description": "A scale and clean is done to physically remove the plaque and calculus around the teeth and gums. It is essential for good oral health that this is done on a regular basis.",
        "Sort_Order": "4",
        "DefaultDuration": "60",
        "Buffers_Pre": "0",
        "Buffers_Post": "0"
      },
      {
        "Lookup_Type": "AppointmentTypes",
        "Category": "AppointmentTypes",
        "Code": "ConsideringTreatment",
        "Label": "Considering Treatment",
        "Description": "",
        "Sort_Order": "5",
        "DefaultDuration": "",
        "Buffers_Pre": "0",
        "Buffers_Post": "0"
      }
    ])
  }
}
