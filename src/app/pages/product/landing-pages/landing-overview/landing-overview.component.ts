import { Component, OnInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AppState } from "app/app.service";
import { UtilsClass } from "app/shared/components/classes/utils";
import { MainComponent } from "../../main/main.component";
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { LoaderService } from '../../../../shared/services/loader.service';

@Component({
  selector: "app-landing-overview",
  styleUrls: ["./landing-overview.component.css"],
  templateUrl: "./landing-overview.component.html",
  animations: [
    trigger('ngIfAnimation', [
      transition('void => *', [
        query('.animate', style({ opacity: 0 }), { optional: true }),
        query('.animate', stagger('100ms', [
          animate('0.4s ease-out', keyframes([
            style({ offset: 0, transform: 'translateX(-100%)' }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ offset: 1.0, transform: 'translateX(0)' }),
          ]))]), { optional: true }),
      ]),
      transition('* => void', [
        query('.animate', style({ opacity: 1 }), { optional: true }),
        query('.animate', stagger('100ms', [
          animate('0.4s ease-in', keyframes([
            style({ offset: 0, transform: 'translateX(0)' }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ offset: 1.0, transform: 'translateX(100%)' }),
          ]))]), { optional: true }),
      ])
    ])
  ]

})
export class LandingOverviewComponent implements OnInit {



  @Input()
  campaignID="F3A782B9F4B90942BB5926257CA4AAAE";

  @Input()
  patientID="DED48A23F1982847B93DBE40F2903A20";

  applied = false

  campaign;

  patient = {
    firstName: null,
    lastName: null,
    mobile: null,
    email: null,
    gender: null,
    title: null
  }
  merchant;

  code;
  userData;


  amount;

  productGroup;

  minAmount;


  util = new UtilsClass();

  constructor(private appService: AppState,
    private router: Router,
    private activeRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId,
    private loaderService: LoaderService) {

  }

  public readStories() {
    if (isPlatformBrowser(this.platformId)) {
      window.open('http://www.ivoclarvivadentusa.com/smiletothemax/success-stories/');
    }
  }

  //

  public ngOnInit() {



    this.activeRoute.params.subscribe(params => {

      if (params["campaignID"]) {
        this.campaignID = params["campaignID"];
      }

      if (params["patientID"]) {
        this.patientID = params["patientID"];
      }

      if (params["code"]) {
        this.code = params["code"];
      }


      if (!this.code) {
        this.router.navigate(["/404"]);
      }

      this.setup();
    });
  }



  setup() {


    this.loaderService.startLoadingForce();

    if (this.campaignID) {
      this.appService.getCampaignDetails(this.campaignID).subscribe(campaign => {
        this.loaderService.stopLoadingForce();

        if (campaign) {
          this.campaign = campaign;

          if (campaign && campaign.UserData && campaign.UserData[0]) {

            this.userData = campaign.UserData[0]
          }


          if (this.userData) {
            let payload = {
              merchantKey: this.campaign['Merchant_key'],
              amount: this.userData['Amount'],
              groupCode: this.userData['ProductGroup'],
              fields: "Min(BasedOnMaxDuration.Repayments.Weekly)",
              frequency: 1
            }
            this.appService.getSuitableProductStatistic(payload).subscribe(res => {

              if (res) {


                this.minAmount = Number(Number(res['Min(BasedOnMaxDuration.Repayments.Weekly)']) / 7);

              }

            })

          }
          if (campaign['Merchant_key']) {
            this.appService.getMerchantDetails(campaign['Merchant_key']).subscribe(res => {
              if (res) {

                this.merchant = res;


                MainComponent.header.emit(this.merchant);

              }
              else {

                this.router.navigate(["/404"]);
              }
            })



            if (this.patientID) {

              let _p = {
                fields: "ID,FirstName,Name,Salutation,Gender.Code,mobiles.Number"
              }
              this.appService.getGeneralOperator(this.patientID, _p).subscribe(patient => {


                if (patient) {


                  if (patient['FirstName']) {
                    this.patient['firstName'] = patient['FirstName'];
                  }

                  if (patient['Name']) {
                    this.patient['lastName'] = patient['Name'];
                  }


                  if (patient['Salutation']) {
                    this.patient['title'] = patient['Salutation'];
                  }


                  if (patient['Gender.Code']) {
                    this.patient['gender'] = patient['Gender.Code'];
                  }

                  if (patient['mobiles.Number']) {
                    this.patient['mobile'] = this.util.appPhoneFormat(patient['mobiles.Number']);
                  }


                  if (patient['emails.Email']) {
                    this.patient['email'] = patient['emails.Email'];
                  }



                }
              })

            }


          }
          else {
            this.router.navigate(["/404"]);
          }

        }
        else {
          this.router.navigate(["/404"]);
        }

      })
    }
    else {

      this.loaderService.stopLoadingForce();
    }

  }

  apply() {

    this.applied = true;
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0, 0);
    }



  }

  goBack() {
    this.applied = false;
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0, 0);
    }
  }


}

