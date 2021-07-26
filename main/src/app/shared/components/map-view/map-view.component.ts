import { Component, OnInit, Input, Optional, Inject, Output, EventEmitter, SimpleChanges } from "@angular/core";
import { NotifyAppCompnent } from '../classes/notify-app-compnent';
import { UtilsClass } from '../classes/utils';
import { MapsAPILoader, GoogleMapsAPIWrapper } from "@agm/core";
import { Observable } from "rxjs";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

declare var google: any;

@Component({
  selector: "app-map-view",
  templateUrl: "./map-view.component.html",
  styleUrls: ["./map-view.component.css"]
})
export class MapViewComponent implements OnInit {
  @Input()
  positions = [];

  @Input('streetName')
  streetName;

  @Input()
  streetNumber;


  @Input()
  unitNumber;


  addressLineFull;



  @Input()
  addressLine = null;

  @Input('canClose')
  canClose = true;

  @Input('canClick')
  canClick = true;


  @Output()
  close = new EventEmitter();

  @Output()
  notFoundEvent = new EventEmitter();

  @Input()
  addressLabel = null;

  @Input()
  moreInfo = null;
  positionTime = null;
 util = new UtilsClass();

  notFound = false;
  @Input()
  zoom = 7;

  address = "";

  @Input()
  state;

  @Input()
  suburb;

  @Input()
  streetType;

  loading = true;

  @Input()
  country = "AU";


  @Input()
  showDetails = true;

  @Input()
  postCode;

  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private mapsApiLoader: MapsAPILoader,
    public gMaps: GoogleMapsAPIWrapper
  ) {
    if (data) {
      if (data.positions) {
        this.positions = data.positions;
      }


      if (data.postCode)
        this.postCode = data.postCode;

      if (data.unitNumber)
        this.unitNumber = data.unitNumber;



      if (data.suburb)
        this.suburb = data.suburb;

      if (data.state)
        this.state = data.state;

      if (data.streetName)
        this.streetName = data.streetName;

      if (data.streetNumber)
        this.streetNumber = data.streetNumber;

      if (data.streetType)
        this.streetType = data.streetType;

      if (data.country)
        this.country = data.country;

      if (data.zoom)
        this.zoom = data.zoom;

      if (data.moreInfo)
        this.moreInfo = data.moreInfo;

      if (data.addressLabel)
        this.addressLabel = data.addressLabel;

      if (data.canClose != null)
        this.canClose = data.canClose;



    }


    if (this.positions.length > 0) {
      this.gMaps.setCenter({
        lat: Number(this.positions[0].Latitude),
        lng: Number(this.positions[0].Longitude)
      });
    }
  }

  ngOnInit() {
    if (this.showDetails == true && this.canClick == true) {
      // NotifyAppCompnent.displayToastr(
      //   "info",
      //   "Click on the marker",
      //   "To display more details"
      // );
    }

    this.mapsApiLoader.load().then(() => {
      this.getPositionByAddress();
    });
  }

  ngOnChanges(changes: SimpleChanges) {



    if (
      (changes.unitNumber && changes.unitNumber.previousValue != this.unitNumber && !changes.unitNumber.firstChange) ||
      (changes.streetNumber && changes.streetNumber.previousValue != this.streetNumber && !changes.streetNumber.firstChange) ||
      (changes.streetName && changes.streetName.previousValue != this.streetName && !changes.streetName.firstChange) ||
      (changes.streetType && changes.streetType.previousValue != this.streetType && !changes.streetType.firstChange) ||
      (changes.state && changes.state.previousValue != this.state && !changes.state.firstChange) ||
      (changes.postCode && changes.postCode.previousValue != this.postCode && !changes.postCode.firstChange)


    ) {


      this.getPositionByAddress()

    }


  }


  displayAddress(position) {
    this.loading = true;
    this.mapsApiLoader.load().then(() => {
      this.getGeoLocation(position.Latitude, position.Longitude).subscribe(

        result => {
          this.loading = false;
          if (result != null) {

            this.notFound = false;
            if (this.addressLabel)
              this.address = this.addressLabel;
            else
              this.address = result.formatted_address;
          } else {
            this.loading = false;
            this.notFound = true;

            this.notFoundEvent.emit(true)


          }
        }
      );
    });
    this.positionTime = position.time || null;
    this.moreInfo = position.moreInfo || this.moreInfo;
  }


  getGeoLocation(lat: number, lng: number) {
    if (navigator.geolocation) {
      const geocoder = new google.maps.Geocoder();
      const latlng = new google.maps.LatLng(lat, lng);
      const request = { latLng: latlng };
      return Observable.create(observer => {
        geocoder.geocode(request, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            const result = results[0];
            observer.next(result);
            observer.complete();
          }
        });
      });
    }
  }

  getPositionByAddress() {

    this.addressLineFull = "";

    if (navigator.geolocation && typeof google !== 'undefined' && google) {

      let geoObject = {};


      geoObject['address'] = "";

      let _postCode = "";
      let _state = "";
      let _suburb = "";




      if (this.unitNumber && this.streetNumber && this.streetName) {

        this.addressLineFull = this.addressLineFull + this.unitNumber + "/";
        geoObject['address'] = geoObject['address'] + this.unitNumber + ",";
      }

      if (this.streetNumber && this.streetName) {
        this.addressLineFull = this.addressLineFull + this.streetNumber + " ";

        geoObject['address'] = geoObject['address'] + this.streetNumber + ",";
      }
      if (this.streetName) {

        this.addressLineFull = this.addressLineFull + this.streetName + " ";

        geoObject['address'] = geoObject['address'] + this.streetName + ",";

        if (this.streetType) {

          this.addressLineFull = this.addressLineFull + this.streetType + " ";

          geoObject['address'] = geoObject['address'] + this.streetType + ",";
        }

      }
      this.addressLineFull = this.addressLineFull + this.suburb + " ";
      if (this.state && this.postCode) {

        this.addressLineFull = this.addressLineFull + this.state + " ";
        geoObject['address'] = geoObject['address'] + this.state + ",";
      }

      if (this.postCode) {
        this.addressLineFull = this.addressLineFull + this.postCode;
        geoObject['address'] = geoObject['address'] + this.postCode + ",";
      }

      geoObject['address'] = geoObject['address'] + (this.country || 'AU');
      this.addressLineFull = this.addressLineFull + this.country ;



      if (geoObject['address'] == "") {
        this.notFound = true;

        this.notFoundEvent.emit(true)
      }
      else {

        this.addressLine = {
          AddressLine: geoObject['address']
        };

        const geocoder = new google.maps.Geocoder();
        geocoder.geocode(geoObject, (results, status) => {



          this.loading = false;
          if (results[0]) {
            this.notFoundEvent.emit(false)

            this.notFound = false;
            const position = {
              Latitude: results[0].geometry.location.lat(),
              Longitude: results[0].geometry.location.lng(),
              time: null
            };
            this.positions = [];
            this.positions.push(position);


            if (this.addressLabel) {
              this.addressLine = {
                AddressLine: this.addressLabel
              };
            }
            else
              this.addressLine = {
                AddressLine: results[0].formatted_address
              };
          }
          else {
            this.notFound = true;

            this.notFoundEvent.emit(true)
          }
        });
      }
    }
    else {
      console.error("google map is not loaded")
      this.notFound = true;
      this.notFoundEvent.emit(true)
    }
  }

	toNumber(s) {
		if (s)
			return Number(s)
		else
			return 0
  }
  
  closeEvent() {
    this.close.emit(true);
  }
}
