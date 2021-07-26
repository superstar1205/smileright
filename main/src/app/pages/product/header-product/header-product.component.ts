import { AppState } from '../../../app.service';
import {Component, OnInit, Inject, Input, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { fadeInAnimation } from '../../../_animations/index';

@Component({
  selector: 'app-header-product',
  styleUrls: ['./header-product.component.css'],
  templateUrl: './header-product.component.html',
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class HeaderProductComponent implements OnInit {
  public localState: any;

  @Input()
  merchant;

  isLogin = false;
  showDevModule = environment.showDevModule;
  mainLink = environment.mainAppLink;
  settings = AppState.Settings;;
  // role auth
  // public role: string = 'merchant';
  public partner = false;

  constructor(
    @Inject(DOCUMENT)
    public dialog: MatDialog,
    public router: Router,
    @Inject(PLATFORM_ID) private platformId) { }

  public ngOnInit() {





  }


  public onNavigateAppResolve() {
    if (isPlatformBrowser(this.platformId)) {
      window.open(this.mainLink, '_blank');
    }
  }

  isLoginEvent(res) {
    this.isLogin = res || false;
  }

}
