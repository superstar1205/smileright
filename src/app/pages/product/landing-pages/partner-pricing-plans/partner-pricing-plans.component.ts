import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID, HostListener} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Meta, Title } from '@angular/platform-browser';
import { applyFormComponent } from '../apply-form/apply-form.component';
import { bookingModalComponent } from '../booking-modal/booking-modal.component';
import AOS from 'aos';
import { PreModalComponent } from '../partner-pricing-general/pre-modal/pre-modal.component';
import { StandModalComponent } from '../partner-pricing-general/stand-modal/stand-modal.component';
import { StartModalComponent } from '../partner-pricing-general/start-modal/start-modal.component';

@Component({
  selector: 'app-partner-pricing-plans',
  templateUrl: './partner-pricing-plans.component.html',
  styleUrls: ['./partner-pricing-plans.component.css']
})
export class PartnerPricingPlansComponent implements OnInit {
  title = 'Boutique'
  
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
  public scrolling;

  standAlone = true;


  // add these 
  price=22
  practiceName="Smile Right "
  practiceAddress="practice@smileright.com.au"
  practiceNumber="1300 793 983"

  papp=false;
  toggleOn = false;
  einfo = false;
  eplan = false;
  eproca = false;
  eremind = false;
  esett = false;
  estock = false;
  esupp = false;
  etemp = false;
  pcha = false;
  pdash = false;
  pdata = false;
  pnewf = false;
  preee = false;
  pprof = false;
  pport = false;
  mbrand = false;
  medm = false;
  mland = false;
  opos = false;
  ostaff = false;
  ouser = false;


  constructor(
    public dialog: MatDialog,
    private titleService: Title,
    private metaTagService: Meta,
    @Inject(PLATFORM_ID
    ) private platformId) {

  }

  public ngOnInit() {

    this.titleService.setTitle(this.title);
    this.scrolling = false;
    this.metaTagService.updateTag(
      { name: 'description', content: 'Advanced blue LED light-accelerated whitening delivers dramatic results in minimal time.' }
    );
    
    AOS.init();
    
    

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
  onpremodal() {
    this.dialog.open(PreModalComponent);
  }
  onstandmodal() {
    this.dialog.open(StandModalComponent);
  }
  onstartmodal() {
    this.dialog.open(StartModalComponent);
  }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    // console.log($event['Window']);
    console.log("Scroll Event", window.pageYOffset );
     
     if(window.pageYOffset >= 440 ) {
       this.scrolling = true;
     }
     if( window.pageYOffset > 3300||window.pageYOffset <440){
       this.scrolling = false;
     }
    }
    
}