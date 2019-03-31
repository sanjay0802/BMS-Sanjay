import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import {ApiServiceProvider} from "../providers/api-service/api-service";
import {HttpClientModule} from "@angular/common/http";
import {StorageServiceProvider} from "../providers/storage-service/storage-service";
import {WidgetUtilService} from "../utils/widget-utils";
import {HomePage} from "../pages/home/home";
import {HomePageModule} from "../pages/home/home.module";
import {RegistrationPage} from "../pages/registration/registration";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiServiceProvider,
    StorageServiceProvider,
    WidgetUtilService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
