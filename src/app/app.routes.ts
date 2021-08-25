import { RouterModule, Routes } from '@angular/router';
import { AngelAlignerComponent } from './pages/product/landing-pages/angel-aligner';
import { ClearCorrectComponent } from './pages/product/landing-pages/clear-correct';
import { ClearPathComponent } from './pages/product/landing-pages/clear-path';
import { DentistGeneralInfoComponent } from './pages/product/landing-pages/dentist-general-info/dentist-general-info.component';
// tslint:disable-next-line:max-line-length
import { GettingStartedCoordinatorComponent } from './pages/product/landing-pages/getting-started-coordinator/getting-started-coordinator.component';
import { GettingStartedDentalComponent } from './pages/product/landing-pages/getting-started-dental/getting-started-dental.component';
import { GettingStartedHomeComponent } from './pages/product/landing-pages/getting-started-home/getting-started-home.component';
// tslint:disable-next-line:max-line-length
import { GettingStartedMarketingComponent } from './pages/product/landing-pages/getting-started-marketing/getting-started-marketing.component';
// tslint:disable-next-line:max-line-length
import { GettingStartedPracticeManagerComponent } from './pages/product/landing-pages/getting-started-practice-manager/getting-started-practice-manager.component';
import { HygieneBadBreathComponent } from './pages/product/landing-pages/hygiene-bad-breath/hygiene-bad-breath.component';
import { HygieneConfirmationComponent } from './pages/product/landing-pages/hygiene-confirmation/hygiene-confirmation.component';
import { HygieneDentalTipsComponent } from './pages/product/landing-pages/hygiene-dental-tips/hygiene-dental-tips.component';
import { HygienePeriodontistComponent } from './pages/product/landing-pages/hygiene-periodontist/hygiene-periodontist.component';
import { HygieneRecal1Component } from './pages/product/landing-pages/hygiene-recal1/hygiene-recal1.component';
import { HygieneRecal2Component } from './pages/product/landing-pages/hygiene-recal2/hygiene-recal2.component';
import { PartnerLetGetStartedComponent } from './pages/product/landing-pages/partner-let-get-started/partner-let-get-started.component';
import { PartnerPricingFreeComponent } from './pages/product/landing-pages/partner-pricing-free/partner-pricing-free.component';
import { PartnerPricingGeneralComponent } from './pages/product/landing-pages/partner-pricing-general/partner-pricing-general.component';
import { PartnerPricingPlansComponent } from './pages/product/landing-pages/partner-pricing-plans/partner-pricing-plans.component';
import { PhilipsZoomInOfficeComponent } from './pages/product/landing-pages/philips-zoom-in-office';
import { Simpli5Component } from './pages/product/landing-pages/simpli5';

export const ROUTES: Routes = [
    {path: 'angel', component: AngelAlignerComponent},
    {path: 'ccc', component: ClearCorrectComponent},
    {path: 'cpc', component: ClearPathComponent},
    {path: 'part', component: PartnerLetGetStartedComponent},
    {path: 'dental', component: GettingStartedDentalComponent},
    {path: 'home', component: GettingStartedHomeComponent},
    {path: 'cood', component: GettingStartedCoordinatorComponent},
    {path: 'manage', component: GettingStartedPracticeManagerComponent},
    {path: 'maket', component: GettingStartedMarketingComponent},
    {path: 'general', component: PartnerPricingGeneralComponent},
    {path: 'plans', component: PartnerPricingPlansComponent},
    {path: 'frees', component: PartnerPricingFreeComponent},
    {path: 'recal1', component: HygieneRecal1Component},
    {path: 'recal2', component: HygieneRecal2Component},
    {path: 'confirm', component: HygieneConfirmationComponent},
    {path: 'tips', component: HygieneDentalTipsComponent},
    {path: 'period', component: HygienePeriodontistComponent},
    {path: 'badbreath', component: HygieneBadBreathComponent},
    {path: 'dentinfo', component: DentistGeneralInfoComponent},
    {path: 'zoomin', component: PhilipsZoomInOfficeComponent},
    {path: 'simple', component: Simpli5Component}
];
