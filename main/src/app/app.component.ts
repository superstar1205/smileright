/**
 * Angular 2 decorators and services
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { DOCUMENT, isPlatformBrowser, Location, PopStateEvent } from '@angular/common';
import {
  Component,
  OnInit,
  Inject,
  ViewEncapsulation,
  ChangeDetectorRef,
  ViewContainerRef,
  EventEmitter,
  PLATFORM_ID,
  OnDestroy
} from '@angular/core';
import { Observable } from 'rxjs';
import { CanonicalService } from './shared/canonical.service';
import { timer } from 'rxjs';

import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';
import { NotifyAppCompnent } from './shared/components/classes/notify-app-compnent';
import { AppState } from 'app/app.service';
import { GoogleAnalyticsEventsService } from './shared/services/google-analytics-events.service';
import { LoaderService } from './shared/services/loader.service';

import { Meta } from '@angular/platform-browser';

/**
 * App Component
 * Top Level Component
 */

declare let ga: any;


@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  static closeModal = new EventEmitter();
  static dialog: MatDialog;
  driftID
  driftsubscribe;
  driftsubscribeUpdate;
  driftsubscribeUpdateReady;
  driftLoaded = false;
  stream$;
  public logo;
  public isMerchant = true;
  public phoneNumber;
  public name = 'Smile Right';
  // public tipe = "assets/img/tipe.png";
  public twitter = 'https://twitter.com/SmileRight_';
  public url = 'https://smileright.com.au';
  public showDevModule: boolean = environment.showDevModule;

  mobileQuery: MediaQueryList;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  private _mobileQueryListener: () => void;
  public showLoader = false;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private canonicalService: CanonicalService,
    private location: Location,
    public toastr: ToastrService,
    vcr: ViewContainerRef,
    private activatedRoute: ActivatedRoute,
    private appState: AppState,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    public googleAnalyticsEventsService: GoogleAnalyticsEventsService,
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: any,
    private loaderService: LoaderService,
    private metaTagService: Meta
  ) {

    // angulartics2GoogleTagManager.startTracking();
    AppComponent.dialog = dialog;
    this.mobileQuery = media.matchMedia('(max-width: 991px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    loaderService.loaderEvent$.subscribe((show: boolean) => {
      this.showLoader = show;
    })


  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.loaderService.loaderEvent$.unsubscribe();
  }

  public ngOnInit() {


    let _url = window.location.pathname;


    this.router.errorHandler = (error: any) => {

      try {



        if (_url && this.isEncoded(_url) === true) {

          _url = decodeURI(_url);
          this.router.navigateByUrl(_url)
        } else {
          this.router.navigate(['404']);
        }

      } catch (e) {



        this.router.navigate(['404']);
      }
    }


    this.canonicalService.setCanonicalURL();

    this.metaTagService.addTags([
      { name: 'keywords', content: 'Dental plan, Dental procedure, Payment Plan, Dental Payment Plan, Afterpay, Zippay, Zip Pay, Mac Credit, My Smile Plan, Open Pay, Invisalign, Clear Aligners, Teeth whitening, Crowns, Smile makeover, Veneers, Denticare, Medipay, Bupa Dental, Pacific Smiles, MiFund, Humm, Access my super, Orthodontics, Childrens dental, Dental implants, Dental services, Local dentist, Wisdom Teeth, Emergency dental, Financial service, Dental bridge, Dental loan, Dental membership, Smile Styler, Braces, Teen dental, Periodontist, Prosthodontist , Dental makeover, Smile enhancement, Dental clinic, Gentle dentist, NIB dental, Medibank dentist, Afterpay dentist, HCF dentist, Porcelain veneers, Composite veneers, Colgate, Oral B, Zoom Whitening, Sleep Apnoea, Dental Splints, Scale and clean, Dental Flossing, Dental Bridges, Dental Bleaching, Dental bonding, Gum lifts, Dental Fillings, Root canal, Straight teeth, Endodontist, Maxillofacial surgeon , Oral surgeon, Smile Direct Club, ClearCorrect, Cosmetic dentistry, Sensodyne, Glamorous smile, Celebrity smile, EZ Smile, Aligners, Teeth aligners, Brisbane dental, Sydney dental , Victoria dental, Perth Dental, Adelaide dental, Canberra dental, Hobart dental, Darwin dental, Smile makeover, Teeth retainer, Pure Smile, Polident, White Glo, Resin veneers, Oral services, Cracked tooth, Chipped tooth, Crooked teeth, Mercury filling' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Smile Right Pty Ltd' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' }
    ]);



    NotifyAppCompnent.loadApp.subscribe(res => {

      this.showLoader = res;
    })

    // this.addTrackingScript();


    this.name = AppState.Settings['contactName'] || this.name;
    this.twitter = AppState.Settings['twitter'] || this.twitter;
    this.url = AppState.Settings['website'] || this.url;
    this.logo =
      this.getLogoImage(AppState.Settings['BrandingLogoImage']) || this.logo;
    this.phoneNumber = AppState.Settings['contactPhone'] || this.phoneNumber;

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart) {
        if (ev.url !== this.lastPoppedUrl) {
          if (isPlatformBrowser(this.platformId)) {
            this.yScrollStack.push(window.scrollY);
          }
        }
      } else if (ev instanceof NavigationEnd) {
        if (ev.url === this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          if (isPlatformBrowser(this.platformId)) {
            window.scrollTo(0, this.yScrollStack.pop());
          }
        } else {
          if (isPlatformBrowser(this.platformId)) {
            window.scrollTo(0, 0);
          }
        }
      }

      if (ev instanceof NavigationEnd) {
        // ga('set', 'page', ev.urlAfterRedirects);
        // ga('send', 'pageview');
      }
    });







    AppState.setDrift.subscribe((drift) => {


      if (window && window['drift'] && window['drift']['api']) {
        this.driftLoaded = true;
        if (drift) {


          if (drift === 'none') {
            this.driftID = 'none';
          } else {
            this.driftID = AppState.Settings[drift];
          }


          if (this.driftID === '0' || this.driftID === 0 || !this.driftID) {
            window['drift'].reset();
          } else if (this.driftID) {
            window['drift'].reset();
            this.setDrift(false)

          } else {
            window['drift'].reset();
          }

        } else {
          window['drift'].reset();
        }
      } else {

        if (drift === 'none') {
          this.driftID = 'none';
        } else {
          this.driftID = AppState.Settings[drift];
        }


        if (isPlatformBrowser(this.platformId)) {

          this.setDrift(false)
        }



      }
    })

    NotifyAppCompnent.errorEvent.subscribe((error) => {
      const optionError = {
        showCloseButton: true,
        enableHTML: true,
        timeOut: 12000
      };

      const optionSuccess = {
        showCloseButton: true,
        enableHTML: true,
        timeOut: 5000
      };

      const optionWarning = {
        showCloseButton: true,
        enableHTML: true,
        timeOut: 10000
      };

      const optionInfo = {
        showCloseButton: true,
        enableHTML: true,
        timeOut: 12000
      };

      const userDataLoader = {
        positionClass: 'toast-bottom-left',
        animate: 'flyLeft',
        enableHTML: true,
        timeOut: 150000,
        maxShown: 1
      };

      if (error) {
        if (error.type === 'error') {
          setTimeout(() =>
            this.toastr.error(error.title, error.content, optionError)
          );
        } else if (error.type === 'success') {
          setTimeout(() =>
            this.toastr.success(error.title, error.content, optionSuccess)
          );
        } else if (error.type === 'warning') {
          setTimeout(() =>
            this.toastr.warning(error.title, error.content, optionWarning)
          );
        } else if (error.type === 'info') {
          setTimeout(() =>
            this.toastr.info(error.title, error.content, optionInfo)
          );
        } else if (error.type === 'userDataLoader') {
          // this.toastr.custom(
          //   '<span style="color: #199BFF;"> <img src="assets/images/loader.gif" /> </div> Saving Your Data.</span>',
          //   null,
          //   userDataLoader
          // );
        }
      }
    });
  }
  isEncoded(str) {
    let result = false

    try {
      if (typeof str === 'string' && decodeURI(str) !== str) {
        result = true;
      }

      return result;

    } catch (e) {
      return result
    }

  }

  setDrift(openPanel = false) {
    if (this.driftsubscribeUpdate) {
      this.driftsubscribeUpdate.unsubscribe();
    }

    if (this.driftID && this.driftID !== 0 && this.driftID !== '0') {


      this.stream$ = timer(0, 1000)
      this.driftsubscribeUpdate = this.stream$.subscribe(x => {
        if (x > 120) {
          this.driftsubscribeUpdate.unsubscribe();
        }
        if (window && window['drift'] && window['drift']['api'] && this.driftID && this.driftID !== 'none') {
          window['drift'].api.startInteraction({ interactionId: Number(this.driftID), goToConversation: openPanel });
          if (this.driftsubscribeUpdate) {
            this.driftsubscribeUpdate.unsubscribe();
          }
        } else if (window && window['drift'] && window['drift']['api'] && this.driftID && this.driftID === 'none') {
          window['drift'].hide();
          if (this.driftsubscribeUpdate) {
            this.driftsubscribeUpdate.unsubscribe();
          }
        }

      });
    }
  }

  public getLogoImage(id) {
    return this.appState.nodeJSUrl + '/files/' + id + '/view';
  }

}
