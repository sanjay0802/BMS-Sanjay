import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { VendorUpdatePage } from '../vendor-update/vendor-update';

/**
 * Generated class for the VendorSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vendor-search',
  templateUrl: 'vendor-search.html',
})
export class VendorSearchPage {
      vendorList=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public apiService:ApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VendorSearchPage');
  }
  searchVendors(vendorName){
    this.apiService.searchVendor(vendorName).subscribe((res:any)=>
    {this.vendorList=res}
    )
  }
  updateVendor(vendor){
     this.navCtrl.push(VendorUpdatePage,{vendor})
  }

}
