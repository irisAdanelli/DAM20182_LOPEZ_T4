import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user';
import { OtherPage1Page } from '../other-page1/other-page1';

/**
 * Generated class for the OtherPage2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-other-page2',
  templateUrl: 'other-page2.html',
})
export class OtherPage2Page {

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

  goToOtherPage1(){
    this.nav.push(OtherPage1Page);
  }

}
