import { MyApp } from '../../app/app.component';
import { WidgetUtilService } from '../../utils/widget-utils';
import { StorageServiceProvider } from '../../providers/storage-service/storage-service';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CONSTANTS } from '../../utils/constants';
import {HomePage} from "../home/home";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  userLoginForm : FormGroup;
  passwordLogin: FormControl;
  userLoginId: FormControl;
  showLoginLoader = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private apiService: ApiServiceProvider,
              private widgetUtil: WidgetUtilService) {

    this.checkData()
  }

  async checkData() {
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  createFormControls() {
    this.userLoginId = new FormControl('', [
      Validators.required
    ]);
    this.passwordLogin = new FormControl('', [
      Validators.required
    ]);
  }

  createForm() {
    this.userLoginForm = new FormGroup({
      userLoginId: this.userLoginId,
      passwordLogin: this.passwordLogin
    });
  }


  login() {
    this.showLoginLoader = true;
    this.apiService.login({
      username: this.userLoginId.value.trim(),
      password: this.passwordLogin.value.trim()
    }).subscribe(async (result : any) => {
      this.showLoginLoader = false;
      if (result.success) {
        this.widgetUtil.showToast('Login Successfully...')
        this.navCtrl.setRoot(HomePage)
      } else {
        this.widgetUtil.showToast('Username or password is incorrect')
      }
    }, (error:any) => {
      this.showLoginLoader = false;
      if (error.statusText === 'Unknown Error'){
        this.widgetUtil.showToast(CONSTANTS.INTERNET_ISSUE)
      } else {
        this.widgetUtil.showToast(CONSTANTS.AUTH_FAIL);
      }
    })
  }
}
