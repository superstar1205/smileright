import { Component, EventEmitter, OnInit, Input, Optional, Inject, PLATFORM_ID } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

import { AppState } from 'app/app.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UtilsClass } from 'app/shared/components/classes/utils';
import { isPlatformBrowser } from '@angular/common';
import { bookingModalComponent } from '../booking-modal/booking-modal.component';
import { ProceedInformationModalComponent } from '../../proceed-information-modal';

@Component({
  selector: 'apply-form',
  styleUrls: ['./apply-form.component.css'],
  templateUrl: './apply-form.component.html',
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave',
        animate(300, style({ opacity: 0 })))
    ])
  ]
})
export class applyFormComponent implements OnInit {


  titles = [];
  genders = [];


  @Input()
  productName;

  @Input()
  patientID;


  @Input()
  patient: any = {
    firstName: null,
    lastName: null,
    mobile: null,
    email: null,
    gender: null,
    title: null
  };

  days = [
    { value: '0', viewValue: 'Monday' },
    { value: '1', viewValue: 'Tuesday' },
    { value: '2', viewValue: 'Wednesday' },
    { value: '3', viewValue: 'Thursday' },
    { value: '4', viewValue: 'Friday' }
  ];

  states = [
    { value: '0', viewValue: 'VIC' },
    { value: '1', viewValue: 'NSW' },
    { value: '2', viewValue: 'QLD' },
    { value: '3', viewValue: 'WA' },
    { value: '4', viewValue: 'TAS' },
    { value: '4', viewValue: 'SA' },
    { value: '4', viewValue: 'NT' }
  ];

  times = [
    { value: '0', viewValue: 'Morning' },
    { value: '1', viewValue: 'Afternoon' }
  ];



  @Input()
  productGroup;


  settings = AppState.Settings; ;


  isPaymentPlan = false;

  @Input()
  campaignID;

  @Input()
  merchantID = '544A66F235404B6180493BE2EEC1648B';

  @Input()
  amount;

  @Input()
  bookingURL;

  processing = false;


  duration;
  frequency;
  productID;


  step = 1;

  create = new EventEmitter()

  disableBack = false;

  closeModal = new EventEmitter()

  util = new UtilsClass();

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    data,
    public dialog: MatDialog,
    private appState: AppState,
    @Inject(PLATFORM_ID) private platformId: any
  ) {

    if (data) {
      if (data.merchantID) {
        this.merchantID = data.merchantID
      }

      if (data.amount) {
        this.amount = data.amount
      }

      if (data.campaignID) {
        this.campaignID = data.campaignID
      }
      if (data.productGroup) {
        this.productGroup = data.productGroup
      }

      if (data.patient) {
        this.patient = data.patient
      }
      if (data.patientID) {
        this.patientID = data.patientID
      }

      if (data.bookingURL) {
        this.bookingURL = data.bookingURL
      }

    }
  }

  public ngOnInit() {

    if (this.patientID) {


      const _p = {
        fields: 'ID,FirstName,Name,Salutation,Gender.Code,mobiles.Number'
      }

      this.appState.getCustomerProspect(this.patientID, _p).subscribe(res => {
        if (res) {


          if (res['FirstName']) {
            this.patient['firstName'] = res['FirstName'];
          }

          if (res['Name']) {
            this.patient['lastName'] = res['Name'];
          }


          if (res['Salutation']) {
            this.patient['title'] = res['Salutation'];
          }


          if (res['Gender.Code']) {
            this.patient['gender'] = res['Gender.Code'];
          }

          if (res['mobiles.Number']) {
            this.patient['mobile'] = this.util.appPhoneFormat(res['mobiles.Number']);
          }


          if (res['emails.Email']) {
            this.patient['email'] = res['emails.Email'];
          }



          this.setUp();
        }
      })
    } else {
      this.setUp();
    }
  }

  setUp() {



    this.appState.getCodeLookup('Gender').subscribe(res => {
      if (res) {
        this.genders = res;

      }
    })



    this.appState.getSimpleLookup('Salutation').subscribe(res => {
      if (res) {
        this.titles = res;


      }
    })



  }

  step2() {
    this.step = 2;
  }


  selectProduct(e) {
    if (e && e['ID']) {

      this.productID = e['ID'];

    }
  }

  disableBackButton() {
    this.disableBack = true;
  }
  estimation(res) {
    if (res) {
      this.duration = res['duration'];
      this.productID = res['ProductID'];
      this.frequency = res['frequency'];

      this.isPaymentPlan = res['isPaymentPlan'] || false;


    }
  }


  proceedNow() {
    const dialogRef = this.dialog.open(ProceedInformationModalComponent, {
      data: {
        'firstName': this.patient.firstName,
        'amount': this.amount,
      },
      width: '600px',
      panelClass: 'rm-top-p'

    });

    dialogRef.componentInstance.apply.subscribe(data => {
      this.apply();
      dialogRef.close();
    });


    dialogRef.componentInstance.close.subscribe(data => {
      dialogRef.close();
    });
  }

  apply() {
    this.processing = true;
    const payLoad = {
      'firstName': this.patient.firstName,
      'lastName': this.patient.lastName,
      'gender': this.patient.gender,
      'email': this.patient.email,
      'title': this.patient.title,
      'mobile': this.patient.mobile,
      productID: this.productID,
      duration: this.duration,
      frequency: this.frequency

    }

    this.appState.createInvitationMarketing(this.campaignID, payLoad).subscribe(res => {
      if (res && res['WakandaID']) {
        if (this.isPaymentPlan) {
          let ppLink = this.settings['wakandaPPLink'];
          ppLink = ppLink.replace('_id_', res['WakandaID']);
          if (isPlatformBrowser(this.platformId)) {
            window.open(ppLink, '_parent').focus();
          }
        } else {
          let laLink = this.settings['wakandaLALink'];
          laLink = laLink.replace('_id_', res['WakandaID']);
          if (isPlatformBrowser(this.platformId)) {
            window.open(laLink, '_parent').focus();
          }
        }

      }
    })
  }

  close() {
    this.closeModal.emit(true);
  }

  bookFromUrl(): void {
    if (isPlatformBrowser(this.platformId)) {

      if (this.bookingURL) {
        window.open(this.bookingURL);
      }
    }
  }


}
