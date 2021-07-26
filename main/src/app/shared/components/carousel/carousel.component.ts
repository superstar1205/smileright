import { Component, OnInit, Input } from '@angular/core';
import { AppState } from 'app/app.service';
import { AppComponent } from 'app/app.component';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('ngIfAnimation', [
      transition('void => *', [
        query('.animate', style({ opacity: 0 }), { optional: true }),
        query('.animate', stagger('20ms', [
          animate('0.4s ease-out', keyframes([
            style({ opacity: 0, transform: 'translateY(0)', offset: 0, height: 0 }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0, height: '*' }),
          ]))]), { optional: true }),
      ]),
      transition('* => void', [
        query('.animate', style({ opacity: 1 }), { optional: true }),
        query('.animate', stagger('20ms', [
          animate('0.2s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0, height: '*'  }),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 0, transform: 'translateY(0)', offset: 1.0, height: 0 }),
          ]))]), { optional: true }),
      ])
    ]),

  ]
})
export class CarouselComponent implements OnInit {

  visible = true;

  testimony: any;

  @Input()
  type;

  constructor( private appState: AppState) { }

  ngOnInit() {
    this.appState.getTestimonyList().subscribe(res => {
      //console.log(res);

      this.testimony = res;
    })
  }

  showMore(_id) {
    
    }

    onSlide(slideData) {
      // console.log('SLIDE:',slideData);
      // your JS here
    }
}
