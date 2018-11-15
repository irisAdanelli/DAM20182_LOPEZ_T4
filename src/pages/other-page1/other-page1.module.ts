import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtherPage1Page } from './other-page1';

@NgModule({
  declarations: [
    OtherPage1Page,
  ],
  imports: [
    IonicPageModule.forChild(OtherPage1Page),
  ],
})
export class OtherPage1PageModule {}
