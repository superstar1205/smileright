import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdressInputComponent } from '../components/adress-input/adress-input.component';
import { EpDocumentViewImageComponent } from '../components/ep-document-view-image/ep-document-view-image.component';
import { ContactInputComponent } from '../components/contact-input/contact-input.component';
import { MapMultipleViewComponent } from '../components/map-multiple-view/map-multiple-view.component';
import { DocumentUrlViewComponent } from '../components/document-url-view/document-url-view.component';

const routes: Routes = [
  {
    path: "adress-input",
    component: AdressInputComponent
  },
  {
    path: "EpDocumentViewImageComponent",
    component: EpDocumentViewImageComponent
  },
  {
    path: "contact-input",
    component: ContactInputComponent
  },
  {
    path: "contact-input/:consumerID",
    component: ContactInputComponent
  },
  {
    path: "MapMultipleViewComponent",
    component: MapMultipleViewComponent
  },
  {
    path: "DocumentUrlViewComponent",
    component: DocumentUrlViewComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
