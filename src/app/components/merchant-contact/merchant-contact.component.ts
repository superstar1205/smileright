
import { Component, EventEmitter, Inject, OnInit, Optional, Output, PLATFORM_ID } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppState } from "app/app.service";
import * as _ from "lodash";
import { NotifyAppCompnent } from "../../shared/components/classes/notify-app-compnent";
import { fadeInAnimation } from "../../_animations";
import { isPlatformBrowser } from "@angular/common";


@Component({
  selector: "app-merchant-contact",
  styleUrls: ["./merchant-contact.component.css"],
  templateUrl: "./merchant-contact.component.html",
  animations: [fadeInAnimation],
  host: { "[@fadeInAnimation]": "" },
})
export class MerchantContactComponent implements OnInit {


  merchantProfile;
  merchantID="544A66F235404B6180493BE2EEC1648B";
  merchant;
  defaultProfile = "assets/img/placeholder.png";
  firstName;
  lastName;
  mobile;
  email;
  isModal = true
  subject
  message

  @Output() close = new EventEmitter();
  constructor(
    private appState: AppState,
    public dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: any,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {

    if (data && data.merchantID) {

      this.merchantID = data.merchantID
      this.isModal = true;

    }


  }

  public ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {
      this.setup();
    }
  }




  setup() {
    if (this.merchantID) {
      this.appState.getMerchantDetails(this.merchantID).subscribe(res => {
        if (res && res['ID']) {

          this.merchant = res;

          this.merchantProfile = this.appState.getMerchantProfilePictureStream(
            this.merchantID
          );




          if (document && document.getElementById("profile-background")) {

            document.getElementById("profile-background").style.backgroundImage =
              "url(" +
              this.merchantProfile +
              ")";
          }
        }

      })
    }
  }


  send() {

    if (this.merchant && this.merchant.ID) {
      let payload = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        fullName: this.firstName + ' ' + this.lastName,
        subject: this.subject,
        body: this.message,
      }

      this.appState.messageGuestUser(this.merchant.ID, payload).subscribe(res => {

        if (res) {
          NotifyAppCompnent.displayToastr(
            "success",
            "Success!",
            "Message has been sent to your practice."
          );

          this.close.emit(true)
        }
      })

    }
  }

  closeEvent() {
    this.close.emit(true);
  }
}
