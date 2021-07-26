import { MainComponent } from '../main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LanapProtocolComponent } from '../landing-pages/lanap-protocol';
import { EmaxComponent } from '../landing-pages/emax';
import { InvisalignComponent } from '../landing-pages/invisalign';
import { SomnodentComponent } from '../landing-pages/somnodent';
import { OventusComponent } from '../landing-pages/oventus';
import { LandingOverviewComponent } from '../landing-pages/landing-overview/landing-overview.component';
import { applyFormComponent } from '../landing-pages/apply-form/apply-form.component';
import { SmileStylerComponent } from '../landing-pages/smilestyler';
import { SmileStylerTreatmentsComponent } from '../product-modal/smilestyler-treatments';
import { InfectionControlComponent } from '../landing-pages/infection-control';
import { CoronaDosDontsComponent } from '../landing-pages/coronavirus-dos-and-donts';
import { BookAppointmentComponent } from '../landing-pages/book-appointment';
import { MarketingRedirectionComponent } from '../landing-pages/marketing-redirection/marketing-redirection.component';
import { DifferentThinkingComponent } from '../landing-pages/different-thinking';
import { bookingModalComponent } from '../landing-pages/booking-modal/booking-modal.component';
import { SureSmileComponent } from '../landing-pages/suresmile/suresmile.component';
import { InmanComponent } from '../landing-pages/inman';
import { AngelAlignerComponent } from '../landing-pages/angel-aligner';
import { ClearCorrectComponent } from '../landing-pages/clear-correct';
import { SparkAlignerComponent } from '../landing-pages/spark';
import { Simpli5Component } from '../landing-pages/simpli5';
import { TrulineComponent } from '../landing-pages/truline';
import { ClearPathComponent } from '../landing-pages/clear-path';
import { ProceedInformationModalComponent } from '../proceed-information-modal';
import { PhilipsZoomTakeHomeComponent } from '../landing-pages/philips-zoom-take-home/philips-zoom-take-home.component';
import { PhilipsZoomInOfficeComponent } from '../landing-pages/philips-zoom-in-office';
import { IveriTakeHomeComponent } from '../landing-pages/iveri-take-home';
import { KorTakeHomeComponent } from '../landing-pages/kor-take-home';
import { SdiTakeHomeComponent } from '../landing-pages/sdi-take-home';
import { BoutiqueComponent } from '../landing-pages/boutique/boutique.component';
import { ChartExampleComponent } from '../landing-pages/chart-example/chart-example.component';


const routes: Routes = [
  {
    path: 'c/:linkCode/:linkID',
    component: MarketingRedirectionComponent
  },
  {
    path: 'BoutiqueComponent',
    component: BoutiqueComponent
  },
  {
    path: 'ChartExampleComponent',
    component: ChartExampleComponent
  },


  
  

  {
    path: 'product', component: MainComponent, children: [

      { path: 'lanap', component: LanapProtocolComponent, outlet: 'page' },
      { path: 'emax', component: EmaxComponent, outlet: 'page' },
      { path: 'invisalign', component: InvisalignComponent, outlet: 'page' },
      { path: 'somnodent', component: SomnodentComponent, outlet: 'page' },
      { path: 'oventus', component: OventusComponent, outlet: 'page' },
      { path: 'smilestyler', component: SmileStylerComponent, outlet: 'page' },
      { path: 'applyFormComponent', component: applyFormComponent, outlet: 'page' },
      { path: 'infectioncontrol', component: InfectionControlComponent, outlet: 'page' },
      { path: 'coronavirus-dos-and-donts', component: CoronaDosDontsComponent, outlet: 'page' },
      { path: 'book-an-appointment', component: BookAppointmentComponent, outlet: 'page' },
      { path: 'different-thinking', component: DifferentThinkingComponent, outlet: 'page' },
      { path: 'suresmile', component: SureSmileComponent, outlet: 'page' },
      { path: 'inman', component: InmanComponent, outlet: 'page' },
      { path: 'angel-align', component: AngelAlignerComponent, outlet: 'page' },
      { path: 'clear-correct', component: ClearCorrectComponent, outlet: 'page' },
      { path: 'spark-aligners', component: SparkAlignerComponent, outlet: 'page' },
      { path: 'simpli5', component: Simpli5Component, outlet: 'page' },
      { path: 'iveritakehome', component: IveriTakeHomeComponent, outlet: 'page' },
      { path: 'truline', component: TrulineComponent, outlet: 'page' },
      { path: 'clear-path', component: ClearPathComponent, outlet: 'page' },
      { path: 'philipszoominoffice', component: PhilipsZoomInOfficeComponent, outlet: 'page' },
      { path: 'philipszoomtakehome', component: PhilipsZoomTakeHomeComponent, outlet: 'page' },
      { path: 'kortakehome', component: KorTakeHomeComponent, outlet: 'page' },

      { path: 'SmileStylerTreatmentsComponent', component: SmileStylerTreatmentsComponent, outlet: 'page' },

      { path: 'ProceedInformationModalComponent', component: ProceedInformationModalComponent, outlet: 'page' },

      { path: 'sditakehome', component: SdiTakeHomeComponent, outlet: 'page' },

      { path: 'main', component: LandingOverviewComponent, outlet: 'page' },
      { path: 'main/:code', component: LandingOverviewComponent, outlet: 'page' },
      { path: 'main/:code/:campaignID', component: LandingOverviewComponent, outlet: 'page' },
      { path: 'main/:code/:campaignID/:patientID', component: LandingOverviewComponent, outlet: 'page' },

      { path: 'book-appointment-modal', component: bookingModalComponent, outlet: 'page' },
      { path: 'apply-modal', component: applyFormComponent, outlet: 'page' }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
