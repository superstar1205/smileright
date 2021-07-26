import { Component, OnInit, Input, Optional, Inject, EventEmitter, Output } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AppState } from "../../../app.service";
import { NotifyAppCompnent } from "../classes/notify-app-compnent";

@Component({
  selector: "app-contact-input",
  templateUrl: "./contact-input.component.html",
  styleUrls: ["./contact-input.component.css"]
})
export class ContactInputComponent implements OnInit {





  thankLabel = "Your message has been sent !";
  sendLabel = "Send message";
  howLabel = "Please choose who you want your message to come from";
  subjectLabel = "Subject";
  messageLabel = "Your Message";


  messageSent = false;
  isModal = false;
  defaultPic = "assets/images/profile_placeholder.png";
  userPic = null;

  targetTypes = [
    'invitation',
    'customer',
    'prospect',
    'existingPerson',
    'merchant',
    'contact',
    'beneficiary',
    'us',
    "operator"
  ]

  target;



  senderType;
  recieverType;


  @Input()
  targetType;

  @Input()
  targetID;


  @Input()
  invitationID;

  @Input()
  subject;


  @Input()
  message;

  @Input()
  email;

  @Input()
  firstName;

  @Input()
  lastName;


  @Input()
  contactType = "profile";

  @Input()
  subjectArray = [];

  @Input()
  asGuest = false;

  @Input()
  asPractice = true;

  @Input()
  asProfile = true;



  asInvitation = false;



  @Output()
  _sendResult = new EventEmitter();


  @Output()
  closeModal = new EventEmitter();


  @Output()
  getEmail = new EventEmitter();


  @Output()
  getMessage = new EventEmitter();

  @Output()
  getSubject = new EventEmitter();

  @Output()
  getFirstName = new EventEmitter();

  @Output()
  getLastName = new EventEmitter();

  @Output()
  getFullName = new EventEmitter();

  @Output()
  getContacType = new EventEmitter();


  @Output()
  getSenderID = new EventEmitter();



  @Output()
  getResult = new EventEmitter();



  @Output()
  getContactType = new EventEmitter();

  // brandName = Settings.global['brandName'];
  brandName = "us"
  profile;
  invitation;
  practice;
  multiContactType = false;

  result;


  constructor(
    private appState: AppState,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {

    if (data) {
      this.isModal = true;

      if (data.targetType) {
        this.targetType = data.targetType;
      }
      else {
        this.targetType = "us";
      }


      if (data.targetID) {
        this.targetID = data.targetID;
      }


      if (data.subject) {
        this.subject = data.subject;
      }


      if (data.message) {
        this.message = data.message;
      }

      if (data.email) {
        this.email = data.email;
      }

      if (data.firstName) {
        this.firstName = data.firstName;
      }


      if (data.lastName) {
        this.lastName = data.lastName;
      }



      if (data.contactType) {
        this.contactType = data.contactType;
      }


      if (data.subjectArray) {
        this.subjectArray = data.subjectArray;
      }


      if (data.asGuest !== null) {
        this.asGuest = data.asGuest;
      }

      if (data.asPractice !== null) {
        this.asPractice = data.asPractice;
      }
      if (data.invitationID) {
        this.invitationID = data.invitationID;
      }



      if (data.asProfile !== null) {
        this.asProfile = data.asProfile;
      }

    }
    else {
      this.isModal = false;
    }
  }
  ngOnInit() {
    this.appState.isLogin().subscribe(res => {

      if (res == true) {



        this.appState.getCurrentUser().subscribe(_profile => {
          this.appState.getCurrentPractice().subscribe(_practice => {


            if (_profile && _profile.data) {

              this.profile = _profile.data;
              this.asProfile = true;
            }
            else {
              this.asProfile = false;
              this.asGuest = true;
            }

            if (_practice) {
              this.practice = _practice;
              this.asPractice = true;
            }
            else {

              this.asPractice = false;
            }


            if (this.targetType == "us") {
              this.asGuest = true;
            }



            if (!this.invitationID) {

              this.asInvitation = false;


              if (this.asPractice == true && this.asProfile == true) {
                this.contactType = "profile";
                this.multiContactType = true;
              }

              else if (this.asGuest == true && this.asPractice == false && this.asProfile == false) {
                this.contactType = "guest";
                this.multiContactType = false;
              }
              else if (this.asGuest == false && this.asPractice == true && this.asProfile == false) {
                this.contactType = "profile";
                this.multiContactType = false;
              }
              else if (this.asGuest == false && this.asPractice == false && this.asProfile == true) {
                this.contactType = "practice";
                this.multiContactType = false;
              }
              else if (this.asProfile == true) {
                this.contactType = "profile";
                this.multiContactType = true;
              }
              else if (this.asPractice == true) {
                this.contactType = "practice";
                this.multiContactType = true;
              }


            } else {

              this.appState.getInvitationByWakandaIDorID(this.invitationID).subscribe(_invitation => {

                if (_invitation) {
                  this.invitation = _invitation;
                  this.asInvitation = true;
                  this.asGuest = true;
                  this.invitationID = this.invitation['ID'];
                }
                else {
                  this.asInvitation = false;
                }


                if (this.asPractice == true && this.asProfile == true) {
                  this.contactType = "profile";
                  this.multiContactType = true;
                }

                else if (this.asGuest == true && this.asInvitation == true && this.asPractice == false && this.asProfile == false) {
                  this.contactType = "invitation";
                  this.multiContactType = true;
                }
                if (this.asGuest == true && this.asInvitation == false && this.asPractice == false && this.asProfile == false) {
                  this.contactType = "guest";
                  this.multiContactType = false;
                }
                else if (this.asGuest == false && this.asPractice == true && this.asProfile == false) {
                  this.contactType = "profile";
                  this.multiContactType = false;
                }
                else if (this.asGuest == false && this.asPractice == false && this.asProfile == true) {
                  this.contactType = "practice";
                  this.multiContactType = false;
                }
                else if (this.asProfile == true) {
                  this.contactType = "profile";
                  this.multiContactType = true;
                }
                else if (this.asPractice == true) {
                  this.contactType = "practice";
                  this.multiContactType = true;
                }


              })

            }

            this.getTarget();

          })
        })

      }
      else {



        this.asProfile = false;
        this.asPractice = false;
        this.asGuest = true;

        this.contactType = "guest";


        if (!this.invitationID) {

          this.asInvitation = false;
        } else {

          this.appState.getInvitationByWakandaIDorID(this.invitationID).subscribe(_invitation => {


            if (_invitation) {
              this.invitation = _invitation;
              this.asInvitation = true;
              this.invitationID = this.invitation['ID'];

              this.contactType = "invitation";
            }
            else {
              this.asInvitation = false;
            }


          })

        }


        this.getTarget();

      }
    })

  }


  close() {
    this.closeModal.emit(true);
  }

  getTarget() {




    if (this.targetType == 'invitation') {

      this.appState.getInvitationByWakandaIDorID(this.targetID).subscribe(res => {
        if (res) {
          this.target = {
            id: res['ID'],
            firstName: res['FirstName'],
            lastName: res['LastName'],
            name: res['FirstName'] + " " + res['LastName'],
            email: res['Email'],
            mobile: res['Mobile'],
            phoneWork: res['Phone.Work'],
            phoneHome: res['Phone.Home'],
          }
          this.recieverType = "invitation";

        }
        else {

          NotifyAppCompnent.displayToastr(
            "error",
            "Error",
            "Please specify a reciver "
          );
        }
      })





    }
    else if (this.targetType == 'customer') {


      this.appState.getCustomerDetails(this.targetID).subscribe(res => {
        if (res) {

          this.target = {
            id: res['ID'],
            firstName: res['FirstName'],
            lastName: res['Name'],
            name: res['FirstName'] + " " + res['Name'],
            email: res['Email'],
            mobile: res['mobiles.Number'],
            phoneWork: res['Phone.Work.Number'],
            phoneHome: res['phones.Number']
          }

          this.recieverType = "guest";

        }
        else {

          NotifyAppCompnent.displayToastr(
            "error",
            "Error",
            "Please specify a reciver "
          );
        }
      })


    }
    else if (this.targetType == 'prospect') {


      this.appState.getProspectDetails(this.targetID).subscribe(res => {
        if (res) {


          this.target = {
            id: res['ID'],
            firstName: res['FirstName'],
            lastName: res['Name'],
            name: res['FirstName'] + " " + res['Name'],
            email: res['emails.Email'],
            mobile: res['mobiles.Number'],
            phoneWork: res['Phone.Work.Number'],
            phoneHome: res['phones.Number']
          }

          this.recieverType = "guest";

        }
        else {

          NotifyAppCompnent.displayToastr(
            "error",
            "Error",
            "Please specify a reciver "
          );
        }
      })
    }
    else if (this.targetType == 'existingPerson') {


      this.appState.getExistingPatientDetails(this.targetID).subscribe(res => {
        if (res) {


          this.target = {
            id: res['sourceID'],
            firstName: res['firstName'],
            lastName: res['lastName'],
            name: res['firstName'] + " " + res['lastName'],
            email: res['email'],
            mobile: res['mobile'],
            phoneWork: res['workPhone'],
            phoneHome: res['homePhone']
          }

          this.targetID = res['sourceID'];
          this.recieverType = "guest";
        }
        else {

          NotifyAppCompnent.displayToastr(
            "error",
            "Error",
            "Please specify a reciver "
          );
        }
      })

    }
    else if (this.targetType == 'merchant') {


      this.appState.getMerchantDetails(this.targetID, {}).subscribe(res => {
        if (res) {


          this.target = {
            id: res['ID'],
            name: res['TradingAs'],
            email: res['emails.Email'],
            mobile: res['mobiles.Number'],
            phoneWork: null,
            phoneHome: res['phones.Number']
          }

          this.defaultPic = "assets/images/practice-pic.png";
          this.recieverType = "user";
        }
        else {

          NotifyAppCompnent.displayToastr(
            "error",
            "Error",
            "Please specify a reciver "
          );
        }
      })
    }
    else if (this.targetType == 'contact') {


      this.appState.getContactPublicDetails(this.targetID).subscribe(res => {
        if (res) {


          this.target = {
            id: res['ID'],
            name: res['CalculatedName'],
            email: res['emails.Email'],
            mobile: res['mobiles.Number'],
            phoneWork: null,
            phoneHome: res['phones.Number']
          }

          this.appState.getContactProfilePic(this.targetID).subscribe(res1 => {
            if (res1) {
              this.userPic = res1;
            }
          })

          this.recieverType = "user";
        }
        else {

          NotifyAppCompnent.displayToastr(
            "error",
            "Error",
            "Please specify a reciver "
          );
        }
      })

    }
    else if (this.targetType == 'beneficiary') {


      this.appState.getBeneficiaryDetails(this.targetID).subscribe(res => {
        if (res) {


          this.target = {
            id: res['ID'],
            name: res['CalculatedName'],
            email: res['emails.Email'],
            mobile: res['mobiles.Number'],
            phoneWork: null,
            phoneHome: res['phones.Number']
          }

          this.appState.getBeneficiaryProfilePic(this.targetID).subscribe(res1 => {
            if (res1) {
              this.userPic = res1;
            }
          })

          this.recieverType = "user";
        }
        else {

          NotifyAppCompnent.displayToastr(
            "error",
            "Error",
            "Please specify a reciver "
          );
        }
      })

    }

    else if (this.targetType == 'operator') {


      this.appState.getfullOperatorDetails(this.targetID).subscribe(res => {
        if (res) {

          if (res.TableName == 'Merchant' || res.TableName == 'Promoter') {
            this.target = {
              id: res['ContactforCard_key'],
              name: res['TradingAs'],
              email: res['emails.Email'],
              mobile: res['mobiles.Number'],
              phoneWork: null,
              phoneHome: res['phones.Number']
            }

            this.targetID = res['ContactforCard_key'];

          }
          else {

            this.target = {
              id: res['ContactforCard_key'],
              name: res['CalculatedName'],
              email: res['emails.Email'],
              mobile: res['mobiles.Number'],
              phoneWork: null,
              phoneHome: res['phones.Number']
            }

            this.targetID = res['ContactforCard_key'];
          }

          this.appState.getOperatorProfilePic(this.targetID).subscribe(res1 => {
            if (res1) {
              this.userPic = res1;
            }
          })

          this.recieverType = "user";

        }
        else {

          NotifyAppCompnent.displayToastr(
            "error",
            "Error",
            "Please specify a reciver "
          );
        }
      })

    }

    else {


      this.recieverType = "us";

    }
  }

  contactSend() {




    this.result = {
      id: this.targetID || null,
      email: null,
      firstName: null,
      lastName: null,
      fullName: null,
      contactType: null,
      subject: null,
      body: null,
      usePractice: false

    }

    this.result.contactType = this.contactType;
    this.result.subject = this.subject;
    this.result.body = this.message;

    if (this.contactType == 'guest') {

      this.result.email = this.email;
      this.result.firstName = this.firstName;
      this.result.lastName = this.lastName;
      this.result.fullName = this.firstName + " " + this.lastName;
      this.result.usePractice = false;
      this.senderType = "guest";

    }

    else if (this.contactType == 'profile') {

      this.result.email = this.profile['emails.Email'];
      this.result.firstName = this.profile['FirstName'];
      this.result.lastName = this.profile['LastName'];
      this.result.fullName = this.profile['CalculatedName'];
      this.result.usePractice = false;
      this.senderType = "user";

    }
    else if (this.contactType == 'practice') {

      this.result.email = this.practice['emails.Email'];
      this.result.firstName = this.practice['FirstName'];
      this.result.lastName = this.practice['LastName'];
      this.result.fullName = this.practice['CalculatedName'];
      this.result.usePractice = true;
      this.senderType = "user";
    }

    else if (this.contactType == 'invitation') {

      this.result.email = this.invitation['Email'];
      this.result.firstName = this.invitation['FirstName'];
      this.result.lastName = this.invitation['LastName'];
      this.result.fullName = this.invitation['FirstName'] + " " + this.invitation['LastName'];
      this.result.usePractice = false;
      this.senderType = "invitation";
    }

    this.contact();


  }

  emitResult() {

    if (this.result && this.result.email) {
      this.getResult.emit(this.result);

      NotifyAppCompnent.displayToastr(
        "success",
        "Thanks",
        this.thankLabel
      );

    }
    else {
      this.getResult.emit(null);
    }
    this.getEmail.emit(this.result.email);
    this.getSenderID.emit(this.result.id);
    this.getFirstName.emit(this.result.firstName);
    this.getLastName.emit(this.result.lastName);
    this.getFullName.emit(this.result.fullName);
    this.getContactType.emit(this.result.contactType);
    this.getMessage.emit(this.result.message);
    this.getSubject.emit(this.result.subject);
    this.closeModal.emit(true)
  }


  contact() {



    if (this.senderType == "user") {
      if (this.recieverType == "user") {

        this.appState.messageUserUser(this.result.id, this.result).subscribe(res => {

          if (res) {

            this.messageSent = true;
            this.emitResult();
          }
        })

      }
      else if (this.recieverType == "guest") {

        this.appState.messageUserGuest(this.result).subscribe(res => {

          if (res) {
            this.messageSent = true;
            this.emitResult();
          }
        })


      }
      else if (this.recieverType == "invitation") {

        this.appState.messageUserInvitation(this.result.id, this.result).subscribe(res => {

          if (res) {
            this.messageSent = true;
            this.emitResult();
          }
        })


      }
      else if (this.recieverType == "us") {

        this.appState.messageUserUs(this.result).subscribe(res => {

          if (res) {
            this.messageSent = true;
            this.emitResult();
          }
        })

      }


    }
    else if (this.senderType == "guest") {
      if (this.recieverType == "user") {


        this.appState.messageGuestUser(this.result.id, this.result).subscribe(res => {

          if (res) {
            this.messageSent = true;
            this.emitResult();
          }
        })

      }

      else if (this.recieverType == "us") {

        this.appState.messageGuestUs(this.result).subscribe(res => {

          if (res) {
            this.messageSent = true;
            this.emitResult();
          }
        })

      }

    }
    else if (this.senderType == "invitation") {

      if (this.recieverType == "user") {


        this.appState.messageInvitationUser(this.invitationID, this.result).subscribe(res => {

          if (res) {
            this.messageSent = true;
            this.emitResult();
          }
          else {

          }
        })
      }

      else if (this.recieverType == "us") {

        this.appState.messageInvitationUs(this.invitationID, this.result).subscribe(res => {

          if (res) {
            this.messageSent = true;
            this.emitResult();
          }
        })

      }

    }



  }


}
