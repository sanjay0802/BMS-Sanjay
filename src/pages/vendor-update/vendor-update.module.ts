import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorUpdatePage } from './vendor-update';

@NgModule({
  declarations: [
    VendorUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(VendorUpdatePage),
  ],
})
export class VendorUpdatePageModule {}
