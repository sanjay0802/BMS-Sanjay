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
import {RegistrationPageModule} from "../pages/registration/registration.module";
import {SearchPageModule} from "../pages/search/search.module";
import {SearchPage} from "../pages/search/search";
import {UpdatePageModule} from "../pages/update/update.module";
import {UpdatePage} from "../pages/update/update";
import { VendorPage } from '../pages/vendor/vendor';
import { VendorRegistrationPage } from '../pages/vendor-registration/vendor-registration';
import { VendorSearchPage } from '../pages/vendor-search/vendor-search';
import { VendorUpdatePage } from '../pages/vendor-update/vendor-update';
import { GenerateReportPage } from '../pages/generate-report/generate-report';
import { VendorPageModule } from '../pages/vendor/vendor.module';
import { VendorRegistrationPageModule } from '../pages/vendor-registration/vendor-registration.module';
import { VendorSearchPageModule } from '../pages/vendor-search/vendor-search.module';
import { VendorUpdatePageModule } from '../pages/vendor-update/vendor-update.module';
import { GenerateReportPageModule } from '../pages/generate-report/generate-report.module';

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomePageModule,
    RegistrationPageModule,
    SearchPageModule,
    UpdatePageModule,
    VendorPageModule,
    VendorRegistrationPageModule,
    VendorSearchPageModule,
    VendorUpdatePageModule,
    GenerateReportPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    RegistrationPage,
    SearchPage,
    UpdatePage,
    VendorPage,
    VendorRegistrationPage,
    VendorSearchPage,
    VendorUpdatePage,
    GenerateReportPage

    
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
