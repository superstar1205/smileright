import { AppState } from '../../../app.service';
import {Component, OnInit, Inject, Input, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-footer-product',
  styles: [`
   
	  .navigation {
	  	margin: 15px 0;
	  }
    footer img {
      filter: brightness(0) invert(1);
    }
    footer button.mat-mini-fab {
        background: none !important;
        box-shadow: none !important;
    }
    p.white.small {
      font-size: 0.7rem !important;
    }
    .row.clearfix.dentalInfo {
      margin-left: 5px;
    }
    @media (max-width: 768px) {
      .row.clearfix.dentalInfo {
        margin-left: 0;
      }
      .navigation a {
        display: none;
      }
      .navigation a.mob {
        display: inline-block;
      }
    }
  	`],
  templateUrl: './footer.component.html',
})
export class FooterProductComponent implements OnInit {

  @Input()
  merchant;

  isLogin = false;
  public localState: any;
  settings = AppState.Settings;
  // role auth
  public role = 'none';
  public partner = false;

  constructor(
    @Inject(DOCUMENT)
    public appState: AppState,
    private appService: AppState,
    @Inject(PLATFORM_ID) private platformId) { }



  public ngOnInit() {




    // this.appState.getCurrentUser().subscribe(resCurrent => {
    //   if (resCurrent) {

    //     this.isLogin = true;
    //   }
    //   else {

    //     this.isLogin = false;
    //   }
    // })


  }

  getLogoImage(id) {
    return this.appService.nodeJSUrl + '/files/' + id + '/view';
  }
  accessFacebook(): void {
    // this.document.location.href = this.settings['facebook'] ;
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://www.facebook.com/smilerightptyltd/', '_blank');
    }
  }

  accessTwitter(): void {
    // this.document.location.href = this.settings['twitter'] ;
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://twitter.com/SmileRight_', '_blank');
    }
  }

  openEmail(): void {
    // this.document.location.href = this.settings['facebook'] ;
    if (isPlatformBrowser(this.platformId)) {
      // window.open('mailto:applications@smileright.com.au', '_blank');
    }
  }

}
