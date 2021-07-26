import { Component, OnInit, Input } from "@angular/core";
import { Location } from "@angular/common";
import { AppComponent } from "../../../app.component";
@Component({
  selector: "app-simple404",
  templateUrl: "./simple404.component.html",
  styleUrls: ["./simple404.component.css"]
})
export class Simple404Component implements OnInit {
  @Input()
  imageSource;

  @Input()
  errorTitle = "Error! The page you are looking for can not be found"

  @Input()
  errorContent = "There might be a problem with the address you are looking for, or the page may have moved."


  @Input()
  displayContact = false;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  contactUs() {

  }
}
