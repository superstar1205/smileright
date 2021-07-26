import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-smilestyler-treatments",
  styleUrls: ["./smilestyler-treatments.component.css"],
  templateUrl: "./smilestyler-treatments.component.html",

})
export class SmileStylerTreatmentsComponent implements OnInit {



  constructor() {

  }

  selectedTab = 0;

  changeTab() {
    this.selectedTab ++;
    if (this.selectedTab >= 11) this.selectedTab = 0;
  }

  changeBackTab() {
    this.selectedTab --;
    if (this.selectedTab <= 0) this.selectedTab = 11;
  }

  public ngOnInit() {

  }

}

