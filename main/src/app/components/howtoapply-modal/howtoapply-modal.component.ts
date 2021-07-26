import { Component, OnInit, EventEmitter } from '@angular/core';
import { fadeInAnimation } from '../../_animations/index';


@Component({
  selector: 'app-howtoapply-modal',
  styleUrls: ['./howtoapply-modal.component.css'],
  templateUrl: './howtoapply-modal.component.html',

  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class HowToApplyModalComponent implements OnInit {

  closeModal = new EventEmitter();

  constructor(

  ) {}

  public ngOnInit() {

  }




}
