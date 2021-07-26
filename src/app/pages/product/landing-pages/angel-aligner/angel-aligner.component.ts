import { Component, OnInit, Input, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { applyFormComponent } from '../apply-form/apply-form.component';
import { bookingModalComponent } from '../booking-modal/booking-modal.component';
import AOS from 'aos';
@Component({
  selector: 'app-angel-aligner',
  styleUrls: ['./angel-aligner.component.css'],
  templateUrl: './angel-aligner.component.html',

})
export class AngelAlignerComponent implements OnInit {

  // dynamically set title
  title = 'Smile with Angelalign - an Innovative Clear Aligner System';

  // campaign data inputs
  @Input()
  patient;

  @Input()
  campaign;

  @Input()
  merchant

  @Input()
  code;

  @Input()
  userData;

  @Input()
  minAmount;

  // start application process
  @Output()
  apply: EventEmitter<any> = new EventEmitter()

  public player;

  standAlone = true;
  price = 22
  practiceName = 'Smile Right '
  practiceAddress = 'practice@smileright.com.au'
  practiceNumber = '1300 793 983'


  constructor(
    public dialog: MatDialog,
    private titleService: Title,
    private metaTagService: Meta,
    @Inject(PLATFORM_ID) private platformId) {
  }

  public ngOnInit() {



    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Want straighter teeth? Angelalign, just like other systems such as Invisalign straighten your teeth without braces. Payment plans available with Smile Right. ' }
      );

      AOS.init();


  }



  // smooth scroll to call-to-action
  scrollToElement($element): void {

    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  // emit apply event - start wakanda finance application
  applyEvent() {
    this.apply.emit(true);
  }

  // show finance calculator modal
  launchApplyModal() {
    if (this.merchant && this.userData['Amount'] && this.campaign && this.campaign['ID']) {
      const dialogRef = this.dialog.open(applyFormComponent, {
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

  // show booking modal
  launchBookingModal() {
    const dialogRef = this.dialog.open(bookingModalComponent, {
      data: {
        campaignID: this.campaign['ID'],
        patient: this.patient,
        bookingURL: this.merchant['ThirdPartyBooking_URL']
      },
      width: '700px',
      panelClass: ''
    });

    dialogRef.componentInstance.closeModal.subscribe(data => {
      // this.applyEvent();
      dialogRef.close();
    });
  }

}

