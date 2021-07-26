import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { MatDialog } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { AppState } from "app/app.service";
import * as AOS from "aos";
import * as _ from "lodash";
import { MerchantAppointmentComponent } from "app/components/merchant-appointment/merchant-appointment.component";
import { ConsumerProductCalculatorComponent } from "app/components/consumer-product-calculator/consumer-product-calculator.component";
import { MerchantTradingHoursViewComponent } from "app/components/merchant-trading-hours-view/merchant-trading-hours-view.component";
import { fadeInAnimation } from "app/_animations";
import { AppComponent } from "app/app.component";
import { DocumentUrlViewComponent } from "app/shared/components/document-url-view/document-url-view.component";
import { MerchantContactComponent } from "app/components/merchant-contact/merchant-contact.component";

@Component({
  selector: "app-going-green",
  styleUrls: ["./going-green.component.scss"],
  templateUrl: "./going-green.component.html",
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class GoingGreenComponent implements OnInit {
  @Input()
  patient;

  @Input()
  campaign;

  @Input()
  merchant;

  @Input()
  userData;

  @Input()
  code;

  @Input()
  minAmount;

  @Input()
  amount;

  @Output()
  apply: EventEmitter<any> = new EventEmitter();

  merchantID="544A66F235404B6180493BE2EEC1648B";

  public player;

  campaignID

  standAlone = true;
  contactColor = "#fff";
  contactBackgroundColor = "#6eb54c";
  merchantProfile="https://sandbox.smileright.com.au/api/merchant/practice-picture-stream/544A66F235404B6180493BE2EEC1648B";

  constructor(
    private appState: AppState,
    private router: Router,
    private activeRoute: ActivatedRoute,

    public dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId
  ) { }

  public readStories() {
    if (isPlatformBrowser(this.platformId)) {
      window.open(
        "http://www.ivoclarvivadentusa.com/smiletothemax/success-stories/"
      );
    }
  }

  public ngOnInit() {
    AOS.init();

    AppState.setDrift.emit("none");

    this.activeRoute.params.subscribe((params) => {
      if (params["merchantID"]) {
        this.merchantID = params["merchantID"];

        if (isPlatformBrowser(this.platformId)) {
          this.setup();
        }
      } else if (params["code"]) {
        this.appState
          .praticeLadingOneByCode(params["code"], {})
          .subscribe((res) => {
            if (res && res["Merchant_key"]) {
              this.merchantID = res["Merchant_key"];
              if (isPlatformBrowser(this.platformId)) {
                this.setup();
              }
            } else {
              this.router.navigate(["/404"]);
            }
          });
      } else if (params["campaignID"]) {
        this.appState
          .getCampaignDetails(params["campaignID"], { fields: 'Merchant_key' })
          .subscribe((res) => {
            if (res && res["Merchant_key"]) {
              this.merchantID = res["Merchant_key"];
              if (isPlatformBrowser(this.platformId)) {
                this.setup();
              }
            } else {
              this.router.navigate(["/404"]);
            }
          });
      }

      else {
        this.router.navigate(["/404"]);
      }

      if (!this.minAmount) {
        return this.minAmount;
      }
      if (!this.patient) {
        return this.patient;
      }
      if (!this.merchant) {
        this.merchant = {
          TradingAs: "Merchant",
        };
      }
    });
  }

  setup() {
    if (this.merchantID) {

      this.appState.practiceLandingPageOneByMerchantID(this.merchantID, {}).subscribe(c => {
        if (c && c.Code) {
          window.history.replaceState({}, '', `/practice/${c.Code}`);
        }
      })

      this.merchantProfile = this.appState.getMerchantProfilePictureStream(
        this.merchantID
      );
      this.appState.getMerchantDetails(this.merchantID).subscribe((res) => {
        if (res) {
          this.merchant = res;

          if (this.merchant && this.merchant.ID) {
            this.merchantID = this.merchant.ID;
          }
        } else {
          this.router.navigate(["/404"]);
        }
      });
    }
  }

  appointmentRequest(): void {
    if (this.merchant && this.merchant.ID) {
      this.merchantID = this.merchant.ID;
    }

    if (this.merchantID) {
      this.appState.getMerchantDetails(this.merchantID).subscribe((res) => {
        if (res["ThirdPartyBooking_URL"]) {
          if (isPlatformBrowser(this.platformId)) {
            window.open(res["ThirdPartyBooking_URL"], "_blank");
          }
        } else {
          let ref = this.dialog.open(MerchantAppointmentComponent, {
            data: {
              merchantID: this.merchantID,
            },
            width: "800px",
            panelClass: "noCard"
          });

          ref.componentInstance.close.subscribe((res) => {
            ref.close();
          });
        }
      });
    }
  }

  getPracticeName(): string {
    return this.merchant["TradingAs"];
  }

  applyEvent() {
    this.apply.emit(true);
  }

  calculate(): void {
    if (this.merchant && this.merchant.ID) {
      this.merchantID = this.merchant.ID;
    }

    if (this.merchantID) {
      let ref = this.dialog.open(ConsumerProductCalculatorComponent, {
        data: {
          merchantID: this.merchantID,
        },
        width: "80%",
        panelClass: "noCard"
      });

      ref.componentInstance.close.subscribe((res) => {
        ref.close();
      });
    }
  }

  cleanURL(url) {
    if (url) {
      if (url.indexOf("https://") != -1) {
        return url.replace("https://", "");
      } else if (url.indexOf("http://") != -1) {
        return url.replace("http://", "");
      }
    }

    return url;
  }


  tradingHours(): void {
    let ref = this.dialog.open(MerchantTradingHoursViewComponent, {
      data: this.merchantID,
      width: "500px",
      panelClass: "noCard"
    });

    ref.componentInstance.close.subscribe((res) => {
      ref.close();
    });
  }

  contact() {
    let ref = AppComponent.dialog.open(MerchantContactComponent, {
      width: "700px",
      data: {
        merchantID: this.merchant.ID,
      },
      panelClass: "noCard"
    });

    ref.componentInstance.close.subscribe(res => {
      ref.close();
    })

  }
  findOut() {
    if (isPlatformBrowser(this.platformId)) {
      window.open("http://smileright.com.au/", '_blank');
    }
  }

  watchVideo() {


    let ref = AppComponent.dialog.open(DocumentUrlViewComponent, {
      width: "700px",
      data: {
        documentUrl: "https://vimeo.com/362512520",
        title: "WHAT IS MY DIGITAL TREATMENT PLAN?"
      },
      panelClass: "noCard"
    });

    ref.componentInstance.closeModal.subscribe(res => {
      ref.close();
    })
  }

}
