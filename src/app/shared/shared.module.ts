import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
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

import { NgxCurrencyModule } from 'ngx-currency';
import { NgPipesModule } from 'ngx-pipes';

import { SafeHtmlPipe } from 'app/tools/pipes/safe-html.pipe';
import { CustomPhonePipe } from 'app/tools/pipes/custom-phone.pipe';
import { CustomDatePipe } from 'app/tools/pipes/custom-date.pipe';
import { CustomDateTimePipe } from 'app/tools/pipes/custom-date-time.pipe';
import { CustomCurrencyPipe } from 'app/tools/pipes/custom-currency.pipe';
import { ObjectPropertyValuePipe } from 'app/tools/pipes/object-property-values.pipe';
import { UtilsService } from 'app/shared/services/utils.service';
import { InterceptedHttp } from 'app/shared/services/intercepted-http.service';
import { SharedRoutingModule } from 'app/shared/shared/shared-routing.module';
import { Simple404Component } from 'app/shared/components/simple404/simple404.component';
import { MapCreateComponent } from 'app/shared/components/map-create/map-create.component';
import { MapViewComponent } from 'app/shared/components/map-view/map-view.component';
import { ErrorModalComponent } from 'app/shared/components/error-modal/error-modal.component';
import { CloudBgComponent } from 'app/shared/components/cloudBg/cloudBg.component';
import { BlueBgComponent } from 'app/shared/components/blueBg/blueBg.component';
import { GoogleAnalyticsEventsService } from './services/google-analytics-events.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { AdressInputComponent } from './components/adress-input/adress-input.component';
import { DurationSliderInputComponent } from './components/duration-slider-input/duration-slider-input.component';
import { AmountSliderInputComponent } from './components/amount-slider-input/amount-slider-input.component';
import { EpDocumentViewImageComponent } from './components/ep-document-view-image/ep-document-view-image.component';
import { ContactInputComponent } from './components/contact-input/contact-input.component';
import { MapMultipleViewComponent } from './components/map-multiple-view/map-multiple-view.component';
import { WithoutArrayMultipleValue } from './pipes/without-array-object.pipe';
import { FilterArrayMultipleValue } from './pipes/filter-array-object.pipe';
import { FilterArrayMultipleContainValuePipe } from './pipes/filter-array-object-contain.pipe';
import { LengthOfArrayPipe } from './pipes/length-of-array .pipe';
import { MatchHeightDirective } from './directives/match-height.directive';
import { ConfirmDialogSingleButtonComponent } from './components/confirm-dialog-single-button/confirm-dialog-single-button.component';
import { ConfirmDialogMessageComponent } from './components/confirm-dialog-message/confirm-dialog-message.component';
import { ConfirmDialogMultipleComponent } from './components/confirm-dialog-multiple/confirm-dialog-multiple.component';
import { ConfirmDialogOptionsComponent } from './components/confirm-dialog-options/confirm-dialog-options.component';
import { DocumentUrlViewComponent } from './components/document-url-view/document-url-view.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { OrderArrayObject } from './pipes/order-array-object.pipe';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgtwhf3asTnIJ93KpsuOmfrL76wAruYxs',
      libraries: ['places']
    }),
    DeviceDetectorModule.forRoot(),
    AgmSnazzyInfoWindowModule,
    CommonModule,
    SharedRoutingModule,
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
    NgPipesModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgxCurrencyModule,
    NgxChartsModule
  ],

  declarations: [

    BlueBgComponent,
    CloudBgComponent,
    ErrorModalComponent,
    MapViewComponent,
    MapCreateComponent,
    Simple404Component,
    ObjectPropertyValuePipe,
    CustomCurrencyPipe,
    CustomDateTimePipe,
    CustomDatePipe,
    CustomPhonePipe,
    SafeHtmlPipe,
    ConfirmationDialogComponent,
    AdressInputComponent,
    DurationSliderInputComponent,
    AmountSliderInputComponent,
    EpDocumentViewImageComponent,
    ContactInputComponent,
    MapMultipleViewComponent,
    WithoutArrayMultipleValue,
    FilterArrayMultipleValue,
    FilterArrayMultipleContainValuePipe,
    OrderArrayObject,
    LengthOfArrayPipe,
    MatchHeightDirective,
    ConfirmDialogSingleButtonComponent,
    ConfirmDialogMessageComponent,
    ConfirmDialogMultipleComponent,
    ConfirmDialogOptionsComponent,
    DocumentUrlViewComponent,
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: InterceptedHttp, multi: true },
    UtilsService,
    CurrencyPipe,
    ObjectPropertyValuePipe,
    CustomCurrencyPipe,
    CustomDateTimePipe,
    CustomDatePipe,
    CustomPhonePipe,
    SafeHtmlPipe,
    DatePipe,
    GoogleMapsAPIWrapper,
    GoogleAnalyticsEventsService,
    WithoutArrayMultipleValue,
    FilterArrayMultipleValue,
    FilterArrayMultipleContainValuePipe,
    OrderArrayObject,
    LengthOfArrayPipe

  ],
  exports: [
    BlueBgComponent,
    CloudBgComponent,
    ObjectPropertyValuePipe,
    MapViewComponent,
    MapCreateComponent,
    CustomCurrencyPipe,
    CustomDateTimePipe,
    CustomDatePipe,
    CustomPhonePipe,
    SafeHtmlPipe,
    Simple404Component,
    ErrorModalComponent,
    ConfirmationDialogComponent,
    AdressInputComponent,
    AmountSliderInputComponent,
    DurationSliderInputComponent,
    EpDocumentViewImageComponent,
    ContactInputComponent,
    MapMultipleViewComponent,
    WithoutArrayMultipleValue,
    FilterArrayMultipleValue,
    FilterArrayMultipleContainValuePipe,
    OrderArrayObject,
    LengthOfArrayPipe,
    MatchHeightDirective,
    DocumentUrlViewComponent,
    NgxChartsModule

  ],
  entryComponents: [
    ConfirmDialogSingleButtonComponent,
    ConfirmDialogMessageComponent,
    ConfirmDialogMultipleComponent,
    ConfirmDialogOptionsComponent,
  ],
})
export class SharedModule { }
