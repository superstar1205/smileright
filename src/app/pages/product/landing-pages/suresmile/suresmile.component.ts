import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { bookingModalComponent } from '../booking-modal/booking-modal.component';
import { applyFormComponent } from '../apply-form/apply-form.component';
import AOS from 'aos';

@Component({
  selector: "app-suresmile",
  styleUrls: ["./suresmile.component.css"],
  templateUrl: "./suresmile.component.html",

})
export class SureSmileComponent implements OnInit {

  @Input()
  patient;

  @Input()
  campaign;

  @Input()
  merchant;

  @Input()
  userData;

  @Input()
  amount;

  @Input()
  minAmount;

  @Input()
  code;

  gotoApply = false;

  @Output()
  apply: EventEmitter<any> = new EventEmitter()


  public player;


  standAlone = true;
  price=22;
  practiceName="Smile Right ";
  practiceAddress="practice@smileright.com.au";
  practiceNumber="1300 793 983";


  constructor(public dialog: MatDialog) {

  }


  public ngOnInit() {
    AOS.init();
    if (!this.merchant) {

      this.merchant = {
        TradingAs: "Merchant"
      };

    }


  }

  scrollToElement($element): void {

    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }


  applyEvent() {

    // this.supplybookingEvent();

    this.apply.emit(true);

  }

  supplybookingEvent() {

    // submit form data

  }

  // show calculator, then booking
  launchApplyModal() {
    if (this.merchant && this.userData['Amount'] && this.campaign && this.campaign['ID']) {
      let dialogRef = this.dialog.open(applyFormComponent, {
        data: {
          patient: this.patient,
          showConcern: true,
          amount: this.userData['Amount'],
          productGroup: this.userData['ProductGroup'],
          campaignID: this.campaign['ID'],
          merchantID: this.campaign['Merchant_key'],
          productName: this.code

        },
        width: '800px',
        panelClass: 'rm-top-p'

      });

      dialogRef.componentInstance.closeModal.subscribe(data => {

        dialogRef.close();
      });
    }
  }



  // show booking modal and then proceed to finance
  launchBookingModal() {
    let dialogRef = this.dialog.open(bookingModalComponent, {
      data: {
        campaignID: this.campaign['ID'],
        patient: this.patient,
        bookingURL: this.merchant['ThirdPartyBooking_URL']
      },
      width: '700px',
      panelClass: ''

    });

    dialogRef.componentInstance.proceed.subscribe(data => {
      // this.applyEvent();
      dialogRef.close();
    });

    dialogRef.componentInstance.closeModal.subscribe(data => {
      // this.applyEvent();
      dialogRef.close();
    });
  }



}

