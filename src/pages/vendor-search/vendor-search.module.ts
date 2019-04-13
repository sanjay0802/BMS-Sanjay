import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorSearchPage } from './vendor-search';

@NgModule({
  declarations: [
    VendorSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(VendorSearchPage),
  ],
})
export class VendorSearchPageModule {}
