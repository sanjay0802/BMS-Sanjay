import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from "../../providers/api-service/api-service";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  customerList = []
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private apiService: ApiServiceProvider) {
  }

  searchProducts(name) {
      this.apiService.searchCustomer(name).subscribe((res: any) => {
        this.customerList = res
      })
    }
}
