import {Component, OnInit, Input, Output, EventEmitter, Inject, PLATFORM_ID} from '@angular/core';
import * as Plyr from 'plyr';
import { AppState } from "app/app.service";
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: "app-emax",
  styleUrls: ["./emax.component.css"],
  templateUrl: "./emax.component.html",

})
export class EmaxComponent implements OnInit {


  @Input()
  patient;


  @Input()
  campaign;

  @Input()
  merchant;

  @Input()
  userData;
  
  @Input()
  code;

  @Input()
  minAmount;

  @Input()
  amount;

  @Output()
  apply: EventEmitter<any> = new EventEmitter()


  public player;

  standAlone = true;

  constructor(private appService: AppState,
              @Inject(PLATFORM_ID) private platformId) { }


  public readStories() {
    if (isPlatformBrowser(this.platformId)) {
      window.open('http://www.ivoclarvivadentusa.com/smiletothemax/success-stories/');
    }
  }

  public ngOnInit() {
    this.player = new Plyr('#plyrID', { captions: { active: true } });
  }

  applyEvent() {
    this.apply.emit(true);
  }



}

