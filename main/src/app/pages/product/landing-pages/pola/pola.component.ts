import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Meta, Title } from '@angular/platform-browser';
import { applyFormComponent } from '../apply-form/apply-form.component';
import { bookingModalComponent } from '../booking-modal/booking-modal.component';
import AOS from 'aos';

@Component({
  selector: 'app-pola',
  templateUrl: './pola.component.html',
  styleUrls: ['./pola.component.css']
})
export class PolaComponent implements OnInit {
  title = 'Pola'

  @Input()
  patient;


  @Input()
  campaign;


  @Input()
  merchant;


  @Input()
  userData;


  @Input()
  minAmount;

  @Input()
  code;

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
    private titleService: Title,
    private metaTagService: Meta,
    @Inject(PLATFORM_ID
    ) private platformId) {

  }

  public ngOnInit() {

    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Advanced blue LED light-accelerated whitening delivers dramatic results in minimal time.' }
    );
    AOS.init();
    // if (!this.merchant) {

    //   this.merchant = {
    //     TradingAs: "Merchant"
    //   };

    //   this.minAmount = 5

    // }

  }

  getPracticeName(): string {
    return this.merchant['TradingAs'];
  }

  applyEvent() {
    // emit apply event
    this.apply.emit(true);
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

      // dialogRef.componentInstance.proceed.subscribe(data => {
      // this.applyEvent();
      // dialogRef.close();
      // });

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
