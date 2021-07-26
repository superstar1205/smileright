import { isPlatformBrowser } from "@angular/common";
import { Component, EventEmitter, Inject, OnInit, Optional, Output, PLATFORM_ID } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import * as AOS from "aos";
import { AppComponent } from "app/app.component";
import { AppState } from "app/app.service";
import { ConfirmDialogSingleButton } from "app/shared/components/classes/confirm-dialog-single-button";
import { ConfirmDialogSingleButtonComponent } from "app/shared/components/confirm-dialog-single-button/confirm-dialog-single-button.component";
import { LoaderService } from "app/shared/services/loader.service";
import { CustomCurrencyPipe } from "app/tools/pipes/custom-currency.pipe";
import { CustomPhonePipe } from "app/tools/pipes/custom-phone.pipe";
import * as _ from "lodash";
import { NotifyAppCompnent } from "../../shared/components/classes/notify-app-compnent";
import { fadeInAnimation } from "../../_animations";
import { MerchantContactComponent } from "../merchant-contact/merchant-contact.component";
import { MerchantTradingHoursViewComponent } from "../merchant-trading-hours-view/merchant-trading-hours-view.component";

@Component({
  selector: "app-merchant-appointment",
  styleUrls: ["./merchant-appointment.component.css"],
  templateUrl: "./merchant-appointment.component.html",
  animations: [fadeInAnimation],
  host: { "[@fadeInAnimation]": "" },
})
export class MerchantAppointmentComponent implements OnInit {
  settings;

  merchantProfile;
  merchantCover;
  defaultCover = "assets/img/background-cover.png";
  defaultProfile = "assets/img/placeholder.png";
  merchantID="544A66F235404B6180493BE2EEC1648B";
  merchant;

  firstName;
  lastName;
  mobile;
  email;
  gender;
  title;
  postCode;

  states = [];
  bestContactTimes = [];
  types = [];
  subTypes = [];
  subType;
  bestContactTime;
  type;
  state;
  comment;
  isCreated = false;
  @Output() close = new EventEmitter();
  isModal = false;
  contactBackgroundColor = "#1b8bdd";
  contactColor = "#fff";
  pageTitle = "Request an Appointment";
  pageDescription =
    "Let us know what time might suit you best for an appointment.";
  showContact = true;
  showHeader = true;
  showPracticeName = true;
  showBackground = true;
  footerOnly = false;
  constructor(
    private loaderService: LoaderService,
    private appState: AppState,
    public dialog: MatDialog,
    private customCurrencyPipe: CustomCurrencyPipe,
    private customPhonePipe: CustomPhonePipe,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private activeRoute: ActivatedRoute,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {

    if (data && data.merchantID) {

      this.merchantID = data.merchantID
      this.isModal = true;
      if (this.merchantID) {
        this.appState.getMerchantDetails(this.merchantID, { fields: 'AppointmentPageURL' }).subscribe(res => {
          if (res && res['AppointmentPageURL']) {

            let url_string = "https://smileright.com.au/" + res['AppointmentPageURL']
            let url = new URL(url_string);
            let params = {};
            if (url && url.searchParams) {
              url.searchParams.forEach((c, k) => {
                params[k] = c
              })

              this.buildOnParam(params)
            }





          }

        })
      }
    }


  }

  public ngOnInit() {
    AOS.init();

    AppState.setDrift.emit("none");

    this.activeRoute.params.subscribe((params) => {
      if (!params["merchantID"] && this.isModal != true) {
        this.router.navigate(["/404"]);
      } else {
        if (this.isModal != true) {
          this.activeRoute.queryParams.subscribe((params) => {
            if (params) {

              this.buildOnParam(params)
            }
          });

          this.merchantID = params["merchantID"];
        }
        if (isPlatformBrowser(this.platformId)) {
          this.setup();
        }
      }
    });
  }

  buildOnParam(params) {
    if (params) {
      if (
        params["showBackground"] == "false" ||
        params["showBackground"] == false
      ) {
        this.showBackground = false;
      } else {
        this.showBackground = true;
      }

      if (
        params["showHeader"] == "false" ||
        params["showHeader"] == false
      ) {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }

      if (
        params["showPracticeName"] == "false" ||
        params["showPracticeName"] == false
      ) {
        this.showPracticeName = false;
      } else {
        this.showPracticeName = true;
      }

      if (
        params["footerOnly"] == "true" ||
        params["footerOnly"] == true
      ) {
        this.footerOnly = true;
      } else {
        this.footerOnly = false;
      }

      if (
        params["showContact"] == "false" ||
        params["showContact"] == false
      ) {
        this.showContact = false;
      } else {
        this.showContact = true;
      }

      if (params["contactColor"]) {
        this.contactColor = "#" + params["contactColor"];
      }

      if (params["contactBackgroundColor"]) {
        this.contactBackgroundColor =
          "#" + params["contactBackgroundColor"];
      }

      if (params["pageTitle"] == "none") {
        this.pageTitle = null;
      } else if (params["pageTitle"]) {
        this.pageTitle = params["pageTitle"];
      }

      if (params["pageDescription"] == "none") {
        this.pageDescription = null;
      } else if (params["pageDescription"]) {
        this.pageDescription = params["pageDescription"];
      }

      if (isPlatformBrowser(this.platformId)) {
        if (
          document &&
          document.getElementById("container-customer-background")
        ) {
          if (params["backgroundStyle"]) {
            document.getElementById(
              "container-customer-background"
            ).style.background = params["backgroundStyle"];
            this.showBackground = false;
          } else if (params["backgroundImage"]) {
            document.getElementById(
              "container-customer-background"
            ).style.backgroundImage =
              "url('" + params["backgroundImage"] + "')";
            this.showBackground = false;
          } else if (params["backgroundColor"]) {
            document.getElementById(
              "container-customer-background"
            ).style.background = "#" + params["backgroundColor"];
            this.showBackground = false;
          }
        }
      }
    }

  }

  setup() {
    let payload = {
      merchantID: this.merchantID,
      isActive: true,
      lookupType: "AppointmentTypes",
      fields:
        "Lookup_Type,Category,Code,Label,Description,Sort_Order,DefaultDuration,Buffers_Pre,Buffers_Post",
    };
    this.appState.appointmentLookupList(payload, "guest").subscribe((res) => {
      if (res) {
        this.types = res;
      }
    });

    let payload2 = {
      merchantID: this.merchantID,
      isActive: true,
      lookupType: "BestAppointmentTime",
      fields:
        "Lookup_Type,Category,Code,Label,Description,Sort_Order,DefaultDuration,Buffers_Pre,Buffers_Post",
    };
    this.appState.appointmentLookupList(payload2, "guest").subscribe((res) => {
      if (res) {
        this.bestContactTimes = res;
      }
    });

    this.appState.getMerchantDetails(this.merchantID).subscribe((res) => {
      if (res) {
        this.merchant = res;
        this.merchantCover = this.appState.getMerchantAppointmentCoverStream(
          this.merchantID
        );
        this.merchantProfile = this.appState.getMerchantProfilePictureStream(
          this.merchantID
        );

        if (document && document.getElementById("cover-background"))
          document.getElementById("cover-background").style.backgroundImage =
            "url(" + this.merchantCover + "),url(" + this.defaultCover + ")";

        if (document && document.getElementById("profile-background"))
          document.getElementById("profile-background").style.backgroundImage =
            "url(" +
            this.merchantProfile +
            ")";
      } else {
        this.router.navigate(["/404"]);
      }
    });
  }

  public SubmitMessage() {
    this.appState.messageUs({}).subscribe((res: any) => {
      if (res.success) {
      }
    });
  }

  addSubType() {
    if (this.type && this.type.Code) {
      let payload = {
        merchantID: this.merchantID,
        isActive: true,
        category: this.type.Code,
        fields:
          "Lookup_Type,Category,Code,Label,Description,Sort_Order,DefaultDuration,Buffers_Pre,Buffers_Post",
      };
      this.appState.appointmentLookupList(payload, "guest").subscribe((res) => {
        if (res) {
          this.subTypes = res;
        } else {
          this.subType = null;
        }
      });
    }
  }

  changePostCode() {
    if (this.postCode) {
      this.appState.getSuburbByPostCode(this.postCode).subscribe((res) => {
        if (res && res.length > 0) {
          this.states = _.uniqBy(res, "State");

          // auto selects the state if it is only one
          if (this.states.length === 1) {
            this.state = this.states[0].State;
          } else {
            // clear the selection when there are more than 1 state
            this.state = null;
          }
        } else {
          // removes the state input if its not a valid postcode or empty state options
          this.state = null;
          this.states = null;
        }
      });
    }
  }

  book() {
    if (this.merchantID) {
      let p = {
        label: this.pageTitle,
        firstName: this.firstName,
        lastName: this.lastName,
        mobile: this.mobile,
        email: this.email,
        state: this.state,
        postCode: this.postCode,
        merchantID: this.merchantID,
        bestAppointmentCode: this.bestContactTime,
        comment: this.comment,
        typeCode: null,
        typeDescription: null,
        subTypeCode: null,
        subTypeDescription: null,
      };

      if (this.type && this.type.Code) {
        p.typeCode = this.type.Code;
      }

      if (this.type && this.type.Label2) {
        p.typeDescription = this.type.Label2;
      }

      if (this.subType && this.subType.Code) {
        p.subTypeCode = this.subType.Code;
      }
      if (this.subType && this.subType.Label2) {
        p.subTypeDescription = this.subType.Label2;
      }

      this.loaderService.startLoadingForce();
      this.appState.requestAppointmentMerchant(p).subscribe((res) => {
        this.loaderService.stopLoadingForce();
        if (res) {
          if (this.isModal == true) {

            this.close.emit(true)
          }
          else {
            this.isCreated = true;
          }

          NotifyAppCompnent.displayToastr(
            "success",
            "Success!",
            "Message has been sent to your practice."
          );
        }
      });
    }
  }
  openLink(l) {
    if (isPlatformBrowser(this.platformId) && l) {
      if (l.indexOf("http") === -1) {
        l = "https://" + l;
      }
      window.open(l, "_blank");
    }
  }

  replaceAllString(e) {
    if (e && typeof e == "string") {
      return String(e).replace(/�/g, "'");
    }
  }


  getAppointmentCancellingPolicy(currentPractice: any): string {
    if (currentPractice && currentPractice["Appointment_Cancelling_Policy"]) {
      let appointmentCancellingPolicy: string =
        currentPractice["Appointment_Cancelling_Policy"];
      // {{PracticeName}}
      appointmentCancellingPolicy = appointmentCancellingPolicy
        .split("{{PracticeName}}")
        .join(currentPractice["TradingAs"] || "");

      // {{Fee}}
      const fee = currentPractice["Appointment_Cancelling_Fee"] || 55;
      appointmentCancellingPolicy = appointmentCancellingPolicy
        .split("{{Fee}}")
        .join(this.customCurrencyPipe.transform(fee, null, null, null));

      // {{Hours}}
      appointmentCancellingPolicy = appointmentCancellingPolicy
        .split("{{Hours}}")
        .join(currentPractice["Appointment_Cancelling_Hours"] || 24);

      // {{Description}}
      appointmentCancellingPolicy = appointmentCancellingPolicy
        .split("{{Description}}")
        .join(currentPractice["Description"] || "");

      // {{PracticeEmail}}
      appointmentCancellingPolicy = appointmentCancellingPolicy
        .split("{{PracticeEmail}}")
        .join(currentPractice["emails.Email"] || "");

      // {{PracticePhone}}
      const phone = this.customPhonePipe.transform(
        currentPractice["phones.Number"], null
      );
      appointmentCancellingPolicy = appointmentCancellingPolicy
        .split("{{PracticePhone}}")
        .join(phone || "");

      return appointmentCancellingPolicy;
    }
    return "";
  }


  onClickTerms(): void {
    let confirm = new ConfirmDialogSingleButton(
      "info",
      "Appointment Cancelling Policy",
      this.getAppointmentCancellingPolicy(this.merchant),
      "okay"
    );
    // Confirm Dialog Single Button
    let ref = this.dialog.open(ConfirmDialogSingleButtonComponent, {
      data: confirm,
      width: "650px",
      panelClass: ConfirmDialogSingleButtonComponent.panelClass,
    });

    ref.componentInstance.onConfirm.subscribe((res) => {
      ref.close();
    });
  }

  tradingHours(): void {
    let ref = this.dialog.open(MerchantTradingHoursViewComponent, {
      data: this.merchantID,
      width: "500px",
    });

    ref.componentInstance.close.subscribe((res) => {
      ref.close();
    });
  }
  closeEvent() {
    this.close.emit(true);
  }

  cleanURL(url) {
    if (url) {
      if (url.indexOf("https://") != -1) {
        return url.replace('https://', '');

      }
      else if (url.indexOf("http://") != -1) {
        return url.replace('http://', '');

      }

    }

    return url
  }

  contact() {
    let ref = AppComponent.dialog.open(MerchantContactComponent, {
      width: "700px",
      data: {
        merchantID: this.merchant.ID,
      }
    });

    ref.componentInstance.close.subscribe(res => {
      ref.close();
    })

  }
}
