/// <reference types="@types/googlemaps" />


import {distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { Component, OnInit, NgZone, ViewChild, ElementRef } from "@angular/core";
// import {} from "googlemaps";
import { MapsAPILoader } from "@agm/core";
import { Subject } from "rxjs";
import { UtilsService } from "../../services/utils.service";

@Component({
  selector: 'app-map-create',
  templateUrl: "./map-create.component.html",
  styleUrls: ["./map-create.component.css"]
})
export class MapCreateComponent implements OnInit {
  public minSearchLength = 3;
  address = null;
  public addressLine$ = new Subject<any>();
  public addresses = [];
  public searchControl = "";
  public addressByGoogle = null;
  public addressLine = {
    AddressLine: ""
  };
  @ViewChild("search", { static: true }) public searchElementRef: ElementRef;

  constructor(
    private utilsService: UtilsService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  public ngOnInit() {
    this.addressLine$.pipe(
      debounceTime(800),
      distinctUntilChanged(),)
      .subscribe((term: string) => {
        if (term.length >= this.minSearchLength) {
          const payload = {
            addressLine: term,
            resultLimit: "100"
          };
          this.utilsService.getAddressess(term).subscribe((res) => {
            this.addresses = res;
          });
        }
      });

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: ["address"]
        }
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          const position = {
            Latitude: place.geometry.location.lat().toString(),
            Longitude: place.geometry.location.lng().toString()
          };
          this.addressLine.AddressLine = place.formatted_address;
          this.addressByGoogle = position;
        });
      });
    });
  }

  public onSearchAddress(value) {
    this.addressLine$.next(value);
  }

  public onAddressSelected(address) {
    this.utilsService.getAddressDetails(address.RecordId).subscribe((res) => {
      this.address = res;
    });
  }
}
