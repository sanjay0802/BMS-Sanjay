import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { WidgetUtilService } from '../../utils/widget-utils';
import { VendorPage } from '../vendor/vendor';

/**
 * Generated class for the VendorUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendor-update',
  templateUrl: 'vendor-update.html',
})
export class VendorUpdatePage {
  vendorData:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public apiService:ApiServiceProvider,public widgetService:WidgetUtilService ) {
  this.vendorData=this.navParams.get('vendor')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorUpdatePage');
  }
  updateEntryForVendor(filledBottle,emptyBottle,dc,date) {
    this.apiService.updateVendorDetails(
      {filled: filledBottle, empty: emptyBottle, dcnumber: dc, Ostock: this.vendorData.Ostock, updatedDate: date, vendorName: this.vendorData.vendorName})
      .subscribe((res: any)=>{
        if(res.success) {
          this.widgetService.showToast('Updated Successfully...')
          this.navCtrl.push(VendorPage)
        } else {
          this.widgetService.showToast('Error while saving')
        }
    })
  }


}
