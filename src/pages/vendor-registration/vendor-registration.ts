import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VendorPage } from '../vendor/vendor';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { WidgetUtilService } from '../../utils/widget-utils';

/**
 * Generated class for the VendorRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * 
 */

@IonicPage()
@Component({
  selector: 'page-vendor-registration',
  templateUrl: 'vendor-registration.html',
})
export class VendorRegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService:ApiServiceProvider,public widgetService:WidgetUtilService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorRegistrationPage');
  }

  
  registerVendor(vendorName,oStock,date) {
    console.log('==========1234');
    const modifiedDate1 = date.day.toString() + '/' + date.month.toString() + '/' + date.year.toString()
    console.log('==========1234'+modifiedDate1);
    this.apiService.registerVendors( { vendorName :vendorName, oStock:oStock, date:modifiedDate1 }).subscribe(res => {
      this.widgetService.showToast('Vendor details saved successfully...')
      this.navCtrl.push(VendorPage)
    })
  }

}
