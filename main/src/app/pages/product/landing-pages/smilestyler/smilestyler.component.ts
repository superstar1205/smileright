import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SmileStylerTreatmentsComponent } from "../../product-modal/smilestyler-treatments";
import { MatDialog } from '@angular/material/dialog';
import { bookingModalComponent } from '../booking-modal/booking-modal.component';
import { applyFormComponent } from '../apply-form/apply-form.component';


@Component({
  selector: "app-smilestyler",
  styleUrls: ["./smilestyler.component.css"],
  templateUrl: "./smilestyler.component.html",

})
export class SmileStylerComponent implements OnInit {

  @Input()
  patient;

  @Input()
  campaign;

  @Input()
  merchant

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


  constructor(public dialog: MatDialog) {

  }


  public ngOnInit() {

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

    this.supplybookingEvent();

    this.apply.emit(true);

  }

  supplybookingEvent() {

    // submit form data

  }



  openTreatmentsDialog(): void {
    let dialogRef = this.dialog.open(SmileStylerTreatmentsComponent, {
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The partners investment dialog was closed');

    });
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

