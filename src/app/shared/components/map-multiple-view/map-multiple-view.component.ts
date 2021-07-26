import { Component, OnInit, Input, Optional, Inject, Output, EventEmitter, SimpleChanges, PLATFORM_ID } from "@angular/core";
import { MapsAPILoader, GoogleMapsAPIWrapper } from "@agm/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppState } from "../../../app.service";
// import { UtilsClass } from "../classes/utils";
import { NotifyAppCompnent } from "../classes/notify-app-compnent";
import { GeoLocation } from "../classes/geo-location";
import { AppComponent } from "../../../app.component";
import { isPlatformBrowser } from '@angular/common';

declare var google: any;

@Component({
  selector: "app-map-multiple-view",
  templateUrl: "./map-multiple-view.component.html",
  styleUrls: ["./map-multiple-view.component.css"]
})
export class MapMultipleViewComponent implements OnInit {


  @Input()
  filterMultiContainValue = null;

  failed = 0;
  success = 0;

  @Input()
  filterMultiContainAttributes = null;


  @Input()
  filterWithoutMultiAttributes = null;


  @Input()
  filterWithoutMultiValue = null;


  @Input()
  filterMultiAttributes = null;


  @Input()
  filterMultiValues = null;

  mapCounter = 0;

  @Input()
  defaultIcon = "assets/img/marker.png"

  profileMarker = "assets/img/practice-marker.png"
  practiceMarker = "assets/img/profil-marker.png"
  userMarker = "assets/img/user-marker.png"

  @Input()
  title = "Results";

  @Input()
  description = "Click on marker for more details .";

  @Input()
  latitudeAttribute = "Address.Latitude";

  @Input()
  longitudeAttribute = "Address.Longitude";




  @Input()
  streetNameAttribute = "addresses.Street Name";

  @Input()
  streetNumberAttribute = "addresses.Street Nr";

  @Input()
  unitNumberAttribute = "addresses.Unit";

  @Input()
  stateAttribute = "addresses.State";

  @Input()
  suburbAttribute = "addresses.Suburb";

  @Input()
  streetTypeAttribute = "addresses.Street Type";

  @Input()
  countryAttribute = "addresses.Country.Code";


  @Input()
  postCodeAttribute = "addresses.Postcode";


  @Input()
  markerTitleAttribute = "CalculatedName";


  @Input()
  markerDescriptionAttribute = "addresses.Calculated";


  @Input()
  dataArray = [];

  @Input()
  dataArayExtra = [];

  isModal = false;

  geocoder;

  country = "AU";






  //--------------------------

  positions = [];

  center: any = {
    Latitude: null,
    Longitude: null
  };

  profileAddress;
  practiceAddress;
  currentPossition;



  @Input()
  addMarker = new EventEmitter();

  @Input()
  resetPositions = new EventEmitter();


  @Output()
  close = new EventEmitter();


  isAddCoordinate = false;

  @Output()
  addCoordinate = new EventEmitter();


  @Output()
  getSelected = new EventEmitter();


  // util = new UtilsClass();


  @Input()
  zoom = 5;


  isMapLoaded = false;
  addMarkerSubscription;
  clearTimeOut = [];


  isNightMode = JSON.parse(localStorage.getItem("isDark"));
  styles;

  isLogged = false;

  nearList = [];

  selectedRadius = "20";
  differ: any;

  constructor(
    private appState: AppState,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private mapsApiLoader: MapsAPILoader,
    public gMaps: GoogleMapsAPIWrapper, 
    @Inject(PLATFORM_ID) private platformId
  ) {

    if (data) {
      if (data.dataArray && data.dataArray.length > 0) {
        this.dataArray = data.dataArray;
        this.isModal = true;
      }
      if (data.addMarker) {
        this.addMarker = data.addMarker;
        this.isModal = true;
      }

      if (data.resetPositions) {
        this.resetPositions = data.resetPositions;
        this.isModal = true;
      }



      if (data.streetNameAttribute) {
        this.streetNameAttribute = data.streetNameAttribute;
      }
      if (data.streetNumberAttribute) {
        this.streetNumberAttribute = data.streetNumberAttribute;
      }
      if (data.unitNumberAttribute) {
        this.unitNumberAttribute = data.unitNumberAttribute;
      }
      if (data.stateAttribute) {
        this.stateAttribute = data.stateAttribute;
      }
      if (data.suburbAttribute) {
        this.suburbAttribute = data.suburbAttribute;
      }
      if (data.streetTypeAttribute) {
        this.streetTypeAttribute = data.streetTypeAttribute;
      }
      if (data.countryAttribute) {
        this.countryAttribute = data.countryAttribute;
      }
      if (data.postCodeAttribute) {
        this.postCodeAttribute = data.postCodeAttribute;
      }
      if (data.markerTitleAttribute) {
        this.markerTitleAttribute = data.markerTitleAttribute;
      }

      if (data.markerDescriptionAttribute) {
        this.markerDescriptionAttribute = data.markerDescriptionAttribute;
      }



    }
  }

  ngOnInit() {

    this.appState.isLogin().subscribe(res => {
      this.isLogged = res;


      this.resetPositions.subscribe((res) => {

        this.reset()



      })


      this.addMarkerSubscription = this.addMarker.subscribe((res) => {

        if (res) {
          this.setLoadItemMarker(res);
        }
      })



      this.mapsApiLoader.load().then(() => {
        this.geocoder = new google.maps.Geocoder();

        this.isMapLoaded = true;

        this.appState.isLogin().subscribe(res => {

          if (res && res == true) {

            this.appState.getCurrentPractice().subscribe(practice => {

              let _item = {}


              if (practice && practice['addresses.Postcode']) {


                _item['streetName'] = practice["addresses.Street Name"];
                _item['unitNumber'] = practice["addresses.Unit"];
                _item['streetNumber'] = practice["addresses.Street Nr"];
                _item['suburb'] = practice["addresses.Suburb"];
                _item['postCode'] = practice["addresses.Postcode"];
                _item['streetType'] = practice["addresses.Street Type"];
                _item['state'] = practice["addresses.State"];
                _item['country'] = practice["addresses.Country.Code"] || this.country;
                _item[this.markerTitleAttribute] = practice["CalculatedName"];
                _item[this.markerDescriptionAttribute] = practice["addresses.Calculated"];


                _item['Latitude'] = practice["Address.Latitude"];
                _item['Longitude'] = practice["Address.Longitude"];

                _item['isOpen'] = true;

                _item['markerTitle'] = "Your Practice Address"

                this.practiceAddress = _item;

                this.setLoadItemMarker(this.practiceAddress, false, "practice");

              }

              this.appState.getCurrentUser().subscribe(profile => {

                let _item = {}


                if (profile && profile.data && profile.data['addresses.Postcode']) {


                  _item['streetName'] = profile.data["addresses.Street Name"];
                  _item['unitNumber'] = profile.data["addresses.Unit"];
                  _item['streetNumber'] = profile.data["addresses.Street Nr"];
                  _item['suburb'] = profile.data["addresses.Suburb"];
                  _item['postCode'] = profile.data["addresses.Postcode"];
                  _item['streetType'] = profile.data["addresses.Street Type"];
                  _item['state'] = profile.data["addresses.State"];
                  _item['country'] = profile.data["addresses.Country.Code"] || this.country;
                  _item[this.markerTitleAttribute] = profile.data["CalculatedName"];
                  _item[this.markerDescriptionAttribute] = profile.data["addresses.Calculated"];

                  _item['isOpen'] = true;

                  _item['markerTitle'] = "Your Address"

                  _item['Latitude'] = profile.data["Address.Latitude"];
                  _item['Longitude'] = profile.data["Address.Longitude"];


                  this.profileAddress = _item;
                  this.setLoadItemMarker(this.profileAddress, false, "profile");

                }





              })



            })

          }

        })






      });

      if (this.isNightMode == true) {
        this.styles = [
          { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#263c3f' }]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9a76' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#38414e' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9ca5b3' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#746855' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f3d19c' }]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }]
          }
        ];
      }
      else {
        this.styles = "";
      }
    })
  }

  reset() {

    this.positions = [];


    if (this.profileAddress) {
      this.center = this.profileAddress
    }

    if (this.practiceAddress) {
      this.center = this.practiceAddress
    }



    this.addMarkerSubscription.unsubscribe();
    for (var i = 0; i < this.clearTimeOut.length; i++) {
      clearTimeout(this.clearTimeOut[i]);
    }

    this.mapCounter = 0;

    this.addMarkerSubscription = this.addMarker.subscribe((res) => {

      if (res) {
        this.setLoadItemMarker(res);
      }
    })



  }

  ngOnDestroy() {

    this.reset()

  }

  ngOnChanges(changes: SimpleChanges) {


    // if (changes.addMarker && (changes.addMarker.previousValue || changes.addMarker.currentValue)) {


    //   this.addMarker.subscribe(res => {

    //     console.log(res)
    //     if (res) {
    //       this.setLoadItemMarker(res);
    //     }
    //   })

    // }
  }

  selectItem(item) {
    if (item) {
      this.getSelected.emit(item);
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

  addMarkers(_dataArray = []) {


    for (var i = 0; i < _dataArray.length; i++) {
      this.setLoadItemMarker(_dataArray[i]);
    }



  }

  setLoadItemMarker(item, buildItem = true, type = null) {
    if (this.isMapLoaded == true) {
      this.setItemMarker(item, buildItem, type);
    }
    else {

      this.mapsApiLoader.load().then(() => {
        this.geocoder = new google.maps.Geocoder();
        this.isMapLoaded = true;
        this.setItemMarker(item, buildItem, type);

      });
    }
  }

  setItemMarker(item, buildItem = true, type = null) {


    let addressLineFull = "";
    let result;

    if (buildItem == true) {
      result = this.buildItem(item);

    }
    else {
      result = item;
    }



    if (result && (!result.Latitude || !result.Longitude)) {


      if (navigator.geolocation && typeof google !== 'undefined' && google) {

        let geoObject = {};


        geoObject['address'] = "";



        if (result['unitNumber'] && result['streetNumber'] && result['streetName']) {

          addressLineFull = addressLineFull + result['unitNumber'] + "/";
          geoObject['address'] = geoObject['address'] + result['unitNumber'] + ",";
        }

        if (result['streetNumber'] && result['streetName']) {
          addressLineFull = addressLineFull + result['streetNumber'] + " ";

          geoObject['address'] = geoObject['address'] + result['streetNumber'] + ",";
        }
        if (result['streetName']) {

          addressLineFull = addressLineFull + result['streetName'] + " ";

          geoObject['address'] = geoObject['address'] + result['streetName'] + ",";

          if (result['streetType']) {

            addressLineFull = addressLineFull + result['streetType'] + " ";

            geoObject['address'] = geoObject['address'] + result['streetType'] + ",";
          }

        }
        addressLineFull = addressLineFull + result['suburb'] + " ";
        if (result['state'] && result['postCode']) {

          addressLineFull = addressLineFull + result['state'] + " ";
          geoObject['address'] = geoObject['address'] + result['state'] + ",";
        }

        if (result['postCode']) {
          addressLineFull = addressLineFull + result['postCode'];
          geoObject['address'] = geoObject['address'] + result['postCode'] + ",";
        }

        geoObject['address'] = geoObject['address'] + (result['country'] || 'AU');
        addressLineFull = addressLineFull + result['country'];



        if (geoObject['address']) {


          this.getGeoCode(geoObject, item, result, type);

        }
      }
    } else if (result && result.Latitude && result.Longitude) {

      let position = {
        Latitude: result.Latitude,
        Longitude: result.Longitude,
        isOpen: item['isOpen'] || false,
        time: null,
        label: result[this.markerTitleAttribute] || '',
        item: item || null
      };


      if (type == "practice") {

        this.practiceAddress = position;
        this.center = this.practiceAddress;
      }

      else if (type == "profile") {


        this.profileAddress = position;
      }

      else
        this.positions.push(position);

      console.info("Success " + this.success++)
    }
  }

  getGeoCode(geoObject, item, result, type) {
    this.mapCounter++;

    if (this.geocoder && isPlatformBrowser(this.platformId)) {
      let c = setTimeout(() => {


        this.geocoder.geocode(geoObject, (results, status) => {


          if (results && results[0]) {
            let position = {
              Latitude: results[0].geometry.location.lat(),
              Longitude: results[0].geometry.location.lng(),
              isOpen: item['isOpen'] || false,
              time: null,
              label: result[this.markerTitleAttribute] || '',
              item: item || null
            };

            if (this.isAddCoordinate == true && this.isLogged == true) {
              let _item = item;

              _item['latitude'] = position.Latitude;
              _item['longitude'] = position.Longitude;
              this.addCoordinate.emit(_item)
            }

            if (type == "practice") {

              this.practiceAddress = position;
              this.center = this.practiceAddress;
            }

            else if (type == "profile") {


              this.profileAddress = position;
            }

            else
              this.positions.push(position);




          }
          else {
            console.error("Failed " + this.failed++)
          }
        });
      }, this.mapCounter * 200);

      this.clearTimeOut.push(c);
    }
  }

  buildItem(item) {

    let result = {};
    if (item) {


      if (this.streetNameAttribute && item[this.streetNameAttribute]) {
        result['streetName'] = item[this.streetNameAttribute];
      }
      if (this.unitNumberAttribute && item[this.unitNumberAttribute]) {
        result['unitNumber'] = item[this.unitNumberAttribute];
      }
      if (this.streetNumberAttribute && item[this.streetNumberAttribute]) {
        result['streetNumber'] = item[this.streetNumberAttribute];
      }
      if (this.suburbAttribute && item[this.suburbAttribute]) {
        result['suburb'] = item[this.suburbAttribute];
      }
      if (this.postCodeAttribute && item[this.postCodeAttribute]) {
        result['postCode'] = item[this.postCodeAttribute];
      }
      if (this.streetTypeAttribute && item[this.streetTypeAttribute]) {
        result['streetType'] = item[this.streetTypeAttribute];
      }
      if (this.stateAttribute && item[this.stateAttribute]) {
        result['state'] = item[this.stateAttribute];
      }
      if (this.countryAttribute && item[this.countryAttribute]) {
        result['country'] = item[this.countryAttribute];
      }
      else {
        result['country'] = this.country;
      }

      if (this.latitudeAttribute && item[this.latitudeAttribute] && Number(item[this.latitudeAttribute]) != 0) {
        result['Latitude'] = item[this.latitudeAttribute];
      }
      else {
        result['Latitude'] = null;
      }

      if (this.longitudeAttribute && item[this.longitudeAttribute] && Number(item[this.longitudeAttribute]) != 0) {
        result['Longitude'] = item[this.longitudeAttribute];
      }
      else {
        result['Longitude'] = null;
      }


      if (this.markerTitleAttribute && item[this.markerTitleAttribute]) {
        result[this.markerTitleAttribute] = item[this.markerTitleAttribute];
      }
      else {
        result[this.markerTitleAttribute] = "";
      }
      if (this.markerDescriptionAttribute && item[this.markerDescriptionAttribute]) {
        result[this.markerDescriptionAttribute] = item[this.markerDescriptionAttribute];
      }
      else {
        result[this.markerDescriptionAttribute] = null;
      }

      return result;
    }

    return null;


  }

  changeToCurrentPractice() {


    if (this.practiceAddress) {
      this.zoom = 3;
      if (this.currentPossition) {
        this.center = this.currentPossition;
      }
      else if (this.positions && this.positions.length > 0) {
        this.center = this.positions[this.positions.length - 1];
      }
      else {
        this.center = {
          Latitude: 0,
          Longitude: 0
        };

      }


      setTimeout(() => {
        this.zoom = 8;
        this.center = this.practiceAddress;

      }, 200);


    }

  }


  changeToCurrentProfil() {



    if (this.profileAddress) {
      this.zoom = 3;
      if (this.currentPossition) {
        this.center = this.currentPossition;
      }
      else if (this.positions && this.positions.length > 0) {
        this.center = this.positions[this.positions.length - 1];
      }

      else {
        this.center = {
          Latitude: 0,
          Longitude: 0
        };

      }


      setTimeout(() => {

        this.zoom = 8;
        this.center = this.profileAddress;

      }, 200);


    }


  }


  changeToCurrent() {
    let a = [];


    // this.positions.map((item, index) => {
    //   if (JSON.stringify(this.positions[index]) === JSON.stringify(this.positions[index+1])) {
    //     a.push(item);
    //   }
    // })
    if (!this.currentPossition) {
      if (!GeoLocation.geolocation) {
        if (navigator.geolocation) {
          let _this = this;

          navigator.geolocation.getCurrentPosition( (position) => {
            NotifyAppCompnent.displayToastr(
              "success",
              "Redirecting",
              "We located your current position."
            );
            if (position && position.coords) {


              _this.currentPossition = {
                Latitude: position.coords.latitude,
                Longitude: position.coords.longitude
              }
              _this.center = _this.currentPossition;
              _this.zoom = 10;


              _this.positions.map((item, index) => {
                if (JSON.stringify(_this.positions[index]) === JSON.stringify(_this.positions[index+1])) {
                  a.push(item);
                }
              })
              a.map((item, index) => {
                let d = _this.getDistanceFromLatLonInKm(item.Latitude, item.Longitude, _this.currentPossition['Latitude'], _this.currentPossition['Longitude']);
                if (d < Number(_this.selectedRadius)) {
                  let b = {
                    label: a[index]['label'],
                    distance: Math.round(d),
                    ID: a[index]['item']['ID']
                  }
                  _this.nearList.push(b)
                }
              })
            } else {

              NotifyAppCompnent.displayToastr(
                "Error",
                "Sorry!",
                "We failed to locate your current position."
              );

            }
          });
        } else {
          NotifyAppCompnent.displayToastr(
            "Error",
            "Sorry!",
            "We failed to locate your current position."
          );

        }
      }
      else {
        NotifyAppCompnent.displayToastr(
          "Error",
          "Sorry!",
          "We failed to locate your current position."
        );
      }


    }
    else {
      this.center = {
        Latitude: null,
        Longitude: null
      };
      this.zoom = 8;
      this.center = this.currentPossition;

    }
  }

  getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    var deg2Rad = deg => {
        return deg * Math.PI / 180;
    }

    var r = 6371; // Radius of the earth in km
    var dLat = deg2Rad(lat2 - lat1);
    var dLon = deg2Rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2Rad(lat1)) * Math.cos(deg2Rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = r * c; // Distance in km
    return d;
  }

  onSelectedChange(e) {
    console.log(e)
    this.selectedRadius = e;
  }



  viewMerchant(id) {

  }
}
