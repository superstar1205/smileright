import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { ConsumerProductCalculatorComponent } from '../consumer-product-calculator/consumer-product-calculator.component';
import { ContainerComponent } from '../container/container.component';
import { MerchantAppointmentComponent } from '../merchant-appointment/merchant-appointment.component';
import { MerchantContactComponent } from '../merchant-contact/merchant-contact.component';



//import { TestimonyEditComponent } from '../testimony/testimony-edit/testimony-edit.component';

const routes: Routes = [
  { path: 'confirmation-dialog', component: ConfirmationDialogComponent },
  { path: 'consumer-calculator', component: ConsumerProductCalculatorComponent },
  { path: 'appointment', component: MerchantAppointmentComponent },
  { path: 'appointment/:merchantID', component: MerchantAppointmentComponent },
  { path: 'MerchantContactComponent', component: MerchantContactComponent },
  { path: 'root', component: ContainerComponent },
  { path: 'index', component: ContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
