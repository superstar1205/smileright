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
import AOS from 'aos';

@Component({
  selector: 'app-hygiene-bad-breath',
  templateUrl: './hygiene-bad-breath.component.html',
  styleUrls: ['./hygiene-bad-breath.component.css']
})
export class HygieneBadBreathComponent implements OnInit {
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

  standAlone = true;
  price=22
  practiceName="Smile Right "
  practiceAddress="practice@smileright.com.au"
  practiceNumber="1300 793 983"
  MERCHANT_NAME="Hygiene"
  recipient_first_name="DR"
  RECIPIENT_EMAIL="@smileright.com.au"
  MERCHANT_TRADING_NAME="Trading"

  constructor(@Inject(PLATFORM_ID) private platformId) {}

  public readStories() {
    if (isPlatformBrowser(this.platformId)) {
      window.open(
        "http://www.ivoclarvivadentusa.com/smiletothemax/success-stories/"
      );
    }
  }

  public ngOnInit() {
    if (!this.merchant) {
      this.merchant = {
        TradingAs: "Merchant",
      };
    }
    AOS.init();
  }

  getPracticeName(): string {
    return this.merchant["TradingAs"];
  }

  applyEvent() {
    this.apply.emit(true);
  }
}
