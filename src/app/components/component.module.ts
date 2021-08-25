import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { ProductCalculatorComponent } from 'app/components/product-calculator/product-calculator.component';
import { ComponentRoutingModule } from 'app/components/shared/component-routing.module';
import { HeaderProductComponent } from 'app/pages/product/header-product';
import { CarouselComponent } from 'app/shared/components/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { NgPipesModule } from 'ngx-pipes';
import { SharedModule } from '../shared/shared.module';
import { ConsumerProductCalculatorComponent } from './consumer-product-calculator/consumer-product-calculator.component';
import { MerchantAppointmentComponent } from './merchant-appointment/merchant-appointment.component';
import { MerchantTradingHoursViewComponent } from './merchant-trading-hours-view/merchant-trading-hours-view.component';
import { SuitableProductCompactListComponent } from './suitable-product-compact-list/suitable-product-compact-list/suitable-product-compact-list.component';
import { MerchantContactComponent } from './merchant-contact/merchant-contact.component';
import { HowToApplyModalComponent } from './howtoapply-modal';
import { HowToApplyComponent } from './how-to-apply';
import { ProductModalComponent } from './product-modal';
import { LeadFormSlimComponent } from './lead-form-slim';
import { ContainerComponent } from './container/container.component';

@NgModule({
  bootstrap: [],
  providers: [],

  imports: [
    NgPipesModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    HttpClientJsonpModule,
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
    PasswordStrengthMeterModule,
    ComponentRoutingModule,
    CarouselModule.forRoot(),
    CountdownTimerModule.forRoot(),
  ],
  exports: [
 
    ProductCalculatorComponent,
    LeadFormSlimComponent,
    CarouselComponent,
    SuitableProductCompactListComponent,
    ConsumerProductCalculatorComponent,
    HowToApplyComponent,
    HowToApplyModalComponent,
    ProductModalComponent,
    MerchantAppointmentComponent,
    MerchantTradingHoursViewComponent,
    HeaderProductComponent,
    MerchantContactComponent,
    ContainerComponent
  ],
  declarations: [

    LeadFormSlimComponent,
    ProductCalculatorComponent,
    HowToApplyComponent,
    HowToApplyModalComponent,
    ProductModalComponent,
    CarouselComponent,
    SuitableProductCompactListComponent,
    ConsumerProductCalculatorComponent,
    MerchantAppointmentComponent,
    MerchantTradingHoursViewComponent,
    HeaderProductComponent,
    MerchantContactComponent,
    ContainerComponent
  ],
  entryComponents: [MerchantTradingHoursViewComponent],
})
export class ComponentModule {}
