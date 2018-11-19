import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../../pages/tabs/tabs';
/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Registrar(){
    this.navCtrl.setRoot(TabsPage)
  }

}
