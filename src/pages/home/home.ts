import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegistrationPage} from "../registration/registration";

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
    {name: 'Stock', icon: 'cube'},
    {name: 'Generate Reports', icon: 'albums'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  moveToPage(menuItem) {
    this.navCtrl.push(menuItem.page);
  }

}
