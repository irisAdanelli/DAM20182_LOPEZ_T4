import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OtherPage2Page } from '../other-page2/other-page2';
import { UserService } from '../../services/user';

/**
 * Generated class for the OtherPage1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-other-page1',
  templateUrl: 'other-page1.html',
})
export class OtherPage1Page {
  private user: any;
  private nav: any;

  constructor(
    public navCtrl: NavController,
    user: UserService,
    nav: NavController) {
      console.log(user.name);
      this.user = user;
      this.nav = nav;

  }

  goToOtherPage2(){
    this.nav.push(OtherPage2Page);
  }

}
