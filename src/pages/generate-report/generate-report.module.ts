import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerateReportPage } from './generate-report';

@NgModule({
  declarations: [
    GenerateReportPage,
  ],
  imports: [
    IonicPageModule.forChild(GenerateReportPage),
  ],
})
export class GenerateReportPageModule {}
