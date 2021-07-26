import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Meta, Title } from '@angular/platform-browser';
import { applyFormComponent } from '../apply-form/apply-form.component';
import { bookingModalComponent } from '../booking-modal/booking-modal.component';
import AOS from 'aos';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-getting-started-dental',
  templateUrl: './getting-started-dental.component.html',
  styleUrls: ['./getting-started-dental.component.css']
})
export class GettingStartedDentalComponent implements OnInit {

  title = 'getting-started-dental'

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
  public page;
  price=22
  practiceName="Smile Right"
  practiceAddress="training@smileright.com.au"
  practiceNumber="1300 793 983"

  standAlone = true;

  constructor(
    public dialog: MatDialog,
    private titleService: Title,
    private metaTagService: Meta,
    @Inject(PLATFORM_ID
    ) private platformId) {

  }

  public ngOnInit() {
    this.page = 1
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
  private pageS(value) {
    this.page = value;
    window.scrollTo(0, 0);
  }
  public openNewTab() {
    window.open('https://email-graphics-smileright.s3-apsoutheast-2.amazonaws.com/pdfs/Smile_Right_User+Guide_Online.pdf', '_blank');
  }
  public openNewTab1() {
    window.open('https://app.smileright.com.au/wiki', '_blank');
  }
  public openNewTab2() {
    window.open('https://get.smileright.com.au/smile-right-academy', '_blank');
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
