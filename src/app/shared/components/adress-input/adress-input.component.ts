import { Component, EventEmitter, OnInit, Input, SimpleChanges, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debug } from 'console';

import { AppState } from '../../../app.service';
import { NotifyAppCompnent } from '../../../shared/components/classes/notify-app-compnent';
import { UtilsClass } from '../../../shared/components/classes/utils';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-adress-input',
  templateUrl: './adress-input.component.html',
  styleUrls: ['./adress-input.component.css']
})
export class AdressInputComponent implements OnInit {

  public addressAPI: boolean = true;

  @Input()
  suburb;

  suburbObject;


  @Input()
  isRequired = true;


  @Input()
  displayMap = true;


  @Input()
  postCode;

  @Input()
  state;

  @Input()
  streetNumber;

  @Input()
  unitNumber;

  @Input()
  streetName;

  @Input()
  canClose = true;

  streetTypeObject;

  @Input()
  streetType;

  @Input()
  markFieldsTouchedOnInit = false;

  @Output()
  getAdress = new EventEmitter();


  @Output()
  getPostCode = new EventEmitter();


  @Output()
  getState = new EventEmitter();


  @Output()
  getSuburb = new EventEmitter();


  @Output()
  getStreetNumber = new EventEmitter();


  @Output()
  getStreetName = new EventEmitter();


  @Output()
  getUnitNumber = new EventEmitter();


  @Output()
  getStreetType = new EventEmitter();


  @Output()
  validate = new EventEmitter();

  adressObject;
  isValidate = false;

  suburbs = [];
  streeTypes = [];
  filteredStreetTypes = [];
  streetTypeObjectLabel;
  hideStreetTypeOption = false;

  requiredLabel = "required";

  util = new UtilsClass();

  _suburb;
  isSelectedSuburb = false;

  invalidStreetType = false;

  form: NgForm;
  @ViewChild('formadresss1', { static: false }) set content(content: NgForm) {
    if (content) {
      this.form = content;
    }
  }

  constructor(private appState: AppState, private loaderService: LoaderService) {

  }

  ngOnInit() {
    this.setUp();
    if (this.markFieldsTouchedOnInit) {
      setTimeout(() => {
        this.markFormControlsTouched();
      });
    }

  }

  setUp() {

    if (this.isRequired == false) {
      this.requiredLabel = null;
    }
    this.loaderService.startLoading();

    this.appState.getCodeLookup('StreetType').subscribe(res => {

      this.streeTypes = res;

      if (this.streetType) {
        for (var i = 0; i < this.streeTypes.length; i++) {

          if (this.streeTypes[i] && this.streeTypes[i]['Code'] == this.streetType) {
            this.streetTypeObject = this.streeTypes[i];
            this.streetTypeObjectLabel = this.streetTypeObject.Label;
            break;
          }
        }
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

    })

  }

  ngOnChanges(changes: SimpleChanges) {


    if (this.streetType && changes.streetType.previousValue != this.streetType) {
      for (var i = 0; i < this.streeTypes.length; i++) {

        if (this.streeTypes[i] && this.streeTypes[i]['Code'] == this.streetType) {
          this.streetTypeObject = this.streeTypes[i];
          this.streetTypeObjectLabel = this.streetTypeObject.Label;
          break;
        }
      }
    }


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
      this._suburb = e.Locality;
      this.isSelectedSuburb = false;

      this.sendResult();

    }
    else {
      this.sendResult();
    }
  }

  runCheck() {
    this.isSelectedSuburb = false;
    if (this.state == null || this.postCode == null) {
      this.isSelectedSuburb = true;
    }
  }

  displaySuburbFn(v) {
    return v && v.Locality ? v.Locality : v;
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

  changeUnitNumber(value) {

    this.unitNumber = value;
    this.sendResult()
  }

  changeStreetNumber(value) {

    this.streetNumber = value;
    this.sendResult()
  }

  changeStreetName(value) {

    this.streetName = value;
    this.sendResult()
  }

  changeState(value) {
    if (value) {
      this.state = value;
      this.sendResult()
    }
  }

  // changeStreetType(value) {
  //   if (value) {
  //     this.streetTypeObject = value;
  //     this.sendResult()
  //   }
  // }

  changeStreetType(value) {

    if (value) {
      this.streetTypeObject = value;
      this.sendResult()
    }
  }

  filterStreetType(value) {
    this.hideStreetTypeOption = false;

    let _checkType = this.streeTypes.filter(x => x.Label === value);
    if (value && _checkType.length == 0) {
      this.invalidStreetType = true;
    }

    if (value) {
      this.filteredStreetTypes = this.streeTypes.map(x => x.Label).filter(x => x.toLowerCase().includes(value.toLowerCase()));

      if (this.filteredStreetTypes
        && this.filteredStreetTypes[0].toLowerCase() === this.streetTypeObjectLabel.toLowerCase()) {

        this.invalidStreetType = false;
        this.hideStreetTypeOption = true;

        this.getSelectedStreetType(this.filteredStreetTypes[0]);
      }
    }
  }

  getSelectedStreetType(value) {
    if (value) {
      this.streetTypeObjectLabel = value;

      this.streetTypeObject = this.streeTypes.filter(x => x.Label === value)[0];

      this.sendResult();
    }
  }

  sendResult() {




    let _streetType = null;
    let streetTypeLabel = null;


    if (this.streetTypeObject && this.streetTypeObject.Code) {
      _streetType = this.streetTypeObject.Code;
    }
    else {
      _streetType = this.streetType;
    }

    if (this.streetTypeObject && this.streetTypeObject.Label) {
      streetTypeLabel = this.streetTypeObject.Label;
    }



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
      streetNumber: this.streetNumber || null,
      unitNumber: this.unitNumber || null,
      streetName: this.streetName || null,
      streetType: _streetType,
      streetTypeLabel: streetTypeLabel,
    }

    this.validateField()

    this.getAdress.emit(this.adressObject);


    this.getStreetName.emit(this.streetName);
    this.getPostCode.emit(this.streetTypeObject);
    this.getSuburb.emit(this.suburbObject);
    this.getState.emit(this.state);
    this.getStreetNumber.emit(this.streetNumber);
    this.getStreetType.emit(_streetType);
    this.getUnitNumber.emit(streetTypeLabel);



  }

  validateField() {


    const ruleValidator = {
      streetName: 'string|required',
      streetNumber: 'string|required',
      streetType: 'string|required',
      streetTypeLabel: 'string|required',
      unitNumber: 'string',
      suburb: 'string|required',
      state: 'string|required',
      postCode: 'string|required',
    };

    this.isValidate = this.util.validateFields(this.adressObject, ruleValidator)

    this.validate.emit(this.isValidate);
  }

  notFoundEvent(v) {

    if (v == null) {
      this.displayMap = false;
    }
    else
      this.displayMap = !v;
  }

  markFormControlsTouched() {
    if (this.form) {
      for (var i in this.form.controls) {
        this.form.controls[i].markAsTouched();
      }
    }
  }
}
