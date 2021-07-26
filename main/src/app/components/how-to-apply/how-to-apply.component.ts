import { Component, OnInit, Input } from '@angular/core';
import { fadeInAnimation } from '../../_animations/index';
import { HowToApplyModalComponent } from '../howtoapply-modal';
import { AppComponent } from 'app/app.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-how-to-apply',
  styleUrls: ['./how-to-apply.component.css'],
  templateUrl: './how-to-apply.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HowToApplyComponent implements OnInit {

  @Input()
  hasBackground = false;

  constructor(
    private dialog: MatDialog
  ) {
  }

  public ngOnInit() {
  }

  public onHowToApply() {
    const ref = AppComponent.dialog.open(HowToApplyModalComponent, {
      width: "700px"
    });

  }


}
