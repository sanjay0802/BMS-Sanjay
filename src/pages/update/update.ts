import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from "../../providers/api-service/api-service";
import {WidgetUtilService} from "../../utils/widget-utils";
import {HomePage} from "../home/home";

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  data : any = {}

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private apiService: ApiServiceProvider,
              private widgetService: WidgetUtilService) {

    this.data = this.navParams.get('customer')
  }

  updateEntry(filledBottle,emptyBottle,dc,date) {
    this.apiService.updateCusotmerDetails(
      {filled: filledBottle, empty: emptyBottle, dcnumber: dc, Ostock: this.data.Ostock, updatedDate: date, customername: this.data.customername})
      .subscribe((res: any)=>{
        if(res.success) {
          this.widgetService.showToast('Updated Successfully...')
          this.navCtrl.push(HomePage)
        } else {
          this.widgetService.showToast('Error while saving')
        }
    })
  }

}
