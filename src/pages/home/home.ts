import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistrationPage} from "../registration/registration";
import {SearchPage} from "../search/search";
import { VendorPage } from '../vendor/vendor';
import { GenerateReportPage } from '../generate-report/generate-report';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'HomePage'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  menus = [
    {name: 'Add New Customer', icon: 'person-add', page:'RegistrationPage'},
    {name: 'Search Customer', icon: 'search', page: 'SearchPage'},
    {name: 'Receival', icon:'cube',page: 'VendorPage'},
    {name: 'Generate Reports', icon:'albums',page:'GenerateReportPage'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  moveToPage(menuItem) {
    console.log('value---------------'+menuItem.page);
    if (menuItem.page === 'RegistrationPage') {
      this.navCtrl.push(RegistrationPage);
    } else if(menuItem.page === 'SearchPage') {
      this.navCtrl.push(SearchPage);
    }else if(menuItem.page === 'VendorPage'){
      console.log('====================inside vendore page');
      this.navCtrl.push(VendorPage);
    }else{
      console.log('========else block');
      this.navCtrl.push(GenerateReportPage);
    }
  }

}
