import { GoogleMapsAPIWrapper } from "@agm/core";
import { CommonModule } from "@angular/common";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatRippleModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSliderModule } from "@angular/material/slider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { CreditCardDirectivesModule } from "angular-cc-library";
import { ComponentModule } from "app/components/component.module";
import { NgPipesModule } from "ngx-pipes";
import { GoogleAnalyticsEventsService } from "../../shared/services/google-analytics-events.service";
import { SharedModule } from "../../shared/shared.module";
import { FooterProductComponent } from "./footer-product";
import { AngelAlignerComponent } from "./landing-pages/angel-aligner";
import { applyFormComponent } from "./landing-pages/apply-form/apply-form.component";
import { BookAppointmentComponent } from "./landing-pages/book-appointment";
import { bookingModalComponent } from "./landing-pages/booking-modal/booking-modal.component";
import { ClearCorrectComponent } from "./landing-pages/clear-correct";
import { ClearPathComponent } from "./landing-pages/clear-path";
import { CoronaDosDontsComponent } from "./landing-pages/coronavirus-dos-and-donts";
import { DifferentThinkingComponent } from "./landing-pages/different-thinking";
import { EmaxComponent } from "./landing-pages/emax";
import { GoingGreenComponent } from "./landing-pages/going-green";
import { InfectionControlComponent } from "./landing-pages/infection-control";
import { InmanComponent } from "./landing-pages/inman";
import { InvisalignComponent } from "./landing-pages/invisalign";
import { IveriTakeHomeComponent } from "./landing-pages/iveri-take-home";
import { KorTakeHomeComponent } from "./landing-pages/kor-take-home";
import { LanapProtocolComponent } from "./landing-pages/lanap-protocol";
import { LandingOverviewComponent } from "./landing-pages/landing-overview/landing-overview.component";
import { MarketingRedirectionComponent } from "./landing-pages/marketing-redirection/marketing-redirection.component";
import { OventusComponent } from "./landing-pages/oventus";
import { PhilipsZoomInOfficeComponent } from "./landing-pages/philips-zoom-in-office";
import { PhilipsZoomTakeHomeComponent } from "./landing-pages/philips-zoom-take-home/philips-zoom-take-home.component";
import { SdiTakeHomeComponent } from "./landing-pages/sdi-take-home";
import { Simpli5Component } from "./landing-pages/simpli5";
import { SmileStylerComponent } from "./landing-pages/smilestyler";
import { SomnodentComponent } from "./landing-pages/somnodent";
import { SparkAlignerComponent } from "./landing-pages/spark";
import { SureSmileComponent } from "./landing-pages/suresmile/suresmile.component";
import { TrulineComponent } from "./landing-pages/truline";
import { UltraDentTakeHomeComponent } from "./landing-pages/ultra-dent-take-home/ultra-dent-take-home.component";
import { UltraDentInOfficeComponent } from "./landing-pages/ultra-dent-in-office/ultra-dent-in-office.component";
import { MainComponent } from "./main/main.component";
import { ProceedInformationModalComponent } from "./proceed-information-modal";
import { SmileStylerTreatmentsComponent } from "./product-modal/smilestyler-treatments";
import { ProductRoutingModule } from "./shared/product-routing.module";
import { BoutiqueComponent } from './landing-pages/boutique/boutique.component';
import { OpalescenceComponent } from './landing-pages/opalescence/opalescence.component';
import { PolaComponent } from './landing-pages/pola/pola.component';
import { GettingStartedMarketingComponent } from './landing-pages/getting-started-marketing/getting-started-marketing.component';
import { GettingStartedPracticeManagerComponent } from './landing-pages/getting-started-practice-manager/getting-started-practice-manager.component';
import { GettingStartedDentalComponent } from './landing-pages/getting-started-dental/getting-started-dental.component';
import { GettingStartedCoordinatorComponent } from './landing-pages/getting-started-coordinator/getting-started-coordinator.component';
import { PartnerPricingGeneralComponent } from './landing-pages/partner-pricing-general/partner-pricing-general.component';
import { PartnerPricingPlansComponent } from './landing-pages/partner-pricing-plans/partner-pricing-plans.component';
import { PartnerPricingCalculatorComponent } from './landing-pages/partner-pricing-calculator/partner-pricing-calculator.component';
import { PartnerPricingFreeComponent } from './landing-pages/partner-pricing-free/partner-pricing-free.component';
import { ConsumerSmileRightComponent } from './landing-pages/consumer-smile-right/consumer-smile-right.component';
import { ConsumerWeListenedComponent } from './landing-pages/consumer-we-listened/consumer-we-listened.component';
import { ConsumerCommunicationIntroductionComponent } from './landing-pages/consumer-communication-introduction/consumer-communication-introduction.component';
import { PartnerLetGetStartedComponent } from './landing-pages/partner-let-get-started/partner-let-get-started.component';
import { GettingStartedHomeComponent } from './landing-pages/getting-started-home/getting-started-home.component';
import { PreModalComponent } from './landing-pages/partner-pricing-general/pre-modal/pre-modal.component';
import { StandModalComponent } from './landing-pages/partner-pricing-general/stand-modal/stand-modal.component';
import { StartModalComponent } from './landing-pages/partner-pricing-general/start-modal/start-modal.component';
import { CalModalComponent } from './landing-pages/partner-pricing-free/cal-modal/cal-modal.component';
import { NgxDonutChartModule } from 'ngx-doughnut-chart';
import { ChartExampleComponent } from './landing-pages/chart-example/chart-example.component';
import { HygieneRecal1Component } from './landing-pages/hygiene-recal1/hygiene-recal1.component';
import { HygieneRecal2Component } from './landing-pages/hygiene-recal2/hygiene-recal2.component';
import { HygieneConfirmationComponent } from './landing-pages/hygiene-confirmation/hygiene-confirmation.component';
import { HygieneDentalTipsComponent } from './landing-pages/hygiene-dental-tips/hygiene-dental-tips.component';
import { HygienePeriodontistComponent } from './landing-pages/hygiene-periodontist/hygiene-periodontist.component';
import { HygieneBadBreathComponent } from './landing-pages/hygiene-bad-breath/hygiene-bad-breath.component';
import { DentistGeneralInfoComponent } from './landing-pages/dentist-general-info/dentist-general-info.component';
import { IntropageComponentComponent } from './landing-pages/intropage-component/intropage-component.component';
@NgModule({
  imports: [
    CreditCardDirectivesModule,
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
    CommonModule,
    ComponentModule,
    RouterModule,
    SharedModule,
    ProductRoutingModule,
    NgPipesModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgxDonutChartModule
  ],
  providers: [GoogleMapsAPIWrapper, GoogleAnalyticsEventsService],
  declarations: [
    MainComponent,
    MarketingRedirectionComponent,
    applyFormComponent,
    LandingOverviewComponent,
    FooterProductComponent,
    InfectionControlComponent,
    CoronaDosDontsComponent,
    LanapProtocolComponent,
    EmaxComponent,
    InvisalignComponent,
    SomnodentComponent,
    OventusComponent,
    SmileStylerComponent,
    SmileStylerTreatmentsComponent,
    BookAppointmentComponent,
    DifferentThinkingComponent,
    bookingModalComponent,
    SureSmileComponent,
    InmanComponent,
    AngelAlignerComponent,
    ClearCorrectComponent,
    SparkAlignerComponent,
    Simpli5Component,
    TrulineComponent,
    ClearPathComponent,
    ProceedInformationModalComponent,
    PhilipsZoomInOfficeComponent,
    PhilipsZoomTakeHomeComponent,
    PhilipsZoomInOfficeComponent,
    IveriTakeHomeComponent,
    KorTakeHomeComponent,
    SdiTakeHomeComponent,
    UltraDentTakeHomeComponent,
    UltraDentInOfficeComponent,
    GoingGreenComponent,
    BoutiqueComponent,
    OpalescenceComponent,
    PolaComponent,
    GettingStartedMarketingComponent,
    GettingStartedPracticeManagerComponent,
    GettingStartedDentalComponent,
    GettingStartedCoordinatorComponent,
    PartnerPricingGeneralComponent,
    PartnerPricingPlansComponent,
    PartnerPricingCalculatorComponent,
    PartnerPricingFreeComponent,
    ConsumerSmileRightComponent,
    ConsumerWeListenedComponent,
    ConsumerCommunicationIntroductionComponent,
    PartnerLetGetStartedComponent,
    GettingStartedHomeComponent,
    PreModalComponent,
    StandModalComponent,
    StartModalComponent,
    CalModalComponent,
    ChartExampleComponent,
    HygieneRecal1Component,
    HygieneRecal2Component,
    HygieneConfirmationComponent,
    HygieneDentalTipsComponent,
    HygienePeriodontistComponent,
    HygieneBadBreathComponent,
    DentistGeneralInfoComponent,
    IntropageComponentComponent
  ],
  entryComponents: [
    PreModalComponent,
    StandModalComponent,
    StartModalComponent,
    CalModalComponent],
  exports: [
    MainComponent,
    MarketingRedirectionComponent,
    applyFormComponent,
    LandingOverviewComponent,
    //  HeaderProductComponent,
    FooterProductComponent,
    InfectionControlComponent,
    CoronaDosDontsComponent,
    LanapProtocolComponent,
    EmaxComponent,
    InvisalignComponent,
    SomnodentComponent,
    OventusComponent,
    SmileStylerComponent,
    SmileStylerTreatmentsComponent,
    BookAppointmentComponent,
    DifferentThinkingComponent,
    bookingModalComponent,
    SureSmileComponent,
    InmanComponent,
    AngelAlignerComponent,
    ClearCorrectComponent,
    SparkAlignerComponent,
    Simpli5Component,
    TrulineComponent,
    ClearPathComponent,
    ProceedInformationModalComponent,
    PhilipsZoomInOfficeComponent,
    PhilipsZoomTakeHomeComponent,
    PhilipsZoomInOfficeComponent,
    IveriTakeHomeComponent,
    KorTakeHomeComponent,
    SdiTakeHomeComponent,
    UltraDentTakeHomeComponent,
    GoingGreenComponent,
    BoutiqueComponent,
    OpalescenceComponent,
    PolaComponent,
    GettingStartedMarketingComponent,
    GettingStartedPracticeManagerComponent,
    GettingStartedDentalComponent,
    GettingStartedCoordinatorComponent,
    PartnerPricingGeneralComponent,
    PartnerPricingPlansComponent,
    PartnerPricingCalculatorComponent,
    PartnerPricingFreeComponent,
    ConsumerSmileRightComponent,
    ConsumerWeListenedComponent,
    ConsumerCommunicationIntroductionComponent,
    PartnerLetGetStartedComponent,
    GettingStartedHomeComponent,
    ChartExampleComponent,
    HygieneRecal1Component,
    HygieneRecal2Component,
    HygieneConfirmationComponent,
    HygieneDentalTipsComponent,
    HygienePeriodontistComponent,
    HygieneBadBreathComponent,
    DentistGeneralInfoComponent
  ],
})
export class ProductModule {}
