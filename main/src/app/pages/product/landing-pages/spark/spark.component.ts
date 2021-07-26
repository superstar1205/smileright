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
  selector: "app-spark",
  styleUrls: ["./spark.component.css"],
  templateUrl: "./spark.component.html",
})
export class SparkAlignerComponent implements OnInit {
  @Input()
  patient;

  @Input()
  campaign;

  @Input()
  merchant;

  @Input()
  userData;

  @Input()
  amount;

  @Input()
  minAmount;
  @Input()
  code;

  @Output()
  apply: EventEmitter<any> = new EventEmitter();

  public player;

  standAlone = true;
  price=22;
  practiceName="Smile Right ";
  practiceAddress="practice@smileright.com.au";
  practiceNumber="1300 793 983";

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
    if (!this.merchant) {
      this.merchant = {
        TradingAs: "Merchant",
      };
    }
  }

  applyEvent() {
    this.apply.emit(true);
  }

  getPracticeName(): string {
    return this.merchant["TradingAs"];
  }

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
