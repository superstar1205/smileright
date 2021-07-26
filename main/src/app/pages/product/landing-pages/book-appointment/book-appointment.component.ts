import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppState } from 'app/app.service';

@Component({
  selector: 'app-book-appointment',
  styleUrls: ['./book-appointment.component.css'],
  templateUrl: './book-appointment.component.html',

})
export class BookAppointmentComponent implements OnInit {


  @Input()
  patient;


  @Input()
  campaign;

  @Input()
  merchant

  @Input()
  userData;


  @Input()
  minAmount;


  @Output()
  apply: EventEmitter<any> = new EventEmitter()

  public player;

  standAlone = true;

  constructor(private appService: AppState) { }

  public ngOnInit() {



    if (!this.merchant) {

      this.merchant = {
        TradingAs: 'Merchant'
      };

    }

  }

  applyEvent() {
    this.apply.emit(true);
  }


}

