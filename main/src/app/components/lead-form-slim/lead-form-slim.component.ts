import {Component, EventEmitter, OnInit, Input, Output, SimpleChanges, OnDestroy, Inject, PLATFORM_ID} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { fadeInAnimation } from "../../_animations/index";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { NotifyAppCompnent } from '../../shared/components/classes/notify-app-compnent';
import { UtilsClass } from '../../shared/components/classes/utils';
import { AppState } from "app/app.service";
import {isPlatformBrowser} from '@angular/common';
import {LoaderService} from '../../shared/services/loader.service';

@Component({
  selector: "app-lead-form-slim",
  styleUrls: ["./lead-form-slim.component.css"],
  templateUrl: "./lead-form-slim.component.html",
  animations: [fadeInAnimation],
  host: { "[@fadeInAnimation]": "" }
})
export class LeadFormSlimComponent implements OnInit, OnDestroy {
  leadGenForm: FormGroup;
  _sub;
  res: any;
  isCreated = false;

  localState: any;
  titles = [];


  
  @Input()
  patient;



  @Input()
    suburb;
    suburbObject;

    @Input()
    isRequired = true;

    @Input()
    postCode;

    @Input()
    state;

  @Input()
  isStandAlone = false;

  streetTypeObject;

    @Output()
    getAdress = new EventEmitter();


    @Output()
    getPostCode = new EventEmitter();


    @Output()
    getState = new EventEmitter();


    @Output()
    getSuburb = new EventEmitter();

    adressObject;
    isValidate = false;

    suburbs = [];

    requiredLabel = "required";

    public addressAPI: boolean = true;

    util = new UtilsClass();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private appState: AppState,
    @Inject(PLATFORM_ID) private platformId,
    private loaderService: LoaderService
  ) { }

  public ngOnInit() {

    


    this.leadGenForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      firstname: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern("([0-9]{10})")]),
      dentist: new FormControl(""),
      state: new FormControl(""),
      postcode: new FormControl("")
    });



    this.setUp();
  }

  setUp() {

    if(this.patient) {

      console.log(this.patient);

    }


    if (this.suburb && this.postCode && this.state) {
        let payload = {
          fields: "Locality,State,Postcode"
        }


        this.appState.getSuburbByStateByPostCode(
          this.suburb,
          this.state,
          this.postCode,
          payload

        ).subscribe(res => {
          this.loaderService.stopLoading();

          this.suburbs = res;

          if (this.suburbs && this.suburbs[0]) {

            this.suburbObject = this.suburbs[0];
            this.suburb = this.suburbs[0]['Locality'];
            this.state = this.suburbs[0]['State'];
            this.postCode = this.suburbs[0]['Postcode'];
            this.sendResult();
          }

          else {
            this.sendResult();


          }
        })
      }
      else if (this.suburb) {

        let payload = {
          fields: "Locality,State,Postcode"
        }

        this.appState.getSuburb(this.suburb, payload).subscribe(res => {
          this.loaderService.stopLoading();

          this.suburbs = res;

          if (this.suburb) {
            for (var i = 0; i < this.suburbs.length; i++) {

              if (this.suburbs[i] && this.suburbs[i]['Locality'] == this.suburb) {
                this.suburbObject = this.suburbs[i];
                this.state = this.suburbs[i]['State'];
                this.postCode = this.suburbs[i]['Postcode'];

                break;
              }
            }
            this.sendResult();
          }

          else {
            this.sendResult();

          }

        })

      }
      else if (!this.suburbObject && this.postCode) {



        this.postCodeChange(this.postCode);
      }
      else {
        this.sendResult();

        this.loaderService.stopLoading();
      }
}

ngOnChanges(changes: SimpleChanges) {

  if (
      this.suburb && this.postCode && this.state
      &&
      ((changes.suburb && changes.suburb.previousValue != this.suburb)
        || (changes.postCode && changes.postCode.previousValue != this.postCode)
        || (changes.state && changes.state.previousValue != this.state)
      )


    ) {
      let payload = {
        fields: "Locality,State,Postcode"
      }

      this.appState.getSuburbByStateByPostCode(
        this.suburb,
        this.state,
        this.postCode,
        payload

      ).subscribe(res => {
        this.loaderService.stopLoading();

        this.suburbs = res;


        if (this.suburbs && this.suburbs[0]) {


          this.suburbObject = this.suburbs[0];
          this.suburb = this.suburbs[0]['Locality'];
          this.state = this.suburbs[0]['State'];
          this.postCode = this.suburbs[0]['Postcode'];
          this.sendResult();
        }

        else {
          this.sendResult();


        }
      })
    }

    else if (this.suburb && this.state
      &&
      ((changes.suburb && changes.suburb.previousValue != this.suburb)
        || (changes.state && changes.state.previousValue != this.state)
      )

    ) {

      let payload = {
        fields: "Locality,State,Postcode"
      }
      this.loaderService.startLoading();

      this.appState.getSuburb(this.suburb, payload).subscribe(res => {
        this.loaderService.stopLoading();

        this.suburbs = res;


        if (this.suburb) {
          for (var i = 0; i < this.suburbs.length; i++) {

            if (this.suburbs[i] && this.suburbs[i]['Locality'] == this.suburb) {
              this.suburbObject = this.suburbs[i];
              this.state = this.suburbs[i]['State'];
              this.postCode = this.suburbs[i]['Postcode'];

              break;
            }
          }
          this.sendResult();
        }

      })

    }

    else if (!this.suburb && this.postCode && changes.postCode
      && changes.postCode.previousValue != this.postCode && !changes.postCode.firstChange
    ) {



      this.postCodeChange(this.postCode);
    }

    else {
      this.sendResult();

      this.loaderService.stopLoading();
    }

  }

  chooseSuburb(e) {


    if (e && typeof e == "object" && e.Postcode && e.State && e.Locality) {


      this.postCode = e.Postcode;
      this.state = e.State;

      this.suburbObject = e;
      this.suburb = e.Locality;


      this.sendResult();

    }
    else {
      this.sendResult();
    }
  }

  suburbChange(v) {


    if (v && typeof v == "string") {
      let payload = {
        fields: "Locality,State,Postcode"
      }

      this.loaderService.startLoading();
      this.appState.getSuburb(v, payload).subscribe(res => {
        this.loaderService.stopLoading();

        this.suburbs = res;

      })
    }
  }

  postCodeChange(v) {

    let payload = {
      fields: "Locality,State,Postcode"
    }
    this.postCode = v;

    this.loaderService.startLoading();
    this.appState.getSuburbByPostCode(this.postCode, payload).subscribe(res => {
      this.loaderService.stopLoading();

      if (res && res[0] && res.length >= 0) {
        this.chooseSuburb(res[0]);
      }

      else {

        this.sendResult();

        NotifyAppCompnent.displayToastr(
          "error",
          "invalid",
          "Post Code is invalid "
        );

      }

    })

  }

  sendResult(){

      let _suburb;
  let _state;
  let _postCode;

  if (this.suburbObject && this.suburbObject.Postcode && this.suburbObject.State && this.suburbObject.Locality) {
    _suburb = this.suburbObject.Locality;
    _state = this.suburbObject.State;
    _postCode = this.suburbObject.Postcode;
  }

  this.adressObject = {
      postCode: _postCode || null,
      suburb: _suburb || null,
      state: _state || null,
  }

  this.validateField()
  this.getAdress.emit(this.adressObject);

  this.getPostCode.emit(this.streetTypeObject);
  this.getSuburb.emit(this.suburbObject);
  this.getState.emit(this.state);
}

  validateField() {


      const ruleValidator = {
        suburb: 'string|required',
        state: 'string|required',
        postCode: 'string|required',
      };

      this.isValidate = this.util.validateFields(this.adressObject, ruleValidator)

      //this.validate.emit(this.isValidate);
    }

  public SubmitProspect() {


    this.loaderService.startLoading()
    let payload = {
      "firstName": this.leadGenForm.value.firstname,
      "lastName": this.leadGenForm.value.lastname,
      "email": this.leadGenForm.value.email,
      "mobile": this.leadGenForm.value.phone,
      "salutation": this.leadGenForm.value.title
    }

    this.appState.createSimpleProspect(payload).subscribe((res: any) => {

      this.loaderService.stopLoading()

      if (res.success) {


        NotifyAppCompnent.displayToastr(
          "success",
          "Message sent",
          "Your message has been sent successfully"
        );
        this.isCreated = true;
        this.leadGenForm.reset();
        this.loaderService.stopLoading();
      }
    });
  }

  public ngOnDestroy() {
    // clean subscription when component destroy
    if (this._sub) {
      this._sub.unsubscribe();
    }
  }

  downloadEbook(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://s3-ap-southeast-2.amazonaws.com/email-graphics-smileright/docs-17/Smileright+e-Book.pdf');
    }
  }


  // getErrorMessage() {
  //   return  this.email.hasError('required') ? 'Please complete this field' :
  //           this.email.hasError('email') ? 'Not a valid email' :
  //           this.firstName.hasError('required') ? 'Please enter your first name' :
  //           this.lastName.hasError('required') ? 'Please enter your surname' :
  //         '';
  // }
}
