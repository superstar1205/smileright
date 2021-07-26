import {Component, OnInit, Inject, EventEmitter, PLATFORM_ID} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from "../../../app.component";
import { AppState } from "app/app.service";
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: "app-error-modal",
  templateUrl: "./error-modal.component.html",
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {
  public closeModal = new EventEmitter();
  public promoter: any;
  public error: any = {
    type: '',
    link: ''
  };
  hidden = false;
  settings;
  // settings = Settings.global;

  constructor(
    // private promoterService: PromoterService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(PLATFORM_ID) private platformId
  ) { }

  public ngOnInit() {
    this.promoter = JSON.parse(localStorage.getItem('promoter'));
    this.settings = AppState.Settings;
    // if (!this.promoter) {
    //   this.promoterService.getPromoter().subscribe(res => {
    //     this.promoter = res;
    //   });
    // }
    this.error.title = this.data.title || 'Error';
    this.error.link = this.data.link || null;
    this.error.content = this.data.content || null;
  }
  public close() {
    this.closeModal.emit(true);
  }
  public openLink() {
    if (this.error.link === 'reload') {
      if (isPlatformBrowser(this.platformId)) {
        window.location.reload();
      }
    } else {
      if (isPlatformBrowser(this.platformId)) {
        window.open(this.error.link, '_blank');
      }
    }
  }

  public contactUs() {
  
  }
}
