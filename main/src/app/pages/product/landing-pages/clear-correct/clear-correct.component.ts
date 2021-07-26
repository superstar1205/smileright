import { Component, OnInit, Input, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { bookingModalComponent } from '../booking-modal/booking-modal.component';
import { applyFormComponent } from '../apply-form/apply-form.component';
import { MatDialog } from '@angular/material';
import AOS from 'aos';

@Component({
  selector: "app-clear-correct",
  styleUrls: ["./clear-correct.component.css"],
  templateUrl: "./clear-correct.component.html",

})
export class ClearCorrectComponent implements OnInit {


  @Input()
  patient;


  @Input()
  campaign;


  @Input()
  merchant


  @Input()
  userData;
  @Input()
  code;

  @Input()
  minAmount;

  @Input()
  amount;

  @Output()
  apply: EventEmitter<any> = new EventEmitter()


  public player;

  standAlone = true;
  price=22
  practiceName="Smile Right "
  practiceAddress="practice@smileright.com.au"
  practiceNumber="1300 793 983"


  constructor(
    public dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId) {

  }

  public readStories() {
    if (isPlatformBrowser(this.platformId)) {
      window.open('http://www.ivoclarvivadentusa.com/smiletothemax/success-stories/');
    }
  }

  scrollToElement($element): void {

    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }


  public ngOnInit() {

    if (!this.merchant) {

      this.merchant = {
        TradingAs: "Merchant"
      };

    }
    AOS.init();

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
          productName: this.code,
          bookingURL: this.merchant['ThirdPartyBooking_URL']

        },
        width: '950px',
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




  applyEvent() {
    this.apply.emit(true);
  }

}

