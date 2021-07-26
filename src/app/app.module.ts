import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, PreloadAllModules } from '@angular/router';

import { Angulartics2Module } from "angulartics2";
import { Angulartics2GoogleTagManager  } from "angulartics2/gtm";
import { Angulartics2Hubspot } from "angulartics2/hubspot";
import { CookieLawModule } from 'angular2-cookie-law';

import { environment } from "environments/environment";

import { NgxCurrencyModule } from "ngx-currency";
import { NgPipesModule } from 'ngx-pipes';
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ToastrModule } from "ngx-toastr";

import { ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";

import { AppState, InternalStateType } from "./app.service";
import { GoogleAnalyticsEventsService } from "./shared/services/google-analytics-events.service";

import "../assets/styles/animate.css";
import "../assets/styles/styles.scss";
import "../assets/styles/headings.css";

import { SharedModule } from "./shared/shared.module";
import { ProductModule } from "app/pages/product/product.module";
import { WINDOW_PROVIDERS } from "./shared/services/window.service";
import {LoaderService} from './shared/services/loader.service';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS, AppState];

interface StoreType {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    
  ],
  imports: [
    NgPipesModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgxCurrencyModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    SharedModule,
    CookieLawModule,
    ProductModule,
    PasswordStrengthMeterModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAgtwhf3asTnIJ93KpsuOmfrL76wAruYxs",
      libraries: ["places"]
    }),
    AgmSnazzyInfoWindowModule,
    TooltipModule.forRoot(),
    Angulartics2Module.forRoot([
      Angulartics2GoogleTagManager ,
      Angulartics2Hubspot
    ]),

    ...(environment.showDevModule ? [] : [])


  ],
  exports: [

  ],
  providers: [
    environment.ENV_PROVIDERS,
    WINDOW_PROVIDERS,
    APP_PROVIDERS,
    GoogleMapsAPIWrapper,
    GoogleAnalyticsEventsService,
    LoaderService
  ]
})
export class AppModule { }
