
import { Component, OnInit } from '@angular/core';
import {ApiServiceProvider} from "../../providers/api-service/api-service";
import {HomePage} from "../home/home";
import {WidgetUtilService} from "../../utils/widget-utils";
import {NavController} from "ionic-angular";

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage implements OnInit {

  constructor(private apiService: ApiServiceProvider,
              private navCtrl: NavController,
              private widgetService: WidgetUtilService) {
  }

  register(name,stock,date) {
    const modifiedDate = date.day.toString() + '/' + date.month.toString() + '/' + date.year.toString()
    this.apiService.register( { name : name, stock: stock, date: modifiedDate }).subscribe(res => {
      this.widgetService.showToast('Customer details saved successfully...')
      this.navCtrl.push(HomePage)
    })
  }

  ngOnInit() {
  }

}
