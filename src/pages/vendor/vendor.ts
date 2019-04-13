import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VendorRegistrationPage } from '../vendor-registration/vendor-registration';
import { VendorSearchPage } from '../vendor-search/vendor-search';

/**
 * Generated class for the VendorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendor',
  templateUrl: 'vendor.html',
})
export class VendorPage {

  vendors=[{name:'Add Vendor Details',icon:'person-add' ,page:'VendorRegistrationPage'},
           {name:'Search Vendor',icon:'search',page:'VendorSearchPage'}
];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorPage');
  }

moveToPage(vendorItem)
{
  if(vendorItem.page === 'VendorRegistrationPage'){
     this.navCtrl.push(VendorRegistrationPage);
  }else if(vendorItem.page === 'VendorSearchPage')
  { this.navCtrl.push(VendorSearchPage);
}
}

}
