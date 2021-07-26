import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { bookingModalComponent } from "../booking-modal/booking-modal.component";
import { MatDialog } from "@angular/material";
import AOS from 'aos';

@Component({
  selector: "app-inman",
  styleUrls: ["./inman.component.scss"],
  templateUrl: "./inman.component.html",
})
export class InmanComponent implements OnInit {
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
  apply: EventEmitter<any> = new EventEmitter();

  public player;

  standAlone = true
  price=22
  practiceName="Smile Right "
  practiceAddress="practice@smileright.com.au"
  practiceNumber="1300 793 983"

  constructor(
    public dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId
  ) {}

  public readStories() {
    if (isPlatformBrowser(this.platformId)) {
      window.open(
        "http://www.ivoclarvivadentusa.com/smiletothemax/success-stories/"
      );
    }
  }

  public ngOnInit() {
    AOS.init();
    if (!this.minAmount) {
      return this.minAmount;
    }
    if (!this.patient) {
      return this.patient;
    }
    if (!this.merchant) {
      this.merchant = {
        TradingAs: "Merchant",
      };
    }
    
  }

  getPracticeName(): string {
    return this.merchant["TradingAs"];
  }

  applyEvent() {
    this.apply.emit(true);
  }

  // show booking modal and then proceed to finance
  launchBookingModal() {
    let dialogRef = this.dialog.open(bookingModalComponent, {
      data: {
        campaignID: this.campaign["ID"],
        patient: this.patient,
        bookingURL: this.merchant["ThirdPartyBooking_URL"],
      },
      width: "700px",
      panelClass: "",
    });

    dialogRef.componentInstance.proceed.subscribe((data) => {
      // this.applyEvent();
      dialogRef.close();
    });

    dialogRef.componentInstance.closeModal.subscribe((data) => {
      // this.applyEvent();
      dialogRef.close();
    });
  }
}
