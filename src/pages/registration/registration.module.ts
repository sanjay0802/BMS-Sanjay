import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { RegistrationPage } from './registration';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
// import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';

@NgModule({
  declarations: [
    RegistrationPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistrationPageModule {}
