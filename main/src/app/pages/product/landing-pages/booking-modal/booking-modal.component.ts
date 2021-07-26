import { Component, EventEmitter, OnInit, Input, Optional, Inject, PLATFORM_ID } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { AppState } from 'app/app.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilsClass } from 'app/shared/components/classes/utils';
import { NotifyAppCompnent } from 'app/shared/components/classes/notify-app-compnent';

import * as _ from 'lodash'
import { LoaderService } from 'app/shared/services/loader.service';
@Component({
  selector: 'booking-modal',
  styleUrls: ['./booking-modal.component.css'],
  templateUrl: './booking-modal.component.html',
  animations: [
    trigger('ngIfAnimation', [
      transition('void => *', [
        query('.animate', style({ opacity: 0 }), { optional: true }),
        query('.animate', stagger('100ms', [
          animate('0.8s ease-out', keyframes([
            style({ opacity: 0, offset: 0, height: 0 }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 1, offset: 1.0, height: '*' }),
          ]))]), { optional: true }),
      ]),
      transition('* => void', [
        query('.animate', style({ opacity: 1 }), { optional: true }),
        query('.animate', stagger('100ms', [
          animate('0.8s ease-in', keyframes([
            style({ opacity: 1, offset: 0, height: '*' }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 0, offset: 1.0, height: 0 }),
          ]))]), { optional: true }),
      ])
    ]),
    trigger('dropIn', [
      transition('void => *', [
        query('.animate', style({ opacity: 0 }), { optional: true }),
        query('.animate', stagger('100ms', [
          animate('0.8s ease-out', keyframes([
            style({ opacity: 0, offset: 0, height: 0 }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 1, offset: 1.0, height: '*' }),
          ]))]), { optional: true }),
      ])
    ])
  ]
})
export class bookingModalComponent implements OnInit {


  titles = [];
  genders = [];
  states = [];
  bestContactTimes = [];


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

  showConcern = false;

  gotoApply;
  postCode
  duration;
  frequency;
  productID;
  comment


  bestContactTime

  create = new EventEmitter()

  proceed = new EventEmitter()

  closeModal = new EventEmitter()

  util = new UtilsClass();
  state;
  contactTime;
  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    data,

    private loaderService: LoaderService,
    private appState: AppState,
    @Inject(PLATFORM_ID) private platformId: any
  ) {

    if (data) {
      if (data.merchantID) {
        this.merchantID = data.merchantID
      }
      if (data.campaignID) {
        this.campaignID = data.campaignID
      }

      if (data.amount) {
        this.amount = data.amount
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

      if (data.gotoApply) {
        this.gotoApply = data.gotoApply;
      }

      if (data.showConcern) {
        this.showConcern = data.showConcern
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


    this.appState.getCodeLookup('BestAppointmentTime').subscribe(res => {
      if (res) {
        this.bestContactTimes = res;

      }
    })



    this.appState.getSimpleLookup('Salutation').subscribe(res => {
      if (res) {
        this.titles = res;


      }
    })



  }

  changePostCode() {
    if (this.postCode) {
      this.appState.getSuburbByPostCode(this.postCode).subscribe(res => {
        if (res && res.length > 0) {

          this.states = _.uniqBy(res, 'State');
        }
      })
    }
  }
  close() {
    this.closeModal.emit(true);
  }



  book() {

    if (this.campaignID) {
      const p = {
        firstName: this.patient['firstName'],
        lastName: this.patient['lastName'],
        mobile: this.patient['mobile'],
        email: this.patient['email'],
        bestAppointmentCode: this.bestContactTime,
        state: this.state,
        comment: this.comment,
        postCode: this.postCode,
        campaignID: this.campaignID

      }

      this.loaderService.startLoadingForce();
      this.appState.requestAppointmentMarketing(p).subscribe(res => {
        this.loaderService.stopLoadingForce();
        if (res) {

          NotifyAppCompnent.displayToastr(
            'success',
            'Success!',
            'Message has been sent to your practice.'
          );

          if (this.bookingURL) {
            this.closeModal.emit(true)
            window.open(this.bookingURL);
          } else {

            this.closeModal.emit(true)
          }
        }
      })
    }

  }
}
